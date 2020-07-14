import {REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  REGISTRO_EXITOSO_GOOGLE,
  GET_USERS_ERROR,
  GET_USUARIOS ,
} from "../../types"

  

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO_GOOGLE:
 
      localStorage.setItem('token', action.payload)
  
      return {
        ...state ,
        autenticado: true,
        mensaje : null,
        cargando : false
       }
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token) 
      return{
        ...state, 
        autenticado : true,
        mensaje : null ,
        cargando: false
        
      }
      case OBTENER_USUARIO :
        
        return {
          ...state,
          usuario : action.payload,
          autenticado: true,
          cargando: false
          
        }
        case CERRAR_SESION : 
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      
      localStorage.removeItem('token')
    return {
      ...state, 
      token : null ,
      autenticado: null,
      usuario: null,
      mensaje: action.payload,
      cargando: false
    }
    case GET_USUARIOS :
      return {
        ...state ,
        usuarios : action.payload
      }
    default:
      return state;
  }
};

