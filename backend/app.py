from flask import Flask, request, jsonify
import cv2
import base64
import numpy as np
from inference_sdk import InferenceHTTPClient
from flask_cors import CORS, cross_origin

# Initialize the Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) # Enable CORS

app.config['CORS_HEADERS'] = 'application/json'

# Initialize the inference client
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key=""
)

# Define the inference route
@app.route('/detect', methods=['POST'])
@cross_origin(origin="*")
def detect():

    # Get the image data from the request
    data = request.get_json()
    if not data or 'image' not in data:
        return jsonify({'error': 'No image data received'}), 400
    image_data = data['image']  # base64-encoded image string
    
    # Decode the base64 image
    image_bytes = base64.b64decode(image_data.split(',')[1])  # Remove the header
    np_image = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(np_image, cv2.IMREAD_COLOR)

    # Perform inference
    _, buffer = cv2.imencode('.jpg', image)
    frame_bytes = base64.b64encode(buffer).decode('utf-8')
    result = CLIENT.infer(frame_bytes, model_id="pills-sxdht/1")
    
    # Get the predictions and return them as JSON
    predictions = result.get("predictions", [])
    return jsonify(predictions)

if __name__ == '__main__':
    app.run(debug=True)
