import PreguntasMath from "../models/PreguntasMath";
import  PreguntasLenguaje from "../models/PreguntasLenguaje";
import PreguntasSociales from "../models/PreguntasSociales";
import PreguntasCIencias from "../models/PreguntasCiencias";


export const resolvers = {
  Query: {
    getPreguntasMath : async () => {
      return await PreguntasMath.find();
    },
    getPreguntasLenguaje: async () => {
      return await PreguntasLenguaje.find();
    },
    getPreguntasSociales: async () => {
      return await PreguntasSociales.find();
    },
    getPreguntasCiencias: async () => {
      return await PreguntasCIencias.find();
    },
  },
  Mutation: {
    crearPreguntaMath: async (_, {pregunta , respuestas} ) => {
     const newPregunta =  new PreguntasMath({pregunta , respuestas})
     await newPregunta.save()
      return  newPregunta;
    },
    crearPreguntaLenguaje: async (_, {pregunta , respuestas} ) => {
      const newPregunta =  new PreguntasLenguaje({pregunta , respuestas})
      await newPregunta.save()
       return  newPregunta;
     },
     crearPreguntaSociales: async (_, {pregunta , respuestas} ) => {
      const newPregunta =  new PreguntasSociales({pregunta , respuestas})
      await newPregunta.save()
       return  newPregunta;
     },
     crearPreguntaCiencias: async (_, {pregunta , respuestas} ) => {
      const newPregunta =  new PreguntasCIencias({pregunta , respuestas})
      await newPregunta.save()
       return  newPregunta;
     },
  },  
};


// pregunta: "pregunta de prueba",
// respuestas: [
//   { correcto: true, opcion: "opcion de prueba" },
//   { correcto: false, opcion: "opcion de prueba" },
//   { correcto: false, opcion: "opcion de prueba" },
//   { correcto: false, opcion: "opcion de prueba" },
// ],