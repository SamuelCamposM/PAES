import express from "express"

import "./config/db"
const app = express()


const port = process.env.PORT || 4500;


const server = app.listen(port , () => console.log(`server on port ${port }`) )

import { socketFunction } from "./socket"

socketFunction(server)