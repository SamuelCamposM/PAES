import React, { useContext, useState, createRef } from "react";
import authContext from "../Context/auth/authContext";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { AddFriend, Imagen } from "../style/cards";

const Contenedor = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-column-gap: 15px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
  }
`;
const ParteIzquierda = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 63vh;
`;
const ParteDerecha = styled.div``;

const File = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
const ContenedorImagen = styled.div`
  width: 60%;
  min-height: 225px;
  max-height: 225px;
  border-radius: 15px;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    width: 65%;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

const Perfil = () => {
  const inputEl = createRef();

  const focusInput = () => {
    inputEl.current.click();
  };
  //extraer informacion de usuario
  const { usuario, subirImagen } = useContext(authContext);
  const [file, setimagen] = useState("");
  if (!usuario) return null;

  const onChange = (e) => {
    console.log(e.target.files[0]);
    setimagen(e.target.files[0]);
  };
  const onFormSubmit = (e) => {

    console.log("has hecho submit");
    e.preventDefault();
    subirImagen(file);
  };
  return (
    <Contenedor>
      <ParteIzquierda onSubmit={onFormSubmit}>
        <h1>Foto de perfil</h1>
        <ContenedorImagen>
          <Imagen src={usuario.avatar} alt="" />
        </ContenedorImagen>

        <File ref={inputEl} type="file" name="myImage" onChange={onChange} />

        {file ? (
          <div>
            <label>Harchivo seleccionado</label>
            <p> {file.name} </p>
          </div>
        ) : (
          <p>no se ha elegido ningun harchivo</p>
        )}
        <AddFriend onClick={focusInput} type="button">
          Elegir imagen.
        </AddFriend>
        <AddFriend type="submit">Confirmar</AddFriend>
      </ParteIzquierda>

      <h1>Perfil</h1>
    </Contenedor>
  );
};

export default Perfil;
