import React, { useContext, useState } from "react";
import authContext from "../Context/auth/authContext";
import styled from "@emotion/styled"


const Contenedor = styled.div`
width:95%;
display:grid;
grid-template-columns: 0.9fr  1.1fr ;
grid-column-gap:15px;
`
const ParteIzquierda = styled.div`
 display:flex;
`
const ParteDerecha= styled.div`

`

const Perfil = () => {
  //extraer informacion de usuario
  const { usuario, subirImagen } = useContext(authContext);
  const [file, setimagen] = useState("");
  if (!usuario) return null;

  const onChange = (e) => {
    console.log(e.target.files[0]);
    setimagen(e.target.files[0]);
  };
  const onFormSubmit = (e) => {
    console.log(usuario);
    e.preventDefault();
    subirImagen(file);
  };
  return (
    <Contenedor>
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="myImage" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>

      <h1>Perfil</h1>
      <img src={usuario.avatar} alt="" />
      <img src={usuario.avatar} alt="" />
    </Contenedor>
  );
};

export default Perfil;
