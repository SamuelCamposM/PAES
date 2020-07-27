import { model , Schema } from "mongoose";

const SalaSchema = new Schema({
    jugadores : Array, 
    Puntuaciones: Object ,
    Ganador : String
})

export default model('Sala' , SalaSchema)