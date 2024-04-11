import React from 'react';
import { useSelectedGameId, GameContext } from './Dezplegable'; // Importar el hook useSelectedGameId y el contexto GameContext

function ComponenteDondeSeUtiliza() {
  const selectedGameId = useSelectedGameId(); // Usar el hook useSelectedGameId para obtener el idgame seleccionado

  // Verificar el valor de selectedGameId
  console.log("ID del juego seleccionado en el hook:", selectedGameId);

  return (
    <div>
      {/* Renderizar otros componentes o realizar otras acciones */}
    </div>
  );
}

export default ComponenteDondeSeUtiliza;
