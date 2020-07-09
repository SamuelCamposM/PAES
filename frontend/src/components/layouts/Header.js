import React  , {useContext , useEffect, Fragment } from 'react'
import authContext from "../../Context/auth/authContext"

const Header = (props) => {
    console.log("props",props)
//extraer informacion de usuario
const { usuario ,usuarioAutenticado , cerrarSesion} = useContext(authContext)


useEffect(() => {
    usuarioAutenticado()
}, [])

    return ( 
    <Fragment>
        {usuario ? <p>hola <span> {usuario.nombre}</span></p>  : null}
    <h1>Header</h1> 
    <button
     onClick={()=>{ cerrarSesion()
 
    }}
    >Cerrar Sesion</button>
    </Fragment>
    );
}
 
export default Header;