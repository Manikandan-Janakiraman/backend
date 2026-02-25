import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import creation from './routes/route.js'
import connectDb from './config/db.js'

dotenv.config()

connectDb()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api", creation)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server Connected http://localhost:${PORT}`);
})

//http://localhost:5000/api/user/