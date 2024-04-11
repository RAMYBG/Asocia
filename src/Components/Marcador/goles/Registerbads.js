import React, { useState } from 'react';
import './style/FaltasRegistrationForm.css'; // Importar el archivo CSS

function FaltasRegistrationForm() {
  const [tipoFalta, setTipoFalta] = useState('');
  const [jugador, setJugador] = useState('');
  const [equipo, setEquipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend para su procesamiento
    console.log('Datos de la falta:', { tipoFalta, jugador, equipo });
    // Aquí puedes reiniciar los campos del formulario
    setTipoFalta('');
    setJugador('');
    setEquipo('');
  };

  return (
    <div className="faltas-registration-form-container">
      <h2 className="form-title">Registro de Faltas</h2>
      <form className="faltas-registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Tipo de falta:</label>
          <input
            type="text"
            value={tipoFalta}
            onChange={(e) => setTipoFalta(e.target.value)}
            className="form-control"
            placeholder="Ingrese el tipo de falta"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Jugador que cometió la falta:</label>
          <input
            type="text"
            value={jugador}
            onChange={(e) => setJugador(e.target.value)}
            className="form-control"
            placeholder="Ingrese el nombre del jugador"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Equipo:</label>
          <input
            type="text"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
            className="form-control"
            placeholder="Ingrese el nombre del equipo"
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Registrar Falta
        </button>
      </form>
    </div>
  );
}

export default FaltasRegistrationForm;
