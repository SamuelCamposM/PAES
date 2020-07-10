import { model, Schema } from "mongoose";

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    
    trim: true
  },
  email: {
    type: String,
    
    trim: true,
    unique: true
  },
  date: {
      type : Date,
      default: Date.now()
  },
  
  avatar:String,
  _id: String,
  notas : Array 
});


export default  model('Usuario', UsuarioSchema)