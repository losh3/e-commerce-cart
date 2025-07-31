import { NavLink } from "react-router-dom";
import logotipo from "../assets/logotipo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src={logotipo} alt="Logo" width="30" height="30" />
        </NavLink>

        {/* Botón para menú colapsable en móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Regístrate
              </NavLink>
            </li>
          </ul>

          {/* Íconos */}
          <div className="d-flex gap-3">
            <NavLink to="/login" className="nav-link">
              <i className="bi bi-heart fs-5"></i>
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              <i className="bi bi-cart fs-5"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
