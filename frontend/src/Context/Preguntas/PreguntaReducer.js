import {
  GET_PREGUNTAS_MATH,
  
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case GET_PREGUNTAS_MATH:
      return {
        ...state,
        preguntasMath: action.payload.getPreguntasMath,

        preguntasSociales: action.payload.getPreguntasSociales,
        preguntasCiencias: action.payload.getPreguntasCiencias,
        preguntasLenguaje: action.payload.getPreguntasLenguaje,
      };
    default:
      return {
        ...state,
      };
  }
};
