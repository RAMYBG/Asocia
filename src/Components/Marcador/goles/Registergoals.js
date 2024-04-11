import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/GoalRegistrationForm.css'; // Archivo CSS para los estilos
import { GameContext } from './Dezplegable'; // Importar el contexto GameContext

function GoalRegistrationForm() {
  const [playerName, setPlayerName] = useState('');
  const [team, setTeam] = useState('');
  const [time, setTime] = useState('');
  const selectedGameId = useContext(GameContext); // Usar el contexto para obtener el idgame seleccionado
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [minutes, seconds] = time.split(':'); // Dividir el tiempo en minutos y segundos
    const minuto_segundo = `${minutes}:${seconds}`; // Formato MM:SS

    try {
      // Realizar la solicitud a tu backend para insertar el registro
      const response = await fetch('http://192.168.0.107/API_aso/insertGoal.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playerName,
          team,
          minuto_segundo, // Enviar tiempo en formato MM:SS
          idgame: selectedGameId, // Enviar el idgame seleccionado
          selectedTeam, // Enviar la selección del usuario
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Mostrar notificación de éxito
        toast.success(data.message);
      } else {
        // Mostrar notificación de error
        toast.error(data.message);
      }

      // Reiniciar los campos del formulario
      setPlayerName('');
      setTeam('');
      setTime('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="goal-registration-form-container">
      <h2>Registro de Gol</h2>
      <form onSubmit={handleSubmit} className="goal-registration-form">
        <div className="form-group">
          <label htmlFor="playerName">Jugador que anotó:</label>
          <input
            id="playerName"
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="team">Equipo:</label>
          <input
            id="team"
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Tiempo (MM:SS):</label>
          <input
            id="time"
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedTeam">Seleccionar Equipo:</label>
          <select
            id="selectedTeam"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="form-control"
          >
            <option value="">Selecciona un equipo</option>
            <option value="local">{`Equipo Local (${selectedGameId})`}</option>
            <option value="visitante">{`Equipo Visitante (${selectedGameId})`}</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Registrar Gol</button>
      </form>
      <ToastContainer /> {/* Componente de react-toastify */}
    </div>
  );
}

export default GoalRegistrationForm;
