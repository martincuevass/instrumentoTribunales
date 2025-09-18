import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ChildTable from "./pages/childTable"
import Instrument from "./pages/instrument"
import Anexos from "./pages/anexoshandler"

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

import Apendice1 from "./pages/contentGuide/apendice1";
import Apendice2 from "./pages/contentGuide/apendice2";
import Apendice3 from "./pages/contentGuide/apendice3";
import Apendice4 from "./pages/contentGuide/apendice4";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/childTable" element={<ChildTable />} />
      <Route path="/instrument/:id" element={<Instrument />} />
      <Route path="/anexoshandler/:id" element={<Anexos />} />
      
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

      <Route path="/contentGuide/apendice1" element={<Apendice1 />} />
      <Route path="/contentGuide/apendice2" element={<Apendice2 />} />
      <Route path="/contentGuide/apendice3" element={<Apendice3 />} />
      <Route path="/contentGuide/apendice4" element={<Apendice4 />} />


      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
