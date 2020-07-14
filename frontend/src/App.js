//dependencias
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//componentes
import Registrarse from "./components/Registrarse";
import Login from "./components/Login";
import Home from "./components/Home";
import Spinner from "./components/Spinner";
import Estadisticas from "./components/Estadisticas";
import Perfil from "./components/Perfil";
import Jugar from "./components/Jugar";
import Header from "./components/layouts/Header";
import GameMode from "./components/GameMode";
import Usuarios from "./components/Usuarios";

//Higher order component
import RutaPrivada from "./components/rutas/RutaPrivada";
import RutaPrivadaJugar from "./components/rutas/RutaPrivadaJugar";
import RutaPrivadaPerfil from "./components/rutas/RutaPrivadaPerfil";
import RutaPrivadaEstadisticas from "./components/rutas/RutaPrivadaEstadisticas";
import GameModePrivada from "./components/rutas/GameModePrivada";
import RutaPrivadaUsuarios from "./components/rutas/RutaPrivadaUsuarios";
//stilos
import "./App.css";
//Context
import AuthState from "./Context/auth/authState";
import ErrorState from "./Context/error/errorState";
import tokenAuth from "./config/token";
import PreguntasState from "./Context/Preguntas/PreguntaState";

//revisar si hay un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  //extraer informacion de usuario

  return (
    <PreguntasState>
      <ErrorState>
        <AuthState>
          <Router>
            <Route exact path="/Spinner" component={Spinner} />
            <Header />
            <Switch>
              <Route exact path="/" component={Registrarse} />
              <Route exact path="/login" component={Login} />

              <RutaPrivadaEstadisticas
                exact
                path="/Estadisticas"
                component={Estadisticas}
              />
              <RutaPrivadaPerfil exact path="/Perfil" component={Perfil} />
              <RutaPrivadaJugar exact path="/Jugar" component={Jugar} />
              <RutaPrivada exact path="/Home" component={Home} />
              <GameModePrivada
                exact
                path="/Jugar/:gameMode"
                component={GameMode}
              />
              <RutaPrivadaUsuarios exact path="/Usuarios" component={Usuarios} />
            </Switch>
          </Router>
        </AuthState>
      </ErrorState>
    </PreguntasState>
  );
}

export default App;
