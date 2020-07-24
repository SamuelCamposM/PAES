import React, { useContext, useEffect, Fragment  , useState} from "react";
import authContext from "../Context/auth/authContext";
import errorContext from "../Context/error/errorContext";

import { Titulo , Error } from "../style/style";
import UserCard from "../components/cards/UserCard";
import styled from "@emotion/styled";
import CardSoliciud from "../components/cards/CardSolicitud";
import Amigos from "../components/cards/Amigos";
import { Submenu , ItemList ,Scrollers } from "../style/styleHome";


const Texto = styled.h1`
text-align:center;
width:100%;
margin-top:15px;
`;

const Columna = styled.section`
display:flex;
width:95%;
margin:0 auto;
flex-wrap:wrap;
justify-content:space-between;



`


export const Contenedor = styled.div`
`
const Alerta = styled.div`
display:flex;
justify-content:center;
`
const Usuarios = () => {
  const [active, setactive] = useState({
    solicitudes : false ,
    todosLosUsuarios : true,
    amigos: false
  })
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

   const ChangeActive = e  =>  {
     setactive({
       [e] : true
     })
   }
  return (
    <Fragment>
        <Alerta>

      {error  ? <Error>{error.msg}</Error> : null}
        </Alerta>
      <Contenedor>
        
      <Submenu id="submenu">
        <ItemList>
          <Scrollers
            onClick={ ()=>  ChangeActive("todosLosUsuarios")}
              href="#!"
          >
            {" "}
            Todos los usuarios
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers
            onClick={ ()=>  ChangeActive("solicitudes")}
            
          >
            {" "}
            Solicitudes de amistad
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers
          
          onClick={ ()=>  ChangeActive("amigos")}
          >
            {" "}
            Amigos
          </Scrollers>
        </ItemList>
      
      </Submenu>
      
  {active.todosLosUsuarios ?     <Texto> Todos los usuarios. </Texto> : null}
       {active.todosLosUsuarios ?  <Columna>
          {usuarios.map((user) => (
           
       <UserCard usuario={user}  key={user._id} />
          ))}
        </Columna> : null}
 {active.solicitudes ?      <Texto> Solicitudes de amistad. </Texto> : null}
        {active.solicitudes ?  <Columna >
{solicitudes  ? solicitudes.map((solicitud )=> (
  <CardSoliciud solicitud={solicitud} key={solicitud._id}/>
  )) : null} 
               </Columna> :  null}

               {active.amigos ?     <Texto> Amigos. </Texto> : null}      
 {active.amigos ?     <Columna>
 
          {usuarios.map((user) => (
           
       <Amigos usuario={user}  key={user._id} />
          ))}
          </Columna> :null}
      </Contenedor>
    </Fragment>
  );
};

export default Usuarios;

