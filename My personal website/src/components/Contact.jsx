import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.nombre.trim().length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    localStorage.setItem("contactData", JSON.stringify(form));
    navigate("/");
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <div>
          <label>Nombre:</label>
          <br />
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "100%", borderRadius: "6px" }}
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "100%", borderRadius: "6px" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;

