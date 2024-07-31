import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCodeReader from './qr-reader/qrReader';
import GenerateQRCode from './qr-reader/qrGenerator';
import {SquatExercise} from './ui/components/squat/SquatExercise'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/healthtech" element={<QRCodeReader />} />
        <Route path="/healthtech/generate/:route" element={<GenerateQRCode />} />
        <Route path="/healthtech/exercises/:squat" element={<SquatExercise />} />

      </Routes>
    </Router>
  );
};

export default App;
