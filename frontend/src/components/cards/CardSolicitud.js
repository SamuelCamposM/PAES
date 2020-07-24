import React, { useContext } from "react";


import authContext from "../../Context/auth/authContext";
import { Card , Imagen , DeleteFriend, Botones, AddFriend} from "../../style/cards";

const CardSolicitud = ({ solicitud }) => {
  const { agregarAmigo , deleteFriendRequest } = useContext(authContext);
  const handleClick = () => {
    agregarAmigo({
      idReceptor: solicitud.idReceptor,
      idEmisor: solicitud.idEmisor,
      _id: solicitud._id,
    });
  };

  const eliminarSolicitud = ()  => {
    deleteFriendRequest({_id: solicitud._id})
  }
  return (
   
   <Card>
      <Imagen src={solicitud.imagenEmisor || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}  />
    <p>{solicitud.nombreEmisor} </p>
    <Botones>
    <DeleteFriend onClick={()=> eliminarSolicitud()}   >Rechazar soliciud</DeleteFriend>  <AddFriend  onClick={()=>  handleClick()} >Aceptar solicitud</AddFriend> 
    </Botones>
   </Card>
   
  );
};

export default CardSolicitud;
