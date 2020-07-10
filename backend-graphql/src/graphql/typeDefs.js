export const typeDefs = `
type   Query {
        getPreguntasMath :  [Pregunta]
       getPreguntasLenguaje :  [Pregunta]
       getPreguntasSociales :  [Pregunta]
       getPreguntasCiencias :  [Pregunta]
}


type Opciones {
    correcto: Boolean
    opcion: String
}

type Pregunta {
    _id:ID
    pregunta: String
respuestas : [Opciones]
}    




type Mutation {
    crearPreguntaMath(pregunta: String!, respuestas: [inputOpciones]!) : Pregunta!
    crearPreguntaLenguaje(pregunta: String!, respuestas: [inputOpciones]!) : Pregunta!
    crearPreguntaSociales(pregunta: String!, respuestas: [inputOpciones]!) : Pregunta!
    crearPreguntaCiencias(pregunta: String!, respuestas: [inputOpciones]!) : Pregunta!

}
input inputOpciones {
    correcto: Boolean
    opcion: String
}


`;






//Explicacion

// 1) input es para definir tus tipos de datos pero para mutation
/*2) type es para definir tipos pero para queries
debes definir dos veces si lo usaras para mutation o para querie

no sabia 
ya te ha pasado ?
*/

