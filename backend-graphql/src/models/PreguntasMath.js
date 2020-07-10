import {model , Schema} from "mongoose"

const PreguntasMathSchema = new Schema({
    pregunta :String ,
    respuestas : Array  , 
    
})

export default model('PreguntasMath', PreguntasMathSchema)