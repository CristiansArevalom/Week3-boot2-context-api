import './styles/App.css'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'
import { useEffect, useState } from 'react'


//TIENE PENDIENTES MUCHAS COSAS

function App() {

  const [user, setUser] = useState(() => {
  
  const storedUser = localStorage.getItem("user");

  return storedUser ? JSON.parse(storedUser) : {};

  });

  // Inicializar el estado del modo oscuro con el valor que tenga en el localStorage si existe
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    return darkMode || false;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // useEffect que se ejecuta cada vez que cambia el estado del modo oscuro
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.classList.toggle('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Método para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Context.Provider value={{
      user,
      setUser,
      isDarkMode,
      toggleDarkMode
    }}>
        <div className='App'>
            <AppRouter />
        </div>
    </Context.Provider>
  )
}

export default App
