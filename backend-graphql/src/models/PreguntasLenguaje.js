import {model , Schema} from "mongoose"

const PreguntasLenguajechema = new Schema({
    pregunta :String ,
    respuestas : Array  , 
    
})

export default model('PreguntasLenguaje', PreguntasLenguajechema)