import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import { Image } from "../../style/styleHome";
import Usuarios from "../Usuarios";
import authContext from "../../Context/auth/authContext";
import { Card, Imgbox, ProfileAvatar, AddFriend } from "../../style/cards";

const UserCard = (props) => {
  const { usuario, agregarAmigo, enviarSolicitud } = useContext(authContext);
  if (usuario._id === props.usuario._id) return null;
  const datos = {
    idReceptor: props.usuario._id,
    nombreEmisor:  usuario.nombre,
    idEmisor: usuario._id,
    imagenEmisor: usuario.avatar || ""
  };
  const HandleClick = () => {
    enviarSolicitud(datos);
  };
  const agregado = usuario.amigos.some((amigo) => amigo === props.usuario._id);
  return (
    <Fragment>
      <Card>
        <ProfileAvatar src={props.usuario.avatar} alt="imagen de perfil" />
        <h5>{props.usuario.nombre} </h5>
        {agregado ? (
          <AddFriend onClick={() => HandleClick()}> Eliminar </AddFriend>
        ) : (
          <AddFriend onClick={() => HandleClick()}> agregar </AddFriend>
        )}
      </Card>
    </Fragment>
  );
};

export default UserCard;
