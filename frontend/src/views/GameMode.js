import React, {useState}  from 'react'
import { Contenedor } from '../style/styleHome'
import { Titulo } from '../style/style'


const GameMode = (props) => {
   const [params] = useState(props.history.location.pathname) 
    const parametro = params.split('/') 
    console.log(parametro[2])
    return ( 
         <Contenedor>
              
         <Titulo>GameMode { parametro[2] } </Titulo>


</Contenedor>

     );
}
 
export default GameMode;