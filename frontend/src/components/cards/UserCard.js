import React, { Fragment, useContext } from "react";

import authContext from "../../Context/auth/authContext";
import { Card , Imagen , DeleteFriend, Botones, AddFriend} from "../../style/cards";

const UserCard = (props) => {
  const { usuario,  enviarSolicitud ,eliminarAmigo} = useContext(authContext);
  if (usuario._id === props.usuario._id) return null;
  const datos = {
    idReceptor: props.usuario._id,
    nombreEmisor:  usuario.nombre,
    idEmisor: usuario._id,
    imagenEmisor: usuario.avatar || "",
    nombreReceptor : props.usuario.nombre
  };
  const HandleClick = () => {
    enviarSolicitud(datos);
    console.log(datos)
  };

  const deleteFriend = () => {
    eliminarAmigo(datos)
  }
  const agregado = usuario.amigos.some((amigo) => amigo === props.usuario._id);
  return (
    
  <Card>
    <Imagen src={props.usuario.avatar || "https://images3.alphacoders.com/106/1069102.jpg"}  />
    <p>{props.usuario.nombre} </p>

    {agregado ? <DeleteFriend
onClick={()=>  deleteFriend()}
    >Borrar amigo</DeleteFriend> : <AddFriend onClick={() => HandleClick()}>Agregar amigo</AddFriend> }

  </Card>
    
  );
};

export default UserCard;
