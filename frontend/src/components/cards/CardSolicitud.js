import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ProfileAvatar, AddFriend, DeleteFriend } from "../../style/cards";
import authContext from "../../Context/auth/authContext";

const ImgBox = styled.div`
 
`;

const Botones = styled.div`

`;
const Card = styled.article`

`;

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
    <>
      <Card>
        <ImgBox>
          <ProfileAvatar src={solicitud.imagenEmisor} />
          <p>{solicitud.nombreEmisor}</p>
        </ImgBox>
        <Botones>
          <AddFriend onClick={() => handleClick()}>Agregar Amigo</AddFriend>
          <DeleteFriend onClick={() => eliminarSolicitud()}>
            Eliminar solicitud
          </DeleteFriend>
        </Botones>
      </Card>
    </>
  );
};

export default CardSolicitud;
