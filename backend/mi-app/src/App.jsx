import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

function App() {
    const [vista, setVista] = useState(null);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setVista('login');
    };

    return (
        <div>
            <div className="app-header">
                <h1 className="app-title">página</h1>
                <p className="app-subtitle">front y backend
                    
                </p>
            </div>
            
            <div className="main-container">
                <div className="nav-buttons">
                    {vista === 'perfil' ? (
                        <button 
                            className="nav-button logout"
                            onClick={cerrarSesion}
                       >
                            🚪 Cerrar Sesión
                        </button>
                    ) : (
                        <>
                            <button 
                className={`nav-button ${vista === 'register' ? 'active' : ''}`}
                onClick={() => setVista('register')}
            >
                📝 Registrarse
                            </button>
                            <button 
                                className={`nav-button ${vista === 'login' ? 'active' : ''}`}
                                onClick={() => setVista('login')}
                            >
                                🚀 Iniciar Sesión
                            </button>
                            <button 
                                className={`nav-button ${vista === 'perfil' ? 'active' : ''}`}
                                onClick={() => setVista('perfil')}
                            >
                                👤 Perfil
                          </button>
                        </>
                    )}
                </div>


                <div className="form-container">
                    {vista === 'register' && <Register />}
                    {vista === 'login' && <Login />}
                    {vista === 'perfil' && <Perfil />}
                    
                    {!vista && (
                        <div style={{textAlign: 'center', padding: '2rem'}}>
                            <h2 className="section-title">¡Bienvenido!</h2>
                            <p style={{color: '#6b7280', fontSize: '1.1rem'}}>
                                Selecciona una opción para comenzar
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;