import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cronometro.css'; // Importa el archivo CSS para estilos
import MarcadorMinutos from './MarcadorMinutos';
import GoalRegistrationForm from './goles/Registergoals';
import FaltasRegistrationForm from './goles/Registerbads';
import ButtonDropdown from './goles/Dezplegable';
import GameIdDisplay from './goles/idgame';
import OtherComponent from './goles/idgame';

const Cronometro = () => {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;
    let contadorSegundos = segundos;
    let contadorMinutos = minutos;

    if (activo) {
      intervalo = setInterval(() => {
        if (contadorSegundos === 59) {
          contadorSegundos = 0;
          setSegundos(0);
          contadorMinutos++;
          setMinutos(contadorMinutos);
        } else {
          contadorSegundos++;
          setSegundos(contadorSegundos);
        }

        // Realiza la consulta con los minutos actuales
        axios.post('http://192.168.0.107/asociacion_api/cronometro_insert.php', {
          activo: true // Siempre envía true al iniciar
        })
        .then(response => {
          console.log('Valor enviado al iniciar:', response.config.data); // Imprime el objeto enviado al iniciar
          console.log('Respuesta del servidor:', response.data); // Imprime la respuesta del servidor
        })
        .catch(error => {
          console.error('Error al enviar el valor a la base de datos:', error);
        });
      }, 1000);
    } else {
      clearInterval(intervalo);

      // Envía false al detener solo si el cronómetro estaba activo previamente
      if (segundos !== 0 || minutos !== 0) {
        axios.post('http://192.168.0.107/asociacion_api/cronometro_insert.php', {
          activo: false
        })
        .then(response => {
          console.log('Valor enviado al detener:', response.config.data); // Imprime el objeto enviado al detener
          console.log('Respuesta del servidor:', response.data); // Imprime la respuesta del servidor
        })
        .catch(error => {
          console.error('Error al enviar el valor a la base de datos:', error);
        });
      }
    }

    return () => clearInterval(intervalo);
  }, [activo, minutos, segundos]);

  const iniciarCronometro = () => {
    setActivo(true);
  };

  const detenerCronometro = () => {
    setActivo(false);
  };

  const reiniciarCronometro = () => {
    setMinutos(0);
    setSegundos(0);
  };

  return (
    <div>
      <ButtonDropdown/>
      <OtherComponent/>
      <MarcadorMinutos minutos={minutos} />
      <div className="cronometro-container">
        <h2>Cronómetro</h2>
        <div className="cronometro-display">
          <span>{minutos < 10 ? `0${minutos}` : minutos}</span>
          <span className="colon">:</span>
          <span>{segundos < 10 ? `0${segundos}` : segundos}</span>
        </div>
        <div className="cronometro-controls">
          {!activo ? (
            <button className="start-button" onClick={iniciarCronometro}>Iniciar</button>
          ) : (
            <button className="stop-button" onClick={detenerCronometro}>Detener</button>
          )}
          <button className="reset-button" onClick={reiniciarCronometro}>Reiniciar</button>
        </div>
      </div>
      <div className="registration-forms-container">
        <div className="registration-form">
          <GoalRegistrationForm />
        </div>
        <div className="registration-form">
          <FaltasRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Cronometro;
