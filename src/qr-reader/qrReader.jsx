import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebCam from 'react-webcam';
import jsQR from 'jsqr';
import { Header } from '../ui/components/header/header';
import './qrReader.css';

export const QRCodeReader = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [cameraFacingMode, setCameraFacingMode] = useState('user'); // 'user' for front camera, 'environment' for rear camera
  const [intervalId, setIntervalId] = useState(null);

  const handleScan = (data) => {
    if (data) {
      console.log('QR Code Data:', data); // Adicionado para depuração
      navigate(data);
    }
  };

  const handleError = (err) => {
    console.error('Camera Error:', err); // Adicionado para depuração
  };

  const scanQRCode = () => {
    const video = webcamRef.current.video;
    if (video) {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        handleScan(code.data);
      } else {
        console.log('QR Code not detected'); // Adicionado para depuração
      }
    }
  };

  useEffect(() => {
    const id = setInterval(scanQRCode, 1000); // Verifica a cada 1 segundo
    setIntervalId(id);
    
    return () => {
      clearInterval(id); // Limpa o intervalo ao desmontar o componente
    };
  }, []);

  const toggleCamera = () => {
    setCameraFacingMode((prevMode) =>
      prevMode === 'user' ? 'environment' : 'user'
    );
  };

  return (
    <div className='container'>
      <Header />
      <h1>Scan QR Code</h1>
      <button onClick={toggleCamera}>
        {cameraFacingMode === 'user' ? 'Switch to Rear Camera' : 'Switch to Front Camera'}
      </button>
      <div className='qr-reader-wrapper'>
        <WebCam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          videoConstraints={{ facingMode: cameraFacingMode }}
          onUserMediaError={handleError}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};


