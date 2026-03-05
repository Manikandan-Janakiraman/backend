import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import crudRoutes from "./routes/crudRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/uploads", express.static("uploads"))

app.use("/api/crud", crudRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT)
})