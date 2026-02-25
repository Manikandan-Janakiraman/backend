import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import connectdb from './config/db.js'

dotenv.config()
connectdb()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use("/api", authRoutes)

app.listen(PORT, () => {
    console.log(`Server Connected, http://localhost:${PORT}`);
})


// http://localhost:5000/api/