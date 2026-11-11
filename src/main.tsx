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
import PedogenicProcessesPage from "./pages/PedogenicProcessesPage.tsx";
import SoilGalleryPage from "./pages/SoilGalleryPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn/clorpt" element={<ClorptPage />} />
        <Route path="/learn/pedogenic-processes" element={<PedogenicProcessesPage />} />
        <Route path="/learn/soil-gallery" element={<SoilGalleryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
