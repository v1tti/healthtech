import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import "./App.css";
import './index.css'
function App() {
  return <RouterProvider router={router} />;
}

export default App;
