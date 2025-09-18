import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoA({ editable = false, withNavbar = true }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    nacimiento: { dd: "", mm: "", aa: "" },
    sexo: "",
    municipio: "",
    salud: { tiene: "", detalle: "" },
    discapacidad: { tiene: "", tipos: [] },
    interprete: { necesita: "", detalle: "", tipos: [] },
    delito: "",
    canalizacion: { requiere: "", tipos: [] },
    fechaAplicacion: { dd: "", mm: "", aa: "" },
  });

  useEffect(() => {
    if (editable) {
      const saved = localStorage.getItem(`anexoA-${id}`);
      if (saved) {
        setForm(JSON.parse(saved));
      }
    }
  }, [id, editable]);

  useEffect(() => {
    if (editable) {
      localStorage.setItem(`anexoA-${id}`, JSON.stringify(form));
    }
  }, [form, id, editable]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleCheckboxGroup = (section, value) => {
    setForm((prev) => {
      const arr = prev[section].tipos.includes(value)
        ? prev[section].tipos.filter((v) => v !== value)
        : [...prev[section].tipos, value];
      return { ...prev, [section]: { ...prev[section], tipos: arr } };
    });
  };

  const handleSalir = () => {
    navigate(-1);
  };

  return (
    <>
      {withNavbar && <Navbar title="Anexo A" />}

      <div className="guideStepContainer">
        <table className="styled-table">
          <tbody>
            <tr>
              <td colSpan={4}>Revisión del expediente</td>
            </tr>
            <tr>
              <td colSpan={4}>
                Datos de identificación de la Niña, Niño o Adolescente
              </td>
            </tr>
            <tr>
              <td>Nombre:</td>
              <td colSpan={3}>
                <input
                  type="text"
                  disabled={!editable}
                  value={form.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Edad:</td>
              <td colSpan={3}>
                <input
                  type="number"
                  disabled={!editable}
                  value={form.edad}
                  onChange={(e) => handleChange("edad", e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Fecha de nacimiento:</td>
              <td>
                <input
                  type="text"
                  placeholder="DD"
                  disabled={!editable}
                  value={form.nacimiento.dd}
                  onChange={(e) =>
                    handleNestedChange("nacimiento", "dd", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="MM"
                  disabled={!editable}
                  value={form.nacimiento.mm}
                  onChange={(e) =>
                    handleNestedChange("nacimiento", "mm", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="AA"
                  disabled={!editable}
                  value={form.nacimiento.aa}
                  onChange={(e) =>
                    handleNestedChange("nacimiento", "aa", e.target.value)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Sexo:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    disabled={!editable}
                    checked={form.sexo === "Mujer"}
                    onChange={() => handleChange("sexo", "Mujer")}
                  />
                  Mujer
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="radio"
                    disabled={!editable}
                    checked={form.sexo === "Hombre"}
                    onChange={() => handleChange("sexo", "Hombre")}
                  />
                  Hombre
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="radio"
                    disabled={!editable}
                    checked={form.sexo === "Otro"}
                    onChange={() => handleChange("sexo", "Otro")}
                  />
                  Otro
                </label>
              </td>
            </tr>
            <tr>
              <td>Municipio en el que vive:</td>
              <td colSpan={3}>
                <input
                  type="text"
                  disabled={!editable}
                  value={form.municipio}
                  onChange={(e) => handleChange("municipio", e.target.value)}
                />
              </td>
            </tr>
            {/* Ejemplo condicional de salud */}
            <tr>
              <td>¿Se reporta alguna condición de salud?:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    disabled={!editable}
                    checked={form.salud.tiene === "No"}
                    onChange={() =>
                      handleNestedChange("salud", "tiene", "No")
                    }
                  />
                  No
                </label>
              </td>
              <td colSpan={2}>
                <label>
                  <input
                    type="radio"
                    disabled={!editable}
                    checked={form.salud.tiene === "Sí"}
                    onChange={() =>
                      handleNestedChange("salud", "tiene", "Sí")
                    }
                  />
                  Sí
                </label>
                {editable && form.salud.tiene === "Sí" && (
                  <input
                    type="text"
                    placeholder="¿Cuál?"
                    value={form.salud.detalle}
                    onChange={(e) =>
                      handleNestedChange("salud", "detalle", e.target.value)
                    }
                  />
                )}
              </td>
            </tr>
            {/* Grupo de checkboxes discapacidad */}
            <tr>
              <td>¿Se reporta alguna discapacidad?:</td>
              <td colSpan={3}>
                {[
                  "Intelectual",
                  "Auditiva",
                  "Desarrollo",
                  "Visual",
                  "Física",
                  "Psicosocial",
                  "Cognitiva",
                ].map((tipo) => (
                  <label key={tipo} style={{ marginRight: "1rem" }}>
                    <input
                      type="checkbox"
                      disabled={!editable}
                      checked={form.discapacidad.tipos.includes(tipo)}
                      onChange={() =>
                        editable && handleCheckboxGroup("discapacidad", tipo)
                      }
                    />
                    {tipo}
                  </label>
                ))}
              </td>
            </tr>
            <tr>
              <td>Tipo de delito que se investiga:</td>
              <td colSpan={3}>
                <input
                  type="text"
                  disabled={!editable}
                  value={form.delito}
                  onChange={(e) => handleChange("delito", e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Fecha de aplicación:</td>
              <td>
                <input
                  type="text"
                  placeholder="DD"
                  disabled={!editable}
                  value={form.fechaAplicacion.dd}
                  onChange={(e) =>
                    handleNestedChange("fechaAplicacion", "dd", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="MM"
                  disabled={!editable}
                  value={form.fechaAplicacion.mm}
                  onChange={(e) =>
                    handleNestedChange("fechaAplicacion", "mm", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="AA"
                  disabled={!editable}
                  value={form.fechaAplicacion.aa}
                  onChange={(e) =>
                    handleNestedChange("fechaAplicacion", "aa", e.target.value)
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Botón solo si es editable */}
        {editable && (
          <div style={{ marginTop: "1.5rem" }}>
            <button
              className="button button-secondary"
              onClick={handleSalir}
            >
              Guardar y volver
            </button>
          </div>
        )}
      </div>
    </>
  );
}
