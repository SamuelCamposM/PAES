import React , {useContext , useEffect, Fragment} from 'react'
import authContext from '../Context/auth/authContext';
import Header from './layouts/Header';




const Home = () => {

//extraer informacion de usuario
const { usuarioAutenticado} = useContext(authContext)


useEffect(() => {
    usuarioAutenticado()
}, [])

    return ( <Fragment>
        <Header />
        <h1>Home</h1>
    </Fragment> );
}
 
export default Home;