import {model , Schema} from "mongoose"

const PreguntasMathSchema = new Schema({
    enunciado: {
        trim: true,
        type: String,
        unique: true
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
    
})

export default model('PreguntasMath', PreguntasMathSchema)