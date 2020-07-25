import React, { useReducer } from "react";
//dontext
import authContext from "./authContext";
//reducer
import authReducer from "./authReducer";

//axios
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

//types
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  REGISTRO_EXITOSO_GOOGLE,
  GET_USUARIOS,
  GET_USERS_ERROR,
  CARGAR_AMIGOS,
  CARGAR_AMIGOS_ERR,
  GET_SOLICITUDES,
  GET_SOLICITUDES_ERROR,
  DELTE_SOLICITUD,
  DELTE_SOLICITUD_ERROR,
  SENDING_REQUEST_ERROR,
  ELIMINAR_AMIGO,
  CAMBIAR_IMAGEN_EXITO
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
    usuarios: null,
    solicitudes: null,
    cargarUsuarios: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //registrar con google

  //funciones
  const registrarGoogle = async (cookie) => {
    try {
      //coloca el token en el local storage
      if (!cookie) {
        return;
      }
      await dispatch({
        type: REGISTRO_EXITOSO_GOOGLE,
        payload: cookie,
      });
      //obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.mensaje,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };
  //registrar usuario
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/usuarios/", datos);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };
  //retorna al usuario autenticado

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      //funcion que colocca  el token en el header
      tokenAuth(token);
    }

    try {
      const usuario = await clienteAxios.get("/usuarios/auth");

      dispatch({
        type: OBTENER_USUARIO,
        payload: usuario.data.usuario,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  //cuando el usuario inicia sesion

  const iniciarSesion = async (datos) => {
    try {
      const token = await clienteAxios.post("/usuarios/login", datos);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: token.data,
      });

      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  const obtenerUsuarios = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        //funcion que colocca  el token en el header
        tokenAuth(token);
      }

      const usuarios = await clienteAxios.get("/usuarios/getUsers");

      dispatch({
        type: GET_USUARIOS, //false
        payload: usuarios.data.usuarios,
      });
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: GET_USERS_ERROR,
        payload: alerta,
      });
    }
  };

  const agregarAmigo = async (datos) => {
    const token = localStorage.getItem("token");
    if (token) {
      //funcion que colocca  el token en el header
      tokenAuth(token);
    }

    try {
      const nuevoDato = await clienteAxios.post("/usuarios/addFriend", datos);

      await dispatch({
        type: CARGAR_AMIGOS, //true
        payload: nuevoDato.data.amigos,
      });

      obtenerSolicitudes(datos.idReceptor);
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: CARGAR_AMIGOS_ERR,
        payload: alerta,
      });
    }
  };

  const enviarSolicitud = async (datos) => {
    const token = localStorage.getItem("token");
    if (token) {
      //funcion que colocca  el token en el header
      tokenAuth(token);
    }
    try {
      await clienteAxios.post("/usuarios/gettigRequest", datos);

      //ACA IRA EL REALTIME
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: SENDING_REQUEST_ERROR,
        payload: alerta,
      });
    }
  };
  //funcion que obtiene las solicitudes
  const obtenerSolicitudes = async (idReceptor) => {
    const token = localStorage.getItem("token");
    if (token) {
      //funcion que colocca  el token en el header
      tokenAuth(token);
    }
    try {
      const solicitudes = await clienteAxios.post("/usuarios/getSolicitudes", {
        idReceptor,
      });

      dispatch({
        type: GET_SOLICITUDES,
        payload: solicitudes.data.solicitudes,
      });
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: GET_SOLICITUDES_ERROR,
        payload: alerta,
      });
    }
  };

  const deleteFriendRequest = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        //funcion que colocca  el token en el header
        tokenAuth(token);
      }
      const solicitud = await clienteAxios.post(
        "/usuarios/deleteSolicitudes",
        _id
      );

      dispatch({
        type: DELTE_SOLICITUD,
        payload: solicitud.data.solicitud._id,
      });
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: " alerta Error",
      };
      dispatch({
        type: DELTE_SOLICITUD_ERROR,
        payload: alerta,
      });
    }
  };

  const eliminarAmigo = async (datos) => {
    const token = localStorage.getItem("token");
    if (token) {
      //funcion que colocca  el token en el header
      tokenAuth(token);
    }

    try {
      const amigoEliminado = await clienteAxios.post(
        "/usuarios/deleteFriend",
        datos
      );

      dispatch({
        type: ELIMINAR_AMIGO,
        payload: amigoEliminado.data.idReceptor,
      });
    } catch (error) {

    }
  };
  const subirImagen = async (file )  => {
    const token = localStorage.getItem("token");
    if (token) {
      //funcion que colocca  el token en el header
      tokenAuth(token);
    }
    const formData = new FormData();
    formData.append('myImage',file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
const data   =  await clienteAxios.post("/imagen/upload",formData,config)
       console.log(data.data.datos)

  dispatch({
    type: CAMBIAR_IMAGEN_EXITO,
    payload: data.data.datos
  })
  }
  return (
    <authContext.Provider
      value={{
        //state
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        usuarios: state.usuarios,
        solicitudes: state.solicitudes,
        cargarUsuarios: state.cargarUsuarios,
        
        //funciones
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
        registrarGoogle,
        obtenerUsuarios,
        agregarAmigo,
        enviarSolicitud,
        obtenerSolicitudes,
        deleteFriendRequest,
        eliminarAmigo,
        subirImagen
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
