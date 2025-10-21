import React, { useState } from "react";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const UPLOAD_SLOTS = [
    { id: 'aviso', label: 'Aviso de privacidad', required: true },
    { id: 'consentimientoTutor', label: 'Consentimieno Informado (Padre, Madre o Tutor)', required: true },
    { id: 'consentimientoNNA', label: 'Consentimiento Informado NNA', required: false }
];

export default function GuideStep0({ onUploadSuccess, existingDocuments = {}, editable = true, withNavbar = true }) {
    const [files, setFiles] = useState({});
    const [errors, setErrors] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    // ✅ FUNCIÓN COMPLETADA: Ahora sí guarda el archivo en el estado.
    const handleFileSelect = (event, slotId) => {
        const file = event.target.files[0];
        setErrors(prev => ({ ...prev, [slotId]: null }));

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setErrors(prev => ({ ...prev, [slotId]: "El archivo supera el límite de 2 MB." }));
                setFiles(prev => ({ ...prev, [slotId]: null }));
                return;
            }
            setFiles(prev => ({ ...prev, [slotId]: file }));
        }
    };

    // ✅ FUNCIÓN COMPLETADA: Procesa y envía los archivos para ser guardados.
    const handleSaveAndContinue = async () => {
        setIsProcessing(true);
        setErrors({});

        const missingRequiredFiles = UPLOAD_SLOTS
            .filter(slot => slot.required)
            .some(slot => !files[slot.id]);

        if (missingRequiredFiles) {
            setErrors(prev => ({ ...prev, form: "Por favor, adjunta todos los documentos obligatorios." }));
            setIsProcessing(false);
            return;
        }

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

            // ¡Punto clave! Llama a la función del padre para guardar los datos.
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

    // --- Renderizado del Componente ---
    
    // Vista para cuando ya existen documentos
    if (Object.keys(existingDocuments).length > 0) {
        return (
            <>
                {withNavbar && <Navbar title="Paso 0: Consentimiento Informado" />}
                <div className="guideStepContainer">
                    <h1>PASO 0. CONSENTIMIENTO INFORMADO</h1>
                    <h2>Documentos Adjuntados</h2>
                    <p>Estos son los documentos que se encuentran actualmente en el sistema.</p>
                    {UPLOAD_SLOTS.map(slot => 
                        existingDocuments[slot.id] ? (
                            <div key={slot.id} style={{ marginTop: '2rem' }}>
                                <h3>{slot.label}</h3>
                                <FilePreview document={existingDocuments[slot.id]} />
                            </div>
                        ) : null
                    )}
                </div>
            </>
        );
    }
    
    const requiredFilesLoaded = UPLOAD_SLOTS.filter(s => s.required).every(s => !!files[s.id]);

    // Vista del formulario para subir archivos
    return (
        <>
            {withNavbar && <Navbar title="Paso 0: Consentimiento Informado" />}
            <div className="guideStepContainer">
                <h1>PASO 0. CONSENTIMIENTO INFORMADO</h1>
                <h2>Instrucciones para la carga de documentos</h2>
                {editable ? (
                    <p>Para continuar, sube los documentos solicitados. El tamaño máximo por archivo es de 2 MB.</p>
                ) : (
                    <p>Estás en modo de consulta. Los campos para subir archivos están deshabilitados.</p>
                )}
                <div style={{marginTop: '2rem'}}>
                    {UPLOAD_SLOTS.map(slot => (
                        <div key={slot.id} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }}>
                            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                                {slot.label} {slot.required && editable && <span style={{ color: 'red' }}> (Obligatoratorio)</span>}
                            </label>
                            <input
                                type="file"
                                accept="image/*,.pdf,.doc,.docx"
                                onChange={(e) => handleFileSelect(e, slot.id)}
                                disabled={isProcessing || !editable}
                            />
                            {files[slot.id] && <p style={{ marginTop: '0.5rem', color: 'green' }}>Archivo: {files[slot.id].name}</p>}
                            {errors[slot.id] && <p style={{ color: "red", fontWeight: "bold" }}>⚠️ {errors[slot.id]}</p>}
                        </div>
                    ))}
                </div>
                {editable && (
                    <>
                        <button 
                            onClick={handleSaveAndContinue} 
                            disabled={!requiredFilesLoaded || isProcessing} 
                            className="button button-primary"
                        >
                            {isProcessing ? "Procesando..." : "Adjuntar y Continuar"}
                        </button>
                        {errors.form && <p style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>⚠️ {errors.form}</p>}
                    </>
                )}
            </div>
        </>
    );
}

// Componente auxiliar para previsualizar
const FilePreview = ({ document }) => {
    const isImage = document.startsWith('data:image');
    const isPdf = document.startsWith('data:application/pdf');
    if (isImage) return <img src={document} alt="Documento" style={{ maxWidth: '100%', border: '1px solid #ccc' }} />;
    if (isPdf) return <iframe src={document} width="100%" height="500px" title="Documento" />;
    return <a href={document} download="documento_adjunto" className="button button-secondary">Descargar Documento</a>;
};