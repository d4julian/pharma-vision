import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const WebcamCapture = ({detections, setDetections}) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Capture image and send it to Flask backend for inference
  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();  // Capture the image from the webcam
    console.log(imageSrc);  // Check the captured image in base64 format
  
    // Send the captured image to the Flask backend
    try {
      const response = await axios.post('http://127.0.0.1:5000/detect', { image: imageSrc }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Custom-Header': 'foobar',
        },
        cache: 'no-store'  // Cache control (optional, supported by some browsers)
      });
      setDetections(response.data);  // Store the detection results in state
      console.log(response.data);  // Log the detection results
      drawBoundingBoxes(response.data);  // Draw the bounding boxes
    } catch (error) {
      console.error('Error detecting objects:', error);
    }
  }, [webcamRef, setDetections]);
  

  // Function to draw bounding boxes on the canvas
  const drawBoundingBoxes = (detections) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas dimensions to match the webcam video
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, videoWidth, videoHeight);

    // Draw each bounding box
    detections.forEach((detection) => {
      const { x, y, width, height, class: className, confidence } = detection;

      const x_min = x - width / 2;
      const y_min = y - height / 2;

      // Draw bounding box
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 2;
      ctx.strokeRect(x_min, y_min, width, height);

      // Draw label and confidence score
      ctx.font = '18px Arial';
      ctx.fillStyle = 'green';
      ctx.fillText(`${className} (${Math.round(confidence * 100)}%)`, x_min, y_min - 10);
    });
  };

  useEffect(() => {
    // Set an interval to capture frames for real-time detection
    //const interval = setInterval(capture, 150);  // Adjust the interval as needed
    const interval = setInterval(capture, 1000);  // Adjust the interval as needed
    return () => clearInterval(interval);  // Clean up on component unmount
  }, [capture]);

  return (
    <div style={{ position: 'relative' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{ width: 640, height: 480 }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Display detection results as text */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
        <h3>Detections:</h3>
        {detections.length > 0 ? (
          <ul>
            {detections.map((detection, index) => (
              <li key={index}>
                {detection.class}: {Math.round(detection.confidence * 100)}% (x: {detection.x}, y: {detection.y})
              </li>
            ))}
          </ul>
        ) : (
          <p>No detections yet</p>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;
