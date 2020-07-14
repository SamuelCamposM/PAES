import {model , Schema} from "mongoose"

const PreguntasLenguajechema = new Schema({
  enunciado: {
    trim: true,
    type: String,
  },
  habilidad: {
    trim: true,
    type: String,
  },
  respuestas: Array,
  nivel: {
    trim: true,
    type: String,
  },
  Porcentaje: {
    trim: true,
    type: String,
  },
  imagen: String,
  Justificaciones: Array,
  JustificacionCorrecta: String,
  itemDeAyuda: String
})

export default model('PreguntasLenguaje', PreguntasLenguajechema)