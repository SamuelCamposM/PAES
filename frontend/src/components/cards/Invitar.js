import React, { Fragment, useContext } from "react";

import authContext from "../../Context/auth/authContext";
import { Card , Imagen ,  AddFriend} from "../../style/cards";
import SalaContext from "../../Context/Salas/SalaContext";

const Invitar = (props) => {
  const { usuario } = useContext(authContext);
  const { enviarInvitacion } = useContext(SalaContext);

    if (usuario._id === props.usuario._id) return null;

  const agregado = usuario.amigos.some((amigo) => amigo === props.usuario._id);
  const invitar = ( ) => {
    enviarInvitacion(props.usuario._id)
  }
  if(!agregado )return null
  return (
    <Card>
      <Imagen src={props.usuario.avatar || "https://wallpaperslinks.com/wp-content/uploads/2020/03/astronaut_art_space_129529_1080x1920.jpg"}  />
    
      <p>{props.usuario.nombre} </p>
    
    < AddFriend type="button"  onClick={invitar}  >Invitar</ AddFriend> 

    </Card>
  );
};

export default Invitar;
