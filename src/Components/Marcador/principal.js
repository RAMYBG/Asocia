import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Cronometro from './Cronometro';
import MarcadorMinutos from './MarcadorMinutos';
import GoalRegistrationForm from './goles/Registergoals';

const Principal = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Cronómetro</NavLink>
            </li>
            <li>
              <NavLink to="/marcador">Marcador de Minutos</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Cronometro} />
        <Route path="/marcador" component={MarcadorMinutos} />
        <Route path="/registro-gol" component={GoalRegistrationForm} />
      </div>
    </Router>
  );
};

export default Principal;

