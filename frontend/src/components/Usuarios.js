import React, { useContext, useEffect, Fragment } from "react";
import authContext from "../Context/auth/authContext";
import { Contenedor, Title, LeftContainer } from "../style/styleHome";
import { Titulo } from "../style/style";
import UserCard from "./cards/UserCard";

const Usuarios = () => {
  const { obtenerUsuarios, usuarios } = useContext(authContext);
  useEffect(() => {
    if (!usuarios) {
        obtenerUsuarios();
    }
}, [usuarios]);
console.log(usuarios)
  if (!usuarios) return <Titulo> Usuarios </Titulo>;

  return (
    <Fragment>
      <Contenedor>
        <LeftContainer>
          {usuarios.map((usuario) => (
       <UserCard usuario={usuario}  key={usuario._id} />
          ))}
        </LeftContainer>
      </Contenedor>
    </Fragment>
  );
};

export default Usuarios;
