import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>
        Home
      </Link>
      <Link to="/contact" style={{ margin: "0 1rem" }}>
        Contact
      </Link>
      <Link to="/about" style={{ margin: "0 1rem" }}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;
