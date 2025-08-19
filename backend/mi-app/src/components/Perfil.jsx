import React, { useState, useEffect } from "react";


function Perfil() {
    const [usuario, setUsuario] = useState(null);
    const [mensaje, setMensaje] = useState ('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setMensaje('No estás autenticado');
            return;
        }

        fetch('http://localhost:3000/perfil', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener el perfil');
                }
                return response.json();
            })
            .then((data) => setUsuario(data.usuario))
            .catch((error) => setMensaje(error.message));
    }, []);

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
            {usuario && (
                <div>
                    <p>Nombre de usuario: {usuario.username}</p>
                </div>
            )}
        </div>
    );
}

export default Perfil;
