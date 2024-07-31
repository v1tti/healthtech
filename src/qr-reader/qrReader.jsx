import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../ui/components/header/header";
import "./qrReader.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { ROUTES } from "../router/routes-constants";

export const QRCodeReader = () => {
  const [scanner, setScanner] = useState(null);
  const [cameraFacingMode, setCameraFacingMode] = useState("user"); // 'user' for front camera, 'environment' for rear camera


  useEffect(() => {
    const newScanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 5,
      facingMode: cameraFacingMode // Configuração da câmera
    });

    newScanner.render(onScanSuccess, onScanError);

    setScanner(newScanner);

    return () => {
      newScanner.clear();
    };
  }, [cameraFacingMode]);

  const onScanSuccess = (result) => {
    scanner.clear();
    return <Link to={ROUTES.SQUAT}></Link> 
  };

  const onScanError = (err) => {
    console.warn(err);
  };

  const toggleCamera = () => {
    setCameraFacingMode((prevMode) =>
      prevMode === "user" ? "environment" : "user"
    );
  };

  return (
    <div className="container">
      <Header />
      <button onClick={toggleCamera}>
        {cameraFacingMode === "user" ? "Switch to Rear Camera" : "Switch to Front Camera"}
      </button>
      <div id="reader"></div>
    </div>
  );
};
