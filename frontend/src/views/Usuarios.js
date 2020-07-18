import React, { useContext, useEffect, Fragment } from "react";
import authContext from "../Context/auth/authContext";
import errorContext from "../Context/error/errorContext";

import { Titulo , Error } from "../style/style";
import UserCard from "../components/cards/UserCard";
import styled from "@emotion/styled";
import CardSoliciud from "../components/cards/CardSolicitud";
import Amigos from "../components/cards/Amigos";


const Texto = styled.h1`
 text-align:center;
 font-size:25px;
 text-shadow:1px 1px 3px gray;
`;

const Columna = styled.div`
display:flex;
flex-direction:column;
`


export const Contenedor = styled.div`
display:grid;
grid-template-columns:repeat(3 , 1fr);
`
const Usuarios = () => {
  const { error, mostrarError } = useContext(errorContext);
  const { obtenerUsuarios, usuarios , usuario ,solicitudes ,obtenerSolicitudes , cargarUsuarios , mensaje} = useContext(authContext);
  useEffect(() => {
    if (mensaje) {
      mostrarError(mensaje.msg, "alerta-error");
      return ;
    }
    if (cargarUsuarios ) {
      obtenerUsuarios()
      
    }
   
    if (!usuarios ) {
        obtenerUsuarios();
        
    }
    if (!solicitudes &&  usuario) {
      obtenerSolicitudes(usuario._id)
       
    }
}, [usuarios ,solicitudes , usuario  , cargarUsuarios, mensaje ]);
  if (!usuarios) return <Titulo> Usuarios </Titulo>;
   if(!usuario) return null

  return (
    <Fragment>
      {error ? <Error>{error.msg}</Error> : null}
        <Titulo> Usuarios </Titulo>
      <Contenedor>
        <Columna>
      <Texto> Todos los usuarios. </Texto>
          {usuarios.map((user) => (
           
       <UserCard usuario={user}  key={user._id} />
          ))}
        </Columna>
     <Columna>
        <Texto> Solicitudes.</Texto>
  
{solicitudes  ? solicitudes.map((solicitud )=> (
  <CardSoliciud solicitud={solicitud} key={solicitud._id}/>
)) :  <Texto> No hay solicitudes.</Texto> }

     </Columna>
     <Columna>
 <Texto> Amigos. </Texto>
          {usuarios.map((user) => (
           
       <Amigos usuario={user}  key={user._id} />
          ))}
          </Columna>
      </Contenedor>
    </Fragment>
  );
};

export default Usuarios;

