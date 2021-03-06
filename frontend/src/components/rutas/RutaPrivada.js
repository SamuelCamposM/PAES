import React, {  useEffect , useContext } from 'react';
import {Route , Redirect} from "react-router-dom"
import authContext from '../../Context/auth/authContext';

const RutaPrivada = ({component : Component , ...props }) => {


    const {autenticado , usuarioAutenticado , cargando} = useContext(authContext)

    useEffect(()=>{
        usuarioAutenticado()
    },[])
    return (  

        <Route 
        {...props} render={props => !autenticado && !cargando   ? (
            <Redirect to="/" /> 
        ) : (
            <Component {...props} />
        )}
        />
    );
}
 
export default RutaPrivada;
