import React, { useContext, useEffect, Fragment ,useState} from "react";
import authContext from "../../Context/auth/authContext";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import axios from "axios"

const Cabecera = styled.header`
  width: 100%;
  display:flex;
  align-items:center;
  min-height:15vh;
  background-color: #303e9f;
  box-shadow: 0px 2px 3px #00196e;
  
  @media(max-width:900px){
     flex-direction:column; 
     padding-bottom:20px;
    }
`;
const Wrap = styled.div`
  color: white;
  width: 85%;
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
  width: 50%;
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
  width: 40%;
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

const Header = (props) => {
  console.log("props", props);
  //extraer informacion de usuario
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext);

  const [musica, setmusica] = useState({})
  useEffect(() => {
    usuarioAutenticado();
axios.get('https://my-json-server.typicode.com/RochaMoran/musics/get/1')
.then(res => setmusica(res.data))
  }, []);

  return (
    <Fragment>
      <Cabecera>
        <Wrap>
          <Titulo>Header</Titulo>
          <RightContainer>
            {usuario ? (
              <p>
                hola <span> {usuario.nombre}</span>
              </p>
            ) : null}
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
