import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import log from './route/log.js'
import authRoutes from './route/authRoutes.js'

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())

app.post("/api", log)
app.use("/api", authRoutes)

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server Connected http://localhost:${PORT}`);  
})

//http://localhost:5000/api/login
//http://localhost:5000/api/log
