import { MOSTRAR_ERROR, OCULTAR_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_ERROR:
      return {
        error: action.payload,
      };

    case OCULTAR_ERROR:
      return {
        alerta: null,
      };
    default:
      return state;
  }
};
