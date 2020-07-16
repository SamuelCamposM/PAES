import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { ProfileAvatar, AddFriend, DeleteFriend } from "../../style/cards";
import authContext from "../../Context/auth/authContext";

const ImgBox = styled.div`
  width: 70%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  height: 70%;
  & p {
    width: 100%;
    text-align: center;
  }
`;

const Botones = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;
const Card = styled.article`
  height: 170px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  margin: 10px;
  align-content: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 2px 2px 3px gray;
  background-color: #ccc;
  &:hover {
  }
  & h5 {
    text-align: center;
  }
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
