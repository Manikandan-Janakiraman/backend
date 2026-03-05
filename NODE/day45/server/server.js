import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import crudRoute from './routes/crudRoute.js'


dotenv.config()


const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/crud",crudRoute)

connectDB()
const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Conneceted Succfully ${PORT}`);
    
})



// http://localhost:5000/api/auth