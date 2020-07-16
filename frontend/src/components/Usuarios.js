import React, { useContext, useEffect, Fragment } from "react";
import authContext from "../Context/auth/authContext";

import { Titulo } from "../style/style";
import UserCard from "./cards/UserCard";
import styled from "@emotion/styled";
import CardSoliciud from "./cards/CardSolicitud";


const Texto = styled.h1`
  font-size: 18px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 30px;
  width:100%;
  margin-bottom:15px;
  text-shadow:1px 1px 3px black;
  letter-spacing:3px;
  
  @media(max-width: 800px ){
    font-size: 20px;
  }
`;

const ColumnaIzquierda = styled.div`
display:flex;
flex-wrap:wrap;
`


export const Contenedor = styled.div`
width: 95%;
min-height: 80vh;
height: 100vh;
padding-bottom: 20px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
flex-grow: 1;
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 0.9fr 0.9fr 0.9fr 0.9fr;
grid-column-gap: 20px;
@media (max-width: 980px) {
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  
}
`
const Usuarios = () => {
  const { obtenerUsuarios, usuarios , usuario ,solicitudes ,obtenerSolicitudes , cargarUsuarios} = useContext(authContext);
  useEffect(() => {
    if (cargarUsuarios ) {
      obtenerUsuarios()
      
    }
   
    if (!usuarios ) {
        obtenerUsuarios();
        
    }
    if (!solicitudes &&  usuario) {
      obtenerSolicitudes(usuario._id)
       
    }
}, [usuarios ,solicitudes , usuario  , cargarUsuarios ]);
  if (!usuarios) return <Titulo> Usuarios </Titulo>;
   if(!usuario) return null

  return (
    <Fragment>
        <Titulo> Usuarios </Titulo>
      <Contenedor>
        <ColumnaIzquierda>
      <Texto> Todos los usuarios. </Texto>
          {usuarios.map((user) => (
           
       <UserCard usuario={user}  key={user._id} />
          ))}
        </ColumnaIzquierda>
     <ColumnaIzquierda>
        <Texto> Solicitudes</Texto>
  
{solicitudes ? solicitudes.map((solicitud)=> (
  <CardSoliciud solicitud={solicitud} key={solicitud._id}/>
)) :  <Texto> No hay solicitudes</Texto> }


     </ColumnaIzquierda>
      </Contenedor>
    </Fragment>
  );
};

export default Usuarios;


