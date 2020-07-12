import React, { useReducer } from 'react';
//dontext 
import authContext from './authContext';
//reducer
import authReducer from './authReducer';

//axios
import clienteAxios from "../../config/axios"
import tokenAuth from "../../config/token"

//types
import {REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    REGISTRO_EXITOSO_GOOGLE
} from "../../types"

const AuthState = (props ) =>{
    const initialState = {
            token: localStorage.getItem('token'),
            autenticado: null,
            usuario: null,
            mensaje: null,
            cargando : true 

    }
    const [state , dispatch] = useReducer(authReducer , initialState)

//registrar con google 

  //funciones
  const registrarGoogle = async (cookie)=> {
    console.log("desde el context",cookie)
      
    try {
    
        
  //coloca el token en el local storage
  if (!cookie){
  return
  
  }
      await  dispatch({
            type: REGISTRO_EXITOSO_GOOGLE,
            payload: cookie
        })
        //obtener el usuario
        usuarioAutenticado()
        
    } catch (error) {
      console.log("eerrror",error.response);
      const alerta = {
          msg : error.response.data.mensaje ,
          categoria : 'alerta-error'
      }
        dispatch({
            type: REGISTRO_ERROR,
            payload: alerta
        })
        
    }
  }
    //registrar usuario 
    const registrarUsuario = async datos=> {
        console.log(datos)
        try {
            const respuesta  = await  clienteAxios.post("/usuarios/", datos)
            console.log("respuesta",respuesta.data.token );
            
            dispatch({
                type:REGISTRO_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado( )
        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                msg : error.response.data.msg,
                categoria :" alerta Error"
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }
    //retorna al usuario autenticado

    const usuarioAutenticado = async () => {
        const token  = localStorage.getItem('token')

        if(token){
            //funcion que colocca  el token en el header
            tokenAuth(token)
        }
      
        try {
            const usuario = await clienteAxios.get('/usuarios/auth')
            
            dispatch({
                type: OBTENER_USUARIO,
                payload: usuario.data.usuario

            })
        } catch (error) {
            
            dispatch({
                type:LOGIN_ERROR
            })
            
        }
    }

    //cuando el usuario inicia sesion 

    const iniciarSesion = async datos => {


        try {
            const token = await clienteAxios.post('/usuarios/login', datos)
            console.log(token)

            dispatch({
                type: LOGIN_EXITOSO,
                payload :token.data
            })

            usuarioAutenticado()
        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                msg : error.response.data.msg,
                categoria :" alerta Error"
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }
    const cerrarSesion = () => {
        dispatch({
            type:CERRAR_SESION
        })
    }

    return <authContext.Provider
    value={{
        //state
        token: state.token,
        autenticado : state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
cargando :state.cargando,
        //funciones
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
        registrarGoogle
    }}
    >

        {props.children}
    </authContext.Provider>
}
export default AuthState;