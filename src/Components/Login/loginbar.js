import React, { useState } from 'react';
import './Navbarcopy.css'; // Importar el archivo de estilos CSS

const Navbarcopy = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Estado para controlar la visibilidad de la lista desplegable

  // Función para alternar la visibilidad de la lista desplegable
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light" > {/* Cambiar a navbar-light para tener el fondo blanco */}
        <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      {/* Lista desplegable */}
      <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Opción 1</a>
        <a className="dropdown-item" href="#">Opción 2</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Opción 3</a>
      </div>
    </React.Fragment>
  );
};

export default Navbarcopy;
