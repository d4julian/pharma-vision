import threading
from inference_sdk import InferenceHTTPClient
import cv2
import base64

# Initialize the inference client
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key=""
)

# Initialize the webcam
cap = cv2.VideoCapture(0)  # Use 0 for the default camera

# Check if webcam is opened successfully
if not cap.isOpened():
    print("Error: Unable to access the webcam.")
    exit()

frame_count = 0  # Initialize a frame counter
latest_predictions = []  # Store predictions from inference

# Function to perform inference in a separate thread
def run_inference(frame):
    global latest_predictions
    _, buffer = cv2.imencode('.jpg', frame)
    frame_bytes = base64.b64encode(buffer).decode('utf-8')
    result = CLIENT.infer(frame_bytes, model_id="pills-sxdht/1")
    latest_predictions = result.get("predictions", [])

# Start the main loop
while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    if not ret:
        print("Error: Failed to capture frame.")
        break

    # Increment the frame counter
    frame_count += 1

    # Perform inference every 10 frames asynchronously
    if frame_count % 10 == 0:
        threading.Thread(target=run_inference, args=(frame.copy(),)).start()

    # Draw bounding boxes on the frame using the latest predictions
    for prediction in latest_predictions:
        x_min = int(prediction["x"] - prediction["width"] / 2)
        y_min = int(prediction["y"] - prediction["height"] / 2)
        x_max = int(prediction["x"] + prediction["width"] / 2)
        y_max = int(prediction["y"] + prediction["height"] / 2)

        # Draw the bounding box
        cv2.rectangle(frame, (x_min, y_min), (x_max, y_max), (0, 255, 0), 2)
        cv2.putText(frame, f'{prediction["class"]} {prediction["confidence"]:.2f}',
                    (x_min, y_min - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    # Display the frame
    cv2.imshow('Pill Detection', frame)

    # Exit the loop when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close windows
cap.release()
cv2.destroyAllWindows()