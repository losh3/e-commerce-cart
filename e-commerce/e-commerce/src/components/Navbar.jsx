import { NavLink } from "react-router-dom";
import logotipo from "../assets/logotipo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid flex-row-reverse">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src={logotipo} alt="Logo" height="50" />
        </NavLink>

        {/* Toggler + Iconos lado derecho */}
        <div className="d-flex align-items-center flex-row-reverse gap-3">
          {/* Íconos (fuera del colapsable) */}
          <div className="d-flex gap-3 me-2">
            <NavLink to="/favorites" className="nav-link">
              <i className="bi bi-heart fs-5"></i>
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              <i className="bi bi-cart fs-5"></i>
            </NavLink>
          </div>

          {/* Botón para menú colapsable */}
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
        </div>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/deals" className="nav-link">
                Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Formulario de búsqueda */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
