import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);  // You can use this image for pill counting later
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};

export default WebcamCapture;
