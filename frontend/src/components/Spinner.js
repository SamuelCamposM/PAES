import React, { useState, useEffect, useContext } from "react";
import authContext from "../Context/auth/authContext";
import styled from "@emotion/styled"


const Spinner = (props) => {
  //extraer valores del context
  const {
    registrarGoogle,
    usuario,
  } = useContext(authContext);
  const valor = document.cookie.split("token=");
  const [cookie, setCookie] = useState(valor[1]);
  useEffect(() => {
    console.log(valor);
    if (!usuario) {
      registrarGoogle(cookie);
    }
    if (usuario) {
      props.history.push("/Home");
    }
  }, [cookie, usuario]);

  return <div className="spinner"></div>;
};

export default Spinner;
