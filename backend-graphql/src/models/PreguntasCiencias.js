import {model , Schema} from "mongoose"

const PreguntasCienciasSchema = new Schema({
    pregunta :String ,
    respuestas : Array  , 
    
})

export default model('PreguntaCiencia', PreguntasCienciasSchema)