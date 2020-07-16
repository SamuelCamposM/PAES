import { model, Schema } from "mongoose";

const RequestSchema = new Schema({
 
    idReceptor :{
        type:String,
        required:true,
        trim:true
    },    
    nombreEmisor :{
        type:String,
        required:true,
        trim:true
    },    
    idEmisor :{
        type:String,
        required:true,
        trim:true
    },    
    imagenEmisor :{
        type:String,
        required:true,
        trim:true
    }    ,    
});

export default model('Request', RequestSchema)