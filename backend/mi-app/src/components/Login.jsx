import React, { useState } from 'react';


function Login() {
    const [form, setForm] = useState({ username: '', password: '' });
    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setMensaje('Inicio de sesión exitoso');
        } else {
            const error = await response.json();
            setMensaje(error.mensaje);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de Usuario"
                    value={form.username}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Login;
