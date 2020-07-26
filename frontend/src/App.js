//dependencias
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//vistas
import Registrarse from "./views/Registrarse";
import Login from "./views/Login";
import Home from "./views/Home";
import Spinner from "./views/Spinner";
import Estadisticas from "./views/Estadisticas";
import Perfil from "./views/Perfil";
import Jugar from "./views/Jugar";
import Usuarios from "./views/Usuarios";
import GameMode from "./views/GameMode";

//componentes
import Header from "./components/layouts/Header";
//Higher order component
import RutaPrivada from "./components/rutas/RutaPrivada";

//stilos
import "./App.css";
//Context
import AuthState from "./Context/auth/authState";
import ErrorState from "./Context/error/errorState";
import PreguntasState from "./Context/Preguntas/PreguntaState";
import SalaState from "./Context/Salas/SalaState";

//revisar si hay un token
import tokenAuth from "./config/token";
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  
  return (
    <SalaState>
    <PreguntasState>
      <ErrorState>
        <AuthState>
          <Router>
            <Route exact path="/Spinner" component={Spinner} />
            <Header />
            <Switch>
              <Route exact path="/" component={Registrarse} />
              <Route exact path="/login" component={Login} />

              <RutaPrivada
                exact
                path="/Estadisticas"
                component={Estadisticas}
              />
              <RutaPrivada exact path="/Perfil" component={Perfil} />
              <RutaPrivada exact path="/Jugar" component={Jugar} />
              <RutaPrivada exact path="/Home" component={Home} />
              <RutaPrivada
                exact
                path="/Jugar/:gameMode"
                component={GameMode}
              />
              <RutaPrivada  
                exact
                path="/Usuarios"
                component={Usuarios}
              />
            </Switch>
          </Router>
        </AuthState>
      </ErrorState>
    </PreguntasState>
    </SalaState>
  );
}

export default App;
