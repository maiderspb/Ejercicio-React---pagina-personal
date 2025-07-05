import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("reservation", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Haz tu reserva</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Fecha:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Hora:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Número de personas:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default Reserve;



