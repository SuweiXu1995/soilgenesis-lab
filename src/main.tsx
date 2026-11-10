import "./engine/testSimulation";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import ClorptPage from "./pages/ClorptPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn/clorpt" element={<ClorptPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
