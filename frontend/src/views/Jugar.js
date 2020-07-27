import React, { useEffect, useContext, useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PreguntaContext from "../Context/Preguntas/PreguntaContext";
import { Submenu, ItemList, Scrollers } from "../style/styleHome";
import styled from "@emotion/styled";


const Jugar = ({ history }) => {
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
  const [activo, setactivo] = useState({
    solo: true,
    contra1: false,
    doscontra2: false,
    contraTodos: false,
  });
  const { solo, contra1, doscontra2, contraTodos } = activo;
  const ChangeActive = (e) => {
    setactivo({
      [e]: true,
    });
  };

  return (
    <div>
      <Submenu id="submenu">
        <ItemList>
          <Scrollers
            style={
              solo
                ? { color: "#11005e", borderBottom: "1px solid #11005e" }
                : null
            }
            onClick={() => ChangeActive("solo")}
            href="#!"
          >
            {" "}
            Solitario
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers
            style={
              contra1
                ? { color: "#11005e", borderBottom: "1px solid #11005e" }
                : null
            }
            onClick={() => ChangeActive("contra1")}
          >
            {" "}
            1 vs 1
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers
            style={
              doscontra2
                ? { color: "#11005e", borderBottom: "1px solid #11005e" }
                : null
            }
            onClick={() => ChangeActive("doscontra2")}
          >
            {" "}
            2 vs 2
          </Scrollers>
        </ItemList>
        <ItemList>
          <Scrollers
            style={
              contraTodos
                ? { color: "#11005e", borderBottom: "1px solid #11005e" }
                : null
            }
            onClick={() => ChangeActive("contraTodos")}
          >
            {" "}
            Contra todos
          </Scrollers>
        </ItemList>
      </Submenu>
      {solo ? <>

        <h1>modo de juego solo</h1> 

         </> : null}
      {contra1 ? <>

        <h1>modo de juego 1vs1</h1> 

         </> : null}
      {doscontra2 ? <>

        <h1>modo de juego 2vs2</h1> 

         </> : null}
      {contraTodos ? <>

        <h1>modo de juego 1vs all</h1>

          </> : null}
    </div>
  );
};

export default Jugar;
