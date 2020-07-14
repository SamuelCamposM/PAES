import React , { useReducer }  from 'react';

//reducer
import PreguntaReducer from './PreguntaReducer';
//context
import PreguntaContext from './PreguntaContext';

import {
    GET_PREGUNTAS_MATH,
GET_PREGUNTAS_SOCIELES,
GET_PREGUNTAS_CIENCIAS,
GET_PREGUNTAS_LENGUAJE,
} from "../../types/index"


const PreguntasState = (props) => {
  const   initialState = {
        preguntasMath : null,
        preguntasSociales : null,
        preguntasCiencias :  null,
        preguntasLenguaje : null
    }
 const  [state, dispatch] = useReducer(PreguntaReducer , initialState)

 //funciones

 const obtenerPreguntasMatematicas = preguntas => {
    dispatch({
        type: GET_PREGUNTAS_MATH,
        payload:preguntas
    })
  

}
 return <PreguntaContext.Provider
 value={{
//state
    preguntasMath : state.preguntasMath,
    preguntasSociales : state.preguntasSociales,
    preguntasCiencias : state.preguntasCiencias,
    preguntasLenguaje : state.preguntasLenguaje,
    //funciones
    obtenerPreguntasMatematicas
 }}
 >
     {props.children}
 </PreguntaContext.Provider>
}

export default PreguntasState;
