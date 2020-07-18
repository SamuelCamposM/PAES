import React, { Fragment, useContext } from "react";

import authContext from "../../Context/auth/authContext";
import { Card , Imagen , DeleteFriend, Botones, AddFriend} from "../../style/cards";

const UserCard = (props) => {
  const { usuario ,eliminarAmigo} = useContext(authContext);
  if (usuario._id === props.usuario._id) return null;
  const datos = {
    idReceptor: props.usuario._id,
    nombreEmisor:  usuario.nombre,
    idEmisor: usuario._id,
    imagenEmisor: usuario.avatar || ""
  };


  const deleteFriend = () => {
    eliminarAmigo(datos)
  }
  const agregado = usuario.amigos.some((amigo) => amigo === props.usuario._id);
  if(!agregado )return null
  return (
    <Card>
      <Imagen src={props.usuario.avatar || "https://wallpaperslinks.com/wp-content/uploads/2020/03/astronaut_art_space_129529_1080x1920.jpg"}  />
    
      <p>{props.usuario.nombre} </p>
    
    <DeleteFriend onClick={()=> deleteFriend()}   >Eliminar amigo</DeleteFriend> 

    </Card>
  );
};

export default UserCard;
