import {model , Schema} from "mongoose"

const PreguntasSocielesSchema = new Schema({
    pregunta :String ,
    respuestas : Array  , 
    
})

export default model('PreguntasSocieles', PreguntasSocielesSchema )