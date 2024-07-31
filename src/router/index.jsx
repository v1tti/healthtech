import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes-constants";
import { QRCodeReader } from "../qr-reader/qrReader";
import GenerateQRCode from "../qr-reader/qrGenerator";
import { SquatExercise } from "../ui/components";

export const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <QRCodeReader />,
  },
  {
    path: ROUTES.GENERATE,
    element: <GenerateQRCode />,
  },
  {
    path: ROUTES.SQUAT,
    element: <SquatExercise />,
  },
]);
