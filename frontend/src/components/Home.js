import React, { useContext, useEffect, Fragment } from "react";
import authContext from "../Context/auth/authContext";
import Header from "./layouts/Header";

import styled from "@emotion/styled";
import { Titulo } from "../style/style";
import {
  Submenu,
  ItemList,
  Scrollers,
  Contenedor,
  LeftContainer,
  RightContainer,
  Image,
  Texto,
} from "../style/styleHome";
const Home = () => {
  //extraer informacion de usuario
  const { usuarioAutenticado } = useContext(authContext);


  function scrooll(targett, duration) {
    const target = document.getElementById(targett);
    const TargetPositionTop = target.getBoundingClientRect().top;
    const positionStart = window.pageYOffset;
    const distance = TargetPositionTop - positionStart;
    let   startTime = null;
        const animationScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, positionStart, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) window.requestAnimationFrame(animationScroll);
    };
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    window.requestAnimationFrame(animationScroll);
  }

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <div >
      
      
      <Submenu id="submenu">
        <ItemList>
          <Scrollers
            onClick={() => scrooll("seccion1", 1000)}
            name="seccion1"
            href="#!"
          >
            {" "}
            aplicacion
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers onClick={() => scrooll("seccion2", 1000)} href="#!">
            {" "}
            Jugar
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers onClick={() => scrooll("seccion3", 1000)} href="#!">
            {" "}
            Estadisticas
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers onClick={() => scrooll("seccion4", 1000)} href="#!">
            {" "}
            Perfil
          </Scrollers>
        </ItemList>
      </Submenu>
      
<br/>
<br/><br/>
      <Contenedor>
        <LeftContainer id="seccion1">
          <Titulo>Sobre esta aplicacion </Titulo>
          <Texto>
            Esta aplicacion paes-web , esta diseñada para sacar el maximo
            rendimiento a nuestros cerebros e incluso para que puedas prepararte
            para la Prueba de Aptidudes , de manera divertida y
            sorprendendenetemente tambien podras divertirte con tus amigos ,
            retandolos en una competencia 1 vs 1 y asi poder divertirte y
            aprender al mismo timepo de una manera sana .
          </Texto>
        </LeftContainer>
        <RightContainer>
          <Image src="./img/undraw_studying_s3l7.svg" alt="" />
        </RightContainer>

        <LeftContainer id="seccion2">
          <Titulo>Modo de juego </Titulo>
          <Texto>
            En los modos de juego podras disfrutar de 3 modos de juego tambien
            podras modificar las partidas a tu gusto. Podras invitar a tus
            amigos a competir contigo .
            <br/>
            <br/>
           <strong> * Solitario</strong>
            <br/>
          <br/>
          <strong> *  1 vs 1</strong>
          <br/>
          <br/>
          <strong>* E incluso 4 personas podran competir indivualmente</strong>
          </Texto>
          
        
        </LeftContainer>
        <RightContainer >
          <Image src="./img/undraw_gaming_6oy3.svg" alt="" />
        </RightContainer>

        <LeftContainer id="seccion3">
          <Titulo>Estadisticas </Titulo>
          <Texto>
            Podras ver tus estadisticas , promedio por materia y global , e
            incluso el numero de partidas jugadas.
          </Texto>
        </LeftContainer>
        <RightContainer>
          <Image src="./img/undraw_personal_goals_edgd.svg" alt="" />
        </RightContainer>
        
        <LeftContainer id="seccion4">
          <Titulo>Perfil </Titulo>
          <Texto>
            Podras cambiar tu nombre y foto de perfil a tu gusto , No os
            contengais .
          </Texto>
        </LeftContainer>
        <RightContainer>
          <Image src="./img/undraw_profile_6l1l.svg" alt="" />
        </RightContainer>
      </Contenedor>
    </div>
  );
};

export default Home;
