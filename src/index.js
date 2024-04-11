import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'; 


import Principal from './Components/Marcador/principal';
import Cronometro from './Components/Marcador/Cronometro';


const App = () => {
  return (
    <div >
      <Cronometro/>
    </div>
  );
};

const container = document.getElementById('root');
ReactDOM.render(<App />, container);
