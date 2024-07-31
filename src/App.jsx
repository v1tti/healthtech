import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodeReader from "./qr-reader/qrReader";
import GenerateQRCode from "./qr-reader/qrGenerator";
import { SquatExercise } from "./ui/components/squat/SquatExercise";

const App = () => {
  return (
    <Router basename="/healthtech">
      <Routes>
        <Route path="/" element={<QRCodeReader />} />
        <Route path="generate/:route" element={<GenerateQRCode />} />
        <Route path="exercises/:squat" element={<SquatExercise />} />
      </Routes>
    </Router>
  );
};

export default App;
