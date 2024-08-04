
import { useContext, useState } from "react";

import { Context } from "../context/Context"


export const Login = () => {


//Extraemos el user y SetUserdel contexto

const { user, setUser } = useContext(Context);

const [username, setUsername] = useState('');

const [name, setName] = useState('');
const [phone, setPhone] = useState('');

  // Método para validar el campo username: no admite espacios en blanco ni mayúsculas
  const handleUsernameV = e => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase();
    setUsername(value);
  };

  // Método para validar el nombre y cambiar la primera a mayúsculas
  const handleNameV = e => {
    const value = e.target.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setName(value);
  };



    // Método para validar que se escriban solo números en el campo teléfono
    const handlePhoneV = e => {
      const value = e.target.value.replace(/[^0-9]/g, '');
      setPhone(value);
    }
  

//metodo que se ejecutaal hacer clical enviar el formulario
  const saveData = e => {
    e.preventDefault(); //para impedir que se recargue la pagina
    //alert(e.target.username.value);

    //crearobjetodel usuario a partir d elos datos del formulario

    let identified_user ={
      username: e.target.username.value,
      name: e.target.name.value,
      phone: e.target.phone.value
    }

    console.log(identified_user);

    // Actualizamos el estado del usuario
    setUser(identified_user);
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="login" onSubmit={saveData}>
        <input type="text" name="username" placeholder="username" value={username} onChange={handleUsernameV} required />
        <input type="text" name="name" placeholder="name" value={name} onChange={handleNameV} required/>
        <input type="text" name="phone" placeholder="phone" value={phone} onChange={handlePhoneV} required/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
