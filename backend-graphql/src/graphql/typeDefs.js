export const typeDefs = `
type   Query {
        getPreguntasMath :  [Pregunta]
       getPreguntasLenguaje :  [Pregunta]
       getPreguntasSociales :  [Pregunta]
       getPreguntasCiencias :  [Pregunta]
}


type Pregunta {
    _id:ID
    enunciado: String
    habilidad: String 
    nivel: String
    Porcentaje: String
    imagen: String
    Justificaciones: [String]
    JustificacionCorrecta: String
    respuestas : [Opciones]
    itemDeAyuda: String
}    


type Opciones {
    correcto: Boolean
    opcion: String
}


type Mutation {
    crearPreguntaMath( enunciado: String,
        
        habilidad: String ,
        nivel: String,
        Porcentaje: String,
        imagen: String,
        Justificaciones: [String],
        JustificacionCorrecta: String, respuestas: [inputOpciones]!) : Pregunta!

    crearPreguntaLenguaje( enunciado: String,
        habilidad: String ,
        itemDeAyuda: String
        nivel: String,
        Porcentaje: String,
        imagen: String,
        Justificaciones: [String],
        JustificacionCorrecta: String, respuestas: [inputOpciones]!) : Pregunta!
        
    crearPreguntaSociales( enunciado: String,
        habilidad: String ,
        nivel: String,
        Porcentaje: String,
        imagen: String,
        Justificaciones: [String],
        JustificacionCorrecta: String, respuestas: [inputOpciones]!) : Pregunta!

    crearPreguntaCiencias( enunciado: String,
        habilidad: String ,
        nivel: String,
        Porcentaje: String,
        imagen: String,
        Justificaciones: [String],
        JustificacionCorrecta: String, respuestas: [inputOpciones]!) : Pregunta!

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
