import dotenv from "dotenv"
dotenv.config({path:"var.env"})
import mongoose, { mongo } from "mongoose"

 const DB = async () => {
    await mongoose.connect(process.env.URI_MONGODB ,{
        useUnifiedTopology: true,
        useNewUrlParser:true
    })

    console.log('DB is connected')
}

DB()
export default DB