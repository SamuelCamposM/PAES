import React, { useEffect, useContext } from "react";
import Header from "./layouts/Header";
import { Contenedor, Image, RightContainer, Texto } from "../style/styleHome";
import { Titulo } from "../style/style";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PreguntaContext from "../Context/Preguntas/PreguntaContext";
const ContenedorIzquierdo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
`;
const GameCard = styled.article`
  width: 30%;
  min-height: 250px;
  cursor: pointer;
  box-shadow: 2px 3px 4px #ccc, -2px -3px 1px #e1e1e1;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-grow: 1;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all 500ms;
  border-radius: 10px;
  background-color: #676ad1;

  &:last-of-type {
    height: 250px;
  }

  &:hover {
    background-color: #303e9f;
  }

  & h3 {
    text-align: center;
    width: 100%;
    background-color: #2f3d9e;
    color: white;
    margin-bottom: 15px;
    transition: all 500ms;
  }
  &:hover h3 {
    background-color: #11005e;
  }
`;

const Jugar = ({history}) => {
  
  const { obtenerPreguntasMatematicas } = useContext(PreguntaContext);

  const preguntasMath = gql`
    {
      getPreguntasLenguaje {
        _id
        enunciado
        habilidad
        nivel
        Porcentaje
        imagen
        Justificaciones
        JustificacionCorrecta
        respuestas {
          correcto
          opcion
        }
      }

      getPreguntasMath {
        _id
        enunciado
        habilidad
        nivel
        Porcentaje
        imagen
        Justificaciones
        JustificacionCorrecta
        respuestas {
          correcto
          opcion
        }
      }

      getPreguntasCiencias {
        _id
        enunciado
        habilidad
        nivel
        Porcentaje
        imagen
        Justificaciones
        JustificacionCorrecta
        respuestas {
          correcto
          opcion
        }
      }

      getPreguntasSociales {
        _id
        enunciado
        habilidad
        nivel
        Porcentaje
        imagen
        Justificaciones
        JustificacionCorrecta
        respuestas {
          correcto
          opcion
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(preguntasMath);

  useEffect(() => {
    if (data) {
      console.log(data);

      obtenerPreguntasMatematicas(data);
    }
  }, [data]);

  return (
    <div>
      
      <Titulo> Selecciona un modo de juego</Titulo>
      <Contenedor>
        <ContenedorIzquierdo >
            <GameCard  onClick={(()=> {
          history.push('/Jugar/1vs1')
        })}>
  
              <h3> 1 vs 1 </h3>
              <Image src="./img/Unbenannt-1.png" />
              <Texto>Invita a un amigo a jugar contigo.</Texto>
            
            </GameCard>
          <GameCard>
            <h3> 2 vs 2 </h3> <Image src="./img/2vs2_wind.jpg" />
            <Texto>Forma pareja con alguien para competir.</Texto>
          </GameCard>
         
          <GameCard>
            <h3> Free For All </h3>
            <Image src="./img/descarga.jpeg" />
            <Texto>Juega Contra otras 3 personas.</Texto>
          </GameCard>
 
          <GameCard>
            <h3> Solitario</h3>
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
