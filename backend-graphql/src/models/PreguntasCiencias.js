import { model, Schema } from "mongoose";

const PreguntasCienciasSchema = new Schema({
  enunciado: {
    trim: true,
    unique: true,
    type: String,
  },
  habilidad:{
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
  JustificacionCorrecta:String
  
});

export default model("PreguntaCiencia", PreguntasCienciasSchema);
