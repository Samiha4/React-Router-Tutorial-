import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  //!Method 1: Using Router Provider
  <StrictMode>
    <App />
  </StrictMode>

  //!Method 2: Using Routes and Route components
  /*<BrowserRouter>
    <App />
    </BrowserRouter>
    */
);
