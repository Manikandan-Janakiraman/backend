import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/route.js'


import connectdb from './config/db.js'


dotenv.config()
connectdb()

const deptapp = express()

deptapp.use(cors())

deptapp.use(express.json())

deptapp.use("/api/dept",route)

const PORT =process.env.PORT || 3000

deptapp.listen(PORT,()=>{

console.log(`server connected successfully ${PORT}`);



})
// http://localhost:5000/api/dept