import React, { useReducer } from "react";

//context
import SalaContext from "./SalaContext";

//reducer
import SalaReducer from "./SalaReducer";
//socketio
import io from "socket.io-client";


const SalaState = (props) => {

  const initialState = {
    jugadores: [],
    ganador: "",
    puntuacion: 0,
    invitaciones: []
  };
  
  const [state, dispatch] = useReducer(SalaReducer, initialState);
  //extraer informacion de usuario
  const socket = io.connect("http://localhost:4500");

  const enviarInvitacion = (invitado) => {

socket.emit("invitar", { invitado });
socket.on("invitando", ({invitado})=> {
  console.log(invitado)
})
  }

  return (
    <SalaContext.Provider
      value={{
        //state
        jugadores: state.jugadores,
        //funciones
        enviarInvitacion
      }}
    >
      {props.children}
    </SalaContext.Provider>
  );
};

export default  SalaState;