import React, { useState } from "react";

// Límite de tamaño del archivo en bytes (ej. 2MB)
const MAX_FILE_SIZE = 2 * 1024 * 1024; 

export default function GuideStep0({ onUploadSuccess, existingDocument }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // -> 1. Verificación del tamaño del archivo
      if (file.size > MAX_FILE_SIZE) {
        setError("El archivo es demasiado grande. El límite es de 2 MB.");
        setSelectedFile(null);
        setFileName("");
        return;
      }
      setSelectedFile(file);
      setFileName(file.name);
      setError("");
    }
  };

  const handleSaveAndContinue = () => {
    if (!selectedFile) {
      setError("Por favor, selecciona un archivo para continuar.");
      return;
    }
    setIsProcessing(true);
    setError("");

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const fileDataInBase64 = reader.result;
      if (onUploadSuccess) {
        onUploadSuccess({ fileData: fileDataInBase64 });
      }
      setIsProcessing(false);
    };

    reader.onerror = (err) => {
      setError("Ocurrió un error al procesar el archivo. Inténtalo de nuevo.");
      console.error("Error con FileReader:", err);
      setIsProcessing(false);
    };
  };

  // La lógica para mostrar el documento existente no cambia
  if (existingDocument) {
    const isImage = existingDocument.startsWith('data:image');
    const isPdf = existingDocument.startsWith('data:application/pdf');

    return (
      <div>
        <h2>Paso 0: Consentimiento Informado</h2>
        <p>Este es el documento que fue adjuntado.</p>
        {isImage && <img src={existingDocument} alt="Consentimiento Informado" style={{ maxWidth: '100%', border: '1px solid #ccc' }} />}
        {isPdf && <iframe src={existingDocument} width="100%" height="600px" title="Consentimiento Informado" />}
        {!isImage && !isPdf && (
          <a href={existingDocument} download="consentimiento_informado" className="button button-primary">
            Descargar Documento
          </a>
        )}
      </div>
    );
  }

  // El formulario de subida ahora muestra el error de tamaño si es necesario
  return (
    <div>
      <h2>Paso 0: Consentimiento Informado</h2>
      <p>
        Para continuar, es necesario que subas el documento o imagen del
        consentimiento informado firmado. (Tamaño máximo: 2 MB)
      </p>

      <input
        type="file"
        accept="image/*,.pdf,.doc,.docx"
        onChange={handleFileSelect}
        style={{ marginBottom: "1rem" }}
        disabled={isProcessing}
      />
      
      <button onClick={handleSaveAndContinue} disabled={!selectedFile || isProcessing} className="button button-primary">
        {isProcessing ? "Procesando..." : "Adjuntar Consentimiento"}
      </button>

      {fileName && <p style={{ marginTop: '1rem' }}>Archivo seleccionado: {fileName}</p>}
      {error && <p style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>⚠️ {error}</p>}
    </div>
  );
}

