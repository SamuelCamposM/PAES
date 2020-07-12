import React from "react";
import Header from "./layouts/Header";
import {
  Contenedor,
  Image,
  LeftContainer,
  RightContainer,
  Texto,
} from "../style/styleHome";
import { Titulo } from "../style/style";
import styled from "@emotion/styled";

const ContenedorIzquierdo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
`;
const GameCard = styled.article`
  width: 30%;
  min-height: 225px;
cursor:pointer;
  box-shadow: 2px 3px 4px #ccc, -2px -3px 1px #e1e1e1;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-grow: 1;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:last-of-type {
    height: 250px;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  text-align: center;
`;
const Jugar = () => {
  return (
    <div>
      <Header />
      <Titulo> Selecciona un modo de juego</Titulo>
      <Contenedor>
        <ContenedorIzquierdo>
          <GameCard>
            <Title> 1 vs 1 </Title>
            <Image src="./img/Unbenannt-1.png" />
            <Texto>Invita a un amigo a jugar contigo.</Texto>
          </GameCard>
          <GameCard>
            <Title> 2 vs 2 </Title> <Image src="./img/2vs2_wind.jpg" />
            <Texto>Forma pareja con alguien para competir.</Texto>
          </GameCard>
          <GameCard>
            <Title> Free For All </Title>
            <Image src="./img/descarga.jpeg" />
            <Texto>Juega Contra otras 3 personas.</Texto>
          </GameCard>
          <GameCard>
            <Title> Solitario</Title>
            <Image src="./img/single-player-portada-articulo-startvideojuegos.png" />
            <Texto>Juega en solitrio.</Texto>
          </GameCard>
        </ContenedorIzquierdo>
        <RightContainer>
          <Image src="./img/undraw_game_day_ucx9.svg" />
        </RightContainer>
      </Contenedor>
    </div>
  );
};

export default Jugar;
