import React, { useState } from 'react';
import './styles/Formulario.css'; // Archivo de estilos CSS

function RegistroUsuario() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    idstate: '',
    idteam: '',
    phone: '',
    mail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a través de una solicitud HTTP o realizar alguna otra acción
    console.log(formData);
    // Limpia el formulario después de enviar los datos
    setFormData({
      name: '',
      lastname: '',
      idstate: '',
      idteam: '',
      phone: '',
      mail: '',
      password: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-danger text-white">
              <h2 className="text-center">Registro de Coach</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">Apellido:</label>
                  <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="idstate" className="form-label">ID Estado:</label>
                  <input type="number" id="idstate" name="idstate" value={formData.idstate} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="idteam" className="form-label">ID Equipo:</label>
                  <input type="number" id="idteam" name="idteam" value={formData.idteam} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Teléfono:</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">Correo electrónico:</label>
                  <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña:</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuario;
