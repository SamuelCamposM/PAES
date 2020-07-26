import React, { useState, useEffect, useContext } from "react";

import { Titulo } from "../style/style";
import SalaContext from "../Context/Salas/SalaContext";
import authContext from "../Context/auth/authContext";
import styled from "@emotion/styled";
import Invitar from "../components/cards/Invitar";
import Usuarios from "./Usuarios";

const Contenedor = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-column-gap: 15px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
  }
`;
const ParteIzquierda = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 63vh;
`;
const UsuariosContenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
 overflow: scroll;
`;

const GameMode = (props) => {
  const { enviarInvitacion } = useContext(SalaContext);
  const { usuarios, obtenerUsuarios, usuario } = useContext(authContext);
  const [params] = useState(props.history.location.pathname);
  const parametro = params.split("/");
  useEffect(() => {
    if (!usuarios) {
      obtenerUsuarios();
    }
  }, [Usuarios]);

  console.log(parametro[2]);
  if (!usuarios) return <Titulo> Usuarios </Titulo>;
  if (!usuario) return null;

  return (
    <>
      <Titulo>GameMode {parametro[2]} </Titulo>
      <Contenedor>
        <ParteIzquierda>
          <h3>Invita a un amigo</h3>
          <UsuariosContenedor>
            {usuarios.map((user) => (
              <Invitar usuario={user} key={user._id} />
            ))}
          </UsuariosContenedor>
        </ParteIzquierda>
        <ParteIzquierda>a</ParteIzquierda>
      </Contenedor>
    </>
  );
};

export default GameMode;
