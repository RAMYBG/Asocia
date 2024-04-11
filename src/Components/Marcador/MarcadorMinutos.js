import React from 'react';

const MarcadorMinutos = ({ minutos }) => {
  return (
    <div className="marcador-minutos">
      <h2>Marcador de Minutos</h2>
      <div className="minutos-display">
        <span>{minutos < 10 ? `0${minutos}` : minutos}</span>
      </div>
    </div>
  );
};

export default MarcadorMinutos;
