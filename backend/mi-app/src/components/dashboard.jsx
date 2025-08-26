import React, { useState } from 'react';

function Dashboard() {
    const [nuevoUsername, setNuevoUsername] = useState('');
    const [nuevaPassword, setNuevaPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const token = localStorage.getItem('token');

    const cambiarUsername = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/perfil/username', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ nuevoUsername }),
        });
        const data = await res.json();
        setMensaje(data.mensaje);
    };

    const cambiarPassword = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/perfil/password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ nuevaPassword }),
        });
        const data = await res.json();
        setMensaje(data.mensaje);
    };

    return (
        <div>
            <h2 className="dashboard-container">Bienvenido 😊</h2>
            <p>Ajustes de tu usuario</p>
            <div className="formulario_contenedor">
                <form onSubmit={cambiarUsername}>
                    <input
                        type="text"
                        placeholder="Nuevo nombre de usuario"
                        value={nuevoUsername}
                        onChange={e => setNuevoUsername(e.target.value)}
                    />
                    <button type="submit">Cambiar nombre</button>
                </form>

                <form onSubmit={cambiarPassword} style={{ marginTop: '1rem' }}>
                    <input
                        type="password"
                        placeholder="Nueva contraseña"
                        value={nuevaPassword}
                        onChange={e => setNuevaPassword(e.target.value)}
                    />
                    <button type="submit">Cambiar contraseña</button>
                </form>
            </div>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Dashboard;