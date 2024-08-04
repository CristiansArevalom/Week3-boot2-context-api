import { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { Context } from '../context/Context'

export const DarkMode = () => {
  
    const {isDarkMode, toggleDarkMode } = useContext(Context);


    //Metodo que se ejecuter al hacer click en el icono
    const handleClick = () =>{
        toggleDarkMode();
        localStorage.setItem('dark-mode', !isDarkMode)
    };
    return (
    <div>
      <button onClick={handleClick} className='dark-mode-button'>
        {isDarkMode ? (
            <Fasun className='dark-mode-icon dark-mode-icon-sun'/>
            ) : (
            <FaMoon className='dark-mode-icon dark-mode-icon-moon'/>

        )}
      </button>
    </div>
  )
}

