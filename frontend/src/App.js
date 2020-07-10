//dependencias
import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//componentes
import Registrarse from './components/Registrarse'
import Login from './components/Login'
import Home from './components/Home'
import Spinner from './components/Spinner';
import Estadisticas from "./components/Estadisticas"
import Perfil from "./components/Perfil"
import Jugar from "./components/Jugar"

//Higher order component
import RutaPrivada from './components/rutas/RutaPrivada';
 import RutaPrivadaJugar from "./components/rutas/RutaPrivadaJugar"
 import RutaPrivadaPerfil from "./components/rutas/RutaPrivadaPerfil"
 import RutaPrivadaEstadisticas from "./components/rutas/RutaPrivadaEstadisticas"
 
//stilos
import './App.css';
//Context
import AuthState from "./Context/auth/authState"
import ErrorState from './Context/error/errorState';
import tokenAuth from './config/token';


//revisar si hay un token 
const token = localStorage.getItem('token')
if(token){
 tokenAuth(token)
}

function App() {
  
  //extraer informacion de usuario
  
  
  return (
    <ErrorState>
    <AuthState>
    <Router>
      <Route exact path="/Spinner" component={Spinner}/>
      <Switch>
      <Route exact path="/" component={Registrarse}  />
      <Route exact path="/login"  component={Login} />
      
    
        <RutaPrivadaEstadisticas exact path="/Estadisticas" component= {Estadisticas}/>      
        <RutaPrivadaPerfil exact path="/Perfil" component= {Perfil}/>      
        <RutaPrivadaJugar exact path="/Jugar" component= {Jugar}/>          
      <RutaPrivada  exact path="/Home"  component={Home} />
      </Switch>
    </Router>
    </AuthState>
    </ErrorState>
  );
}

export default App;
