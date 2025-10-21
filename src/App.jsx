import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// --- Componente Guardián para Rutas Protegidas ---
// Este componente revisa si el usuario ha iniciado sesión.
function ProtectedRoute({ children }) {
  const user = localStorage.getItem('currentUser');
  if (!user) {
    // Si no hay usuario, redirige a la página de login.
    return <Navigate to="/" replace />;
  }
  // Si hay usuario, muestra el contenido de la ruta.
  return children;
}

// --- Importaciones de tus páginas ---
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ChildTable from "./pages/childTable";
import Instrument from "./pages/instrument";
import Anexos from "./pages/anexoshandler";
import Profile from "./pages/profile";

// Importamos el nuevo componente
import GuideStep0 from "./pages/contentGuide/guideStep0"; 

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
      {/* --- Rutas Públicas --- */}
      {/* Cualquiera puede acceder a estas rutas */}
      <Route path="/" element={<Login />} />

      {/* --- Rutas Protegidas --- */}
      {/* Solo usuarios que han iniciado sesión pueden acceder a estas rutas */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/childTable" element={<ProtectedRoute><ChildTable /></ProtectedRoute>} />
      <Route path="/instrument/:id" element={<ProtectedRoute><Instrument /></ProtectedRoute>} />
      <Route path="/anexoshandler/:id" element={<ProtectedRoute><Anexos /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      {/* --- Rutas de Contenido (También Protegidas) --- */}
      <Route path="/contentGuide/guideStep0" element={<ProtectedRoute><GuideStep0 editable={false} /></ProtectedRoute>} />
      <Route path="/contentGuide/guideStep1" element={<ProtectedRoute><GuideStep1 /></ProtectedRoute>} />
      <Route path="/contentGuide/guideStep2" element={<ProtectedRoute><GuideStep2 /></ProtectedRoute>} />
      <Route path="/contentGuide/guideStep3" element={<ProtectedRoute><GuideStep3 /></ProtectedRoute>} />
      <Route path="/contentGuide/guideStep4" element={<ProtectedRoute><GuideStep4 /></ProtectedRoute>} />
      <Route path="/contentGuide/guideStep5" element={<ProtectedRoute><GuideStep5 /></ProtectedRoute>} />

      <Route path="/contentGuide/anexoA" element={<ProtectedRoute><AnexoA /></ProtectedRoute>} />
      <Route path="/contentGuide/anexoB" element={<ProtectedRoute><AnexoB /></ProtectedRoute>} />
      <Route path="/contentGuide/anexoC" element={<ProtectedRoute><AnexoC /></ProtectedRoute>} />
      <Route path="/contentGuide/anexoD" element={<ProtectedRoute><AnexoD /></ProtectedRoute>} />
      <Route path="/contentGuide/anexoE" element={<ProtectedRoute><AnexoE /></ProtectedRoute>} />

      <Route path="/contentGuide/apendice1" element={<ProtectedRoute><Apendice1 /></ProtectedRoute>} />
      <Route path="/contentGuide/apendice2" element={<ProtectedRoute><Apendice2 /></ProtectedRoute>} />
      <Route path="/contentGuide/apendice3" element={<ProtectedRoute><Apendice3 /></ProtectedRoute>} />
      <Route path="/contentGuide/apendice4" element={<ProtectedRoute><Apendice4 /></ProtectedRoute>} />

      {/* --- Ruta Comodín --- */}
      {/* Si el usuario escribe una URL que no existe, lo redirige al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}