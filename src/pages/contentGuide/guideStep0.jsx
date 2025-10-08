import React, { useState } from "react";

// Límite de tamaño del archivo en bytes (2MB)
const MAX_FILE_SIZE = 2 * 1024 * 1024;

// 1. Definimos los campos de carga en una configuración para que sea fácil de mantener
const UPLOAD_SLOTS = [
  { id: 'aviso', label: 'Aviso de Privacidad', required: true },
  { id: 'consentimientoTutor', label: 'Consentimiento Informado de Tutores', required: true },
  { id: 'consentimientoOtro', label: 'Consentimiento Adicional', required: false }
];

export default function GuideStep0({ onUploadSuccess, existingDocuments = {} }) {
  // 2. El estado ahora es un objeto para manejar múltiples archivos y errores
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (event, slotId) => {
    const file = event.target.files[0];
    
    // Limpiamos el error anterior para este campo
    setErrors(prev => ({ ...prev, [slotId]: null }));

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => ({ ...prev, [slotId]: "El archivo supera el límite de 2 MB." }));
        setFiles(prev => ({ ...prev, [slotId]: null })); // Limpiamos el archivo si hay error
        return;
      }
      setFiles(prev => ({ ...prev, [slotId]: file }));
    }
  };

  const handleSaveAndContinue = async () => {
    setIsProcessing(true);
    setErrors({}); // Limpia errores al intentar guardar

    // 3. Verificamos que todos los archivos obligatorios estén presentes
    const missingRequiredFiles = UPLOAD_SLOTS
      .filter(slot => slot.required)
      .some(slot => !files[slot.id]);

    if (missingRequiredFiles) {
      setErrors(prev => ({ ...prev, form: "Por favor, adjunta todos los documentos obligatorios." }));
      setIsProcessing(false);
      return;
    }

    // Función para convertir un archivo a Base64 usando Promesas
    const readFileAsBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };

    try {
      const uploadPromises = Object.keys(files).map(async (slotId) => {
        if (files[slotId]) {
          const fileData = await readFileAsBase64(files[slotId]);
          return { [slotId]: fileData };
        }
        return {};
      });

      const results = await Promise.all(uploadPromises);
      const uploadedData = results.reduce((acc, current) => ({ ...acc, ...current }), {});

      if (onUploadSuccess) {
        onUploadSuccess(uploadedData);
      }
    } catch (err) {
      setErrors(prev => ({ ...prev, form: "Ocurrió un error al procesar los archivos." }));
      console.error("Error procesando archivos:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  // Lógica para mostrar documentos existentes
  if (Object.keys(existingDocuments).length > 0) {
    return (
      <div>
        <h2>Paso 0: Consentimiento Informado</h2>
        <p>Estos son los documentos que fueron adjuntados.</p>
        {UPLOAD_SLOTS.map(slot => 
          existingDocuments[slot.id] && (
            <div key={slot.id} style={{ marginBottom: '2rem', border: '1px solid #eee', padding: '1rem' }}>
              <h4>{slot.label}</h4>
              <FilePreview document={existingDocuments[slot.id]} />
            </div>
          )
        )}
      </div>
    );
  }

  // Comprobamos si los campos obligatorios están llenos para habilitar el botón
  const requiredFilesLoaded = UPLOAD_SLOTS
    .filter(slot => slot.required)
    .every(slot => !!files[slot.id]);

  return (
    <div>
      <h2>Paso 0: Consentimiento Informado</h2>
      <p>Para continuar, es necesario que subas los documentos solicitados. (Tamaño máximo por archivo: 2 MB)</p>
      
      {/* 4. Mapeamos los campos de carga dinámicamente */}
      {UPLOAD_SLOTS.map(slot => (
        <div key={slot.id} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
            {slot.label} {slot.required && <span style={{ color: 'red' }}> (Obligatorio)</span>}
          </label>
          <input
            type="file"
            accept="image/*,.pdf,.doc,.docx"
            onChange={(e) => handleFileSelect(e, slot.id)}
            disabled={isProcessing}
          />
          {files[slot.id] && <p style={{ marginTop: '0.5rem', color: 'green' }}>Archivo seleccionado: {files[slot.id].name}</p>}
          {errors[slot.id] && <p style={{ color: "red", fontWeight: "bold" }}>⚠️ {errors[slot.id]}</p>}
        </div>
      ))}

      <button onClick={handleSaveAndContinue} disabled={!requiredFilesLoaded || isProcessing} className="button button-primary">
        {isProcessing ? "Procesando..." : "Adjuntar y Continuar"}
      </button>

      {errors.form && <p style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>⚠️ {errors.form}</p>}
    </div>
  );
}

// Componente auxiliar para no repetir la lógica de visualización
const FilePreview = ({ document }) => {
  const isImage = document.startsWith('data:image');
  const isPdf = document.startsWith('data:application/pdf');

  if (isImage) {
    return <img src={document} alt="Documento" style={{ maxWidth: '100%', border: '1px solid #ccc' }} />;
  }
  if (isPdf) {
    return <iframe src={document} width="100%" height="500px" title="Documento" />;
  }
  return (
    <a href={document} download="documento_adjunto" className="button button-secondary">
      Descargar Documento
    </a>
  );
};