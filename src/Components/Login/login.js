import React, { useState } from 'react';
import './Login.css';
import Loginbar from './loginbar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para controlar si el usuario está autenticado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await fetch('http://192.168.0.107/asociacion_api/authenticate_user.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        console.log(data.message);
        setIsLoggedIn(true); // Establecer isLoggedIn a true si el usuario está autenticado
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
    setUsername('');
    setPassword('');
  };

  return (
    
      <div>
        <Loginbar />
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
        {/* Configura la ruta para mostrar MainPage si el usuario está autenticado */}
      </div>
  );
}

export default Login;
