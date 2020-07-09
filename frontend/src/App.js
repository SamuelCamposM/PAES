//dependencias
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//componentes
import Registrarse from './components/Registrarse'
import Login from './components/Login'
import Home from './components/Home'
import Spinner from './components/Spinner';
//Higher order component
import RutaPrivada from './components/rutas/RutaPrivada';


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
  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return (
    <ErrorState>
    <AuthState>
    <Router>
      <Route exact path="/Spinner" component={Spinner}/>
      <Switch>

      <Route exact path="/" component={Registrarse}  />
      <Route exact path="/login"  component={Login} />
      <RutaPrivada  exact path="/Home"  component={Home} />
      </Switch>
    </Router>
    </AuthState>
    </ErrorState>
  );
}

export default App;
