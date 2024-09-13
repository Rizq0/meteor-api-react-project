import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { NightModeProvider } from "./contexts/night-mode.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NightModeProvider>
      <App />
    </NightModeProvider>
  </BrowserRouter>
);
