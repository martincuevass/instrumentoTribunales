import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";

import GuideStep1 from "./pages/contentGuide/guideStep1";
import GuideStep2 from "./pages/contentGuide/guideStep2";
import GuideStep3 from "./pages/contentGuide/guideStep3";
import GuideStep4 from "./pages/contentGuide/guideStep4";
import GuideStep5 from "./pages/contentGuide/guideStep5";

import AnexoA from "./pages/contentGuide/anexoA";
import AnexoB from "./pages/contentGuide/anexoB";
import AnexoC from "./pages/contentGuide/anexoC";
import AnexoD from "./pages/contentGuide/anexoD";
import AnexoE from "./pages/contentGuide/anexoE";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route path="/contentGuide/guideStep1" element={<GuideStep1 />} />
      <Route path="/contentGuide/guideStep2" element={<GuideStep2 />} />
      <Route path="/contentGuide/guideStep3" element={<GuideStep3 />} />
      <Route path="/contentGuide/guideStep4" element={<GuideStep4 />} />
      <Route path="/contentGuide/guideStep5" element={<GuideStep5 />} />

      <Route path="/contentGuide/anexoA" element={<AnexoA />} />
      <Route path="/contentGuide/anexoB" element={<AnexoB />} />
      <Route path="/contentGuide/anexoC" element={<AnexoC />} />
      <Route path="/contentGuide/anexoD" element={<AnexoD />} />
      <Route path="/contentGuide/anexoE" element={<AnexoE />} />

      


      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
