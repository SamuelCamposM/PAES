import React, { useContext,  Fragment } from "react";
import authContext from "../../Context/auth/authContext";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const Cabecera = styled.header`
  width: 100%;
  display:flex;
  align-items:center;
  min-height:10vh;
  background-color: #303e9f;
  box-shadow: 0px 2px 3px #00196e;
  
  @media(max-width:900px){
     flex-direction:column; 
     padding-bottom:20px;
    }
`;
const Wrap = styled.div`
  color: white;
  width: 90%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width:900px){
     flex-direction:column; 
     width: 100%;
    }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:65%;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  flex-grow: 1;
  @media(max-width:900px){
    flex-grow: 0;
     
     width: 100%;
    }
    @media(max-width:580px){
    flex-grow: 1;
    flex-direction:column; 
     width: 100%;
    }
`;

const Titulo = styled.h1`
  width: 20%;
  transition:all 500ms;
  letter-spacing:2px;
  text-transform: uppercase;
  font-size:30px;
  &:hover{
      text-shadow:1px 1px 3px #ccc;
  }
  @media(max-width:900px){
     text-align:center;
     width: 100%;
    }
`;
const Boton = styled.button`
  width: 20%;
  padding: 8px;
  border: none;
  background-color: #43168b;
  color: white;
  transition: all 500ms;
  &:hover {
    background-color: #110060;
  }
`;
const Enlace = styled(Link)`
  text-decoration: none;
  color:white;
  transition:all 500ms;
  padding:10px;
  border-bottom:1px solid transparent;

  &:hover{
      background-color:#6265cc;
      border-bottom: 2px solid #451c78;
      
  }
  @media(max-width:580px){
      margin-bottom:5px;
      margin-top:5px;
    text-align:center;
     width: 80%;
    }
`;

const Header = () => {
  
  //extraer informacion de usuario
  const { usuario,  cerrarSesion } = useContext(authContext);

if(!usuario) return null 
  return (
    <Fragment>
      
      <Cabecera>
        <Wrap>
          <Titulo>
            <Enlace to="/Home"> 
            Inicio</Enlace></Titulo> 
          <RightContainer>
       

                <strong>
                <span>Hola : </span> {usuario.nombre}
                  </strong> 
        
            <Enlace to="/Usuarios">Usuarios</Enlace>
            <Enlace to="/Estadisticas">Estadisticas</Enlace>
            <Enlace to="/Perfil">Perfil</Enlace>
            <Enlace to="/Jugar">Jugar</Enlace>

            <Boton
              onClick={() => {
                cerrarSesion();
              }}
            >
              Cerrar Sesion
            </Boton>
          </RightContainer>
        </Wrap>
      </Cabecera>
    </Fragment>
  );
};

export default Header;
