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
    crearPreguntaMath: async (_, {enunciado,
      habilidad,
      respuestas,
      nivel,
      Porcentaje,
      imagen,
      Justificaciones,
      JustificacionCorrecta,} ) => {
     const newPregunta = await new PreguntasMath({enunciado,
      habilidad,
      respuestas,
      nivel,
      Porcentaje,
      imagen,
      Justificaciones,
      JustificacionCorrecta,})
     await newPregunta.save()
      return  newPregunta;
    },
    crearPreguntaLenguaje:async (_, {enunciado,
      habilidad,
      respuestas,
      nivel,
      Porcentaje,
      imagen,
      Justificaciones,
      JustificacionCorrecta,
      itemDeAyuda
    } ) => {
      const newPregunta =  new PreguntasLenguaje({enunciado,
        habilidad,
        respuestas,
        nivel,
        Porcentaje,
        imagen,
        Justificaciones,
        JustificacionCorrecta,
        itemDeAyuda})
      await newPregunta.save()
       return  newPregunta;
     },
     crearPreguntaSociales:async (_, {enunciado,
      habilidad,
      respuestas,
      nivel,
      Porcentaje,
      imagen,
      Justificaciones,
      JustificacionCorrecta,} ) => {
      const newPregunta =  new PreguntasSociales({enunciado,
        habilidad,
        respuestas,
        nivel,
        Porcentaje,
        imagen,
        Justificaciones,
        JustificacionCorrecta,})
      await newPregunta.save()
       return  newPregunta;
     },
     crearPreguntaCiencias:async (_, {enunciado,
      habilidad,
      respuestas,
      nivel,
      Porcentaje,
      imagen,
      Justificaciones,
      JustificacionCorrecta,} ) => {
      const newPregunta =  new PreguntasCIencias({enunciado,
        habilidad,
        respuestas,
        nivel,
        Porcentaje,
        imagen,
        Justificaciones,
        JustificacionCorrecta,})
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





// mutation{
//   crearPreguntaMath( enunciado: "enunciado",
//         habilidad: "habiliadad" ,
//         nivel: "nivel",
//         Porcentaje: "porcentaje",
//         imagen: "imagen",
//         Justificaciones: ["justificacion a ", "mala b" , "mala c"],
//         JustificacionCorrecta: "respuesta correcta d", respuestas: [
//           {correcto:false , opcion:"opcion 1"},
//           {correcto:false , opcion:"opcion 2"},
//           {correcto:false , opcion:"opcion 3"},
//           {correcto:true , opcion:"opcion 4"},
//         ]
//   ) {
//     _id
//     enunciado
//     habilidad
//     nivel
//     Porcentaje
//     imagen
//     Justificaciones
//     JustificacionCorrecta
//      respuestas{
//       correcto
//       opcion
//     }
//   }
// }
