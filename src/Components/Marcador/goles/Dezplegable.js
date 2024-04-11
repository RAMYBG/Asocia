import React, { useState, useEffect, createContext, useContext } from 'react';
import './style/ButtonDropdown.css'; // Archivo CSS para los estilos

// Crear un nuevo contexto para el idgame seleccionado
export const GameContext = createContext(null); // Exporta el contexto

function Dezplegable() {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET a la base de datos para obtener los partidos
    fetch('http://192.168.0.107/API_aso/consulta_partido.php')
      .then(response => response.json())
      .then(data => {
        setMatches(data.matches);
        setSelectedMatch(data.matches[0]); // Establecer el primer partido como seleccionado por defecto
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleMatchSelect = (match) => {
    setSelectedMatch(match);
  };

  useEffect(() => {
    // Log del idgame seleccionado cada vez que cambia
    console.log("ID del juego seleccionado:", selectedMatch ? selectedMatch.idgame : null);
  }, [selectedMatch]);

  return (
    <div className="dezplegable-container">
      <h3>Seleccionar Partido:</h3>
      <GameContext.Provider value={selectedMatch ? selectedMatch.idgame : null}>
        <div className="dropdown">
          <button className="dropbtn">
            {selectedMatch ? `${selectedMatch.local} vs ${selectedMatch.visitante} - ${selectedMatch.horario} (ID: ${selectedMatch.idgame})` : 'Selecciona el partido'}
          </button>
          <div className="dropdown-content">
            {matches.map((match) => (
              <button key={match.idgame} onClick={() => handleMatchSelect(match)}>
                {`${match.local} vs ${match.visitante} - ${match.horario} ${match.idgame}`}
              </button>
            ))}
          </div>
        </div>
      </GameContext.Provider>
    </div>
  );
}
export function useSelectedGameId() {
  return match.idgame;
}



export default Dezplegable;
