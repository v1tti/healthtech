import { useState, useEffect } from "react";
import { Header } from "../ui/components/header/header";
import "./qrReader.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/routes-constants";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

export const QRCodeReader = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const navigate = useNavigate()
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
        const url = decodedResult.decodedText;
const path = url.split("/").pop(); 
const upperCasePath = path.toUpperCase(); 
console.log(upperCasePath);
        navigate(`${ROUTES[upperCasePath]}`)
    };

    return (
        <div className="App">
            <section className="App-section">
                <div className="App-section-title"> Html5-qrcode React demo</div>
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />

            </section>
        </div>
    );
};
