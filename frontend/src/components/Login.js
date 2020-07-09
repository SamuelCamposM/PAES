//dependencais
import React, { useState, useContext , useEffect } from "react";
import {
  Contenedor,
  FormLogin,
  Contenido,
  Titulo,
  Label,
  Input,
  A,
  Boton,
  Error,
} from "../style/style";
import errorContext from "../Context/error/errorContext";
import authContext from "../Context/auth/authContext";

const Login = ( props) => {
  //extrayendo valores del context  
  const { error, mostrarError } = useContext(errorContext);
const {iniciarSesion , mensaje ,autenticado } = useContext(authContext)
  const [formulario, setFormulario] = useState({
    email: "",
    password: ""

  });


  //en caso de que el usuario se hayaautenticado o sea un registro duplicado

  useEffect(()=> {
 if (autenticado) {
         props.history.push("/Home")
         return;
 }
  if(mensaje){
    mostrarError(mensaje.msg, "alerta-error");
    return ;
  }
  }, [mensaje , autenticado ])

  const handleChamge = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const { email, password } = formulario;
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" 
    
    ) {
      mostrarError("todos los campos son obligatorios.", "alerta-error");
      return ;
    }
    //registrando usuario 
    iniciarSesion({ email , password})
  };
  return (
    <Contenedor>
      {error ? <Error>{error.msg}</Error> : null}
      <FormLogin onSubmit={handleSubmit}>
        <Titulo>Iniciar Sesion</Titulo>

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChamge}
        />
     
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChamge}
        />
    

        <Boton>Registrarse</Boton>
        <Contenido>
          <A to={"/"}>¿Aun no tienes una cuenta?</A>
          <A to={"/login"}>Inicia Sesion con Google</A>
        </Contenido>
      </FormLogin>
    </Contenedor>
  );
};

export default Login;
