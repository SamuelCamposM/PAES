import React , {useContext , useEffect, Fragment} from 'react'
import authContext from '../Context/auth/authContext';
import Header from './layouts/Header';
import { useQuery} from "@apollo/react-hooks" 
import {gql}  from  "apollo-boost"




const Home = () => {

//extraer informacion de usuario
const { usuarioAutenticado} = useContext(authContext)
 const preguntasMath = gql`
{
getPreguntasMath{
    _id
    pregunta
    respuestas{
      opcion
      correcto
    }
  }
}
`

const { loading , error , data} = useQuery(preguntasMath)
console.log("data",data)

useEffect(() => {
    usuarioAutenticado()
}, [])

    return ( <Fragment>
        <Header />
  

    </Fragment> );
}
 
export default Home;