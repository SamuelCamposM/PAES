import React , { useContext , useState}  from "react";
import  authContext from '../Context/auth/authContext';

const Perfil = () => {
  //extraer informacion de usuario
  const { usuario , subirImagen } = useContext(authContext);
  const [imagen, setimagen] = useState("")
  if(!usuario) return null
  const handleChange = e => {

    setimagen(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    
  }
  return (
    <div>


<form   action="http://localhost:4000/imagen/upload" method="POST"  encType="multipart/form-data"   >
  <input type="file" name="image"  />
  <button type="submit"> subir</button>
      </form>
      <h1>Perfil</h1>
      <img src={usuario.avatar} alt=""/>
    </div>
  );
};

export default Perfil;
