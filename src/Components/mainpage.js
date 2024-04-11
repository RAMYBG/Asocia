import React from 'react';

function MainPage() {
  // Datos de ejemplo para la tabla
  const tableData = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
    { id: 4, name: 'Usuario 4', email: 'usuario4@example.com' },
    { id: 5, name: 'Usuario 5', email: 'usuario5@example.com' },
  ];

  return (
    <div>
      <h1>Main Page</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainPage;
