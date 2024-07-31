import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import { Header } from '../ui/components/header/header';
import './qrReader.css'
const QRCodeReader = () => {
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      navigate(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className='container'>
      <Header></Header>
      <h1>Scan QR Code</h1>
      <div className='qr-reader-wrapper'>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default QRCodeReader;
