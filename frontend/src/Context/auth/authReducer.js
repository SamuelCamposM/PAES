import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  REGISTRO_EXITOSO_GOOGLE,
  GET_USERS_ERROR,
  GET_USUARIOS,
  CARGAR_AMIGOS,
  CARGAR_AMIGOS_ERR,
  GET_SOLICITUDES,
  DELTE_SOLICITUD,
  DELTE_SOLICITUD_ERROR,
  SENDING_REQUEST_ERROR,
  GET_SOLICITUDES_ERROR,
  ELIMINAR_AMIGO,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO_GOOGLE:
      localStorage.setItem("token", action.payload);

      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
        cargando: false,
      };
    case CERRAR_SESION:
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        autenticado: null,
        usuario: null,
        mensaje: action.payload,
        cargando: false,
        usuarios: null,
        solicitudes: null,
      };
    case GET_USUARIOS:
      console.log("cargando usuarios");
      return {
        ...state,
        usuarios: action.payload,
        cargarUsuarios: false,
      };
    case CARGAR_AMIGOS:
      console.log(action.payload);
      let usuario = {
        ...state.usuario,
        amigos: action.payload,
      };

      return {
        ...state,
        usuario,
        cargarUsuarios: true,
      };

    case CARGAR_AMIGOS_ERR:
    case SENDING_REQUEST_ERROR:
    case GET_USERS_ERROR:
    case GET_SOLICITUDES_ERROR:
    case DELTE_SOLICITUD_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case GET_SOLICITUDES:
      return {
        ...state,
        solicitudes: action.payload,
      };
    case DELTE_SOLICITUD:
      return {
        ...state,
        solicitudes: state.solicitudes.filter(
          (solicitud) => solicitud._id !== action.payload
        ),
      };
    case ELIMINAR_AMIGO:
      let user = state.usuario;
      console.log(user);
      console.log(action.payload);
      user.amigos = user.amigos.filter((amigo) => {
        console.log(amigo);
        return amigo !== action.payload;
      });
      console.log(user);
      return {
        ...state,
        usuario: user,
      };
    default:
      return state;
  }
};
