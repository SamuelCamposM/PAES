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
      <Imagen src={solicitud.imagenEmisor || "https://wallpaperslinks.com/wp-content/uploads/2020/03/astronaut_art_space_129529_1080x1920.jpg"}  />
    <p>{solicitud.nombreEmisor} </p>
    <Botones>
    <DeleteFriend onClick={()=> eliminarSolicitud()}   >Rechazar soliciud</DeleteFriend>  <AddFriend  onClick={()=>  handleClick()} >Aceptar solicitud</AddFriend> 
    </Botones>
   </Card>
   
  );
};

export default CardSolicitud;
