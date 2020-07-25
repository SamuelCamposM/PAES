import React , { useContext , useState}  from "react";
import  authContext from '../Context/auth/authContext';
import axios from "axios";

const Perfil = () => {
  //extraer informacion de usuario
  const { usuario , subirImagen } = useContext(authContext);
  const [file, setimagen] = useState("")
  if(!usuario) return null

const onChange = e => {
 console.log(e.target.files[0])
setimagen(e.target.files[0]);

}
const  onFormSubmit = e => {
  console.log(usuario)
  e.preventDefault();
  subirImagen(file )
}
  return (
    <div>

<form onSubmit={onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {onChange} />
                <button type="submit">Upload</button>
            </form>

      <h1>Perfil</h1>
      <img src={usuario.avatar} alt=""/>
    </div>
  );
};

export default Perfil;
