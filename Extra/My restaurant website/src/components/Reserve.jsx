import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!formData.date || formData.date < today) {
      newErrors.date = "La fecha no puede ser anterior a hoy.";
    }

    if (!formData.time || formData.time < "10:00" || formData.time > "22:00") {
      newErrors.time = "La hora debe estar entre 10:00 y 22:00.";
    }

    const guests = parseInt(formData.guests);
    if (!guests || guests < 1 || guests > 20) {
      newErrors.guests = "Debe ser un número entre 1 y 20.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("reservation", JSON.stringify(formData));
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reserva tu lugar</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.field}>
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            style={styles.input}
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p style={styles.error}>{errors.date}</p>}
        </div>

        <div style={styles.field}>
          <label>Hora:</label>
          <input
            type="time"
            name="time"
            style={styles.input}
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <p style={styles.error}>{errors.time}</p>}
        </div>

        <div style={styles.field}>
          <label>Personas:</label>
          <input
            type="number"
            name="guests"
            style={styles.input}
            value={formData.guests}
            onChange={handleChange}
          />
          {errors.guests && <p style={styles.error}>{errors.guests}</p>}
        </div>

        <button type="submit" style={styles.button}>
          Reservar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    fontSize: "0.85rem",
    marginTop: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Reserve;
