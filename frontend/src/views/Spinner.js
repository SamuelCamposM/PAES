import React, { useState, useEffect, useContext } from "react";
import authContext from "../Context/auth/authContext";



const Spinner = (props) => {
  //extraer valores del context
  const {
    registrarGoogle,
    usuario,
  } = useContext(authContext);
  const valor = document.cookie.split("token=");
  const [cookie ] = useState(valor[1]);
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
