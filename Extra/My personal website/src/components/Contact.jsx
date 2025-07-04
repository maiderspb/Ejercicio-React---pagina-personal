import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    } else if (form.nombre.length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Correo electrónico inválido.";
    }

    if (!form.mensaje.trim()) {
      newErrors.mensaje = "El mensaje no puede estar vacío.";
    } else if (form.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("contactData", JSON.stringify(form));
    navigate("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="page-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Mensaje:
          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          {errors.mensaje && <span className="error">{errors.mensaje}</span>}
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
