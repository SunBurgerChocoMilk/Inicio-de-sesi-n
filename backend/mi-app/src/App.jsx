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
          <h1>Bienvenidos</h1>
          <button onClick={() => setVista('register')}>Registrarse</button>
          <button onClick={() => setVista('login')}>Iniciar Sesión</button>
          <button onClick={() => setVista('perfil')}>Perfil</button>
          {localStorage.getItem('token') && (
              <button onClick={cerrarSesion}>Cerrar Sesión</button>
          )}
          <br /><br />
          {vista === 'register' && <Register />}
          {vista === 'login' && <Login />}
          {vista === 'perfil' && <Perfil />}
      </div>
  );
}
export default App;