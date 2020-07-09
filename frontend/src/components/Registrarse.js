//dependencais
import React, { useState, useContext , useEffect } from "react";
import {
  Contenedor,
  Form,
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

const Registarse = ( props) => {
  //extrayendo valores del context  
  const { error, mostrarError } = useContext(errorContext);
const {registrarUsuario , mensaje ,autenticado } = useContext(authContext)
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    confirmarPassword: "",
    nombre: "",
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
  const { email, password, confirmarPassword, nombre } = formulario;
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmarPassword.trim() === "" ||
      nombre.trim() === ""
    ) {
      mostrarError("todos los campos son obligatorios.", "alerta-error");
      return ;
    }

    if(password.length < 6){
      mostrarError('El password debe ser de al menos de 6 caracteres.', "alerta-error")
      return ;
    }

    if (password !== confirmarPassword ){
      mostrarError('Asegurate de que las contraseñas sean identicas.', "alerta-error")
      return;
    }

    //registrando usuario 
    registrarUsuario({nombre , email , password})
  };
  const handleClick = () =>{
    props.history.push('/Spinner')
    // auth/google/callback
  }
  return (
    <Contenedor>
      {error ? <Error>{error.msg}</Error> : null}
      <Form onSubmit={handleSubmit}>
        <Titulo>Registrarse</Titulo>

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChamge}
        />
        <Label htmlFor="email">User name</Label>
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre de usuario"
          onChange={handleChamge}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChamge}
        />
        <Label htmlFor="password">Confirmar Password</Label>
        <Input
          onChange={handleChamge}
          type="password"
          name="confirmarPassword"
          placeholder="Confirmar Password"
        />

        <Boton>Registrarse</Boton>
        <Contenido>
          <A to={"/login"}>¿Ya tienes una cuenta?</A>
          <a
          onClick={handleClick}
          href="http://localhost:4000/auth/google/callback/">Inicia Sesion con Google</a>
        </Contenido>
      </Form>
    </Contenedor>
  );
};

export default Registarse;
