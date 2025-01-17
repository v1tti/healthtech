import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';

export const GenerateQRCode = () => {
  const { route } = useParams();
  const url = `https://v1tti.github.io/healthtech-ex-squat${route}`;

  return (
    <div>
      <h1>QR Code for {route}</h1>
      <QRCode value={url} />
    </div>
  );
};

export default GenerateQRCode;
