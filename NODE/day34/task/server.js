import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ResponseRoute from './routes/ResponseRoutes.js'


dotenv.config()
const apps = express()
apps.use(cors())
apps.use(express.json())
apps.use("/api/response", ResponseRoute)

apps.use("/api/success", ResponseRoute)

apps.use("/api/profiles", ResponseRoute)


apps.use("/api/users", ResponseRoute)

apps.use("/api/errors", ResponseRoute)

apps.use("/api/headers", ResponseRoute)


apps.use("/api/checks", ResponseRoute)


apps.use("/api/data", ResponseRoute)


apps.use("/api/echo", ResponseRoute)

apps.use("/api/customheader", ResponseRoute)

apps.use("/", ResponseRoute)

apps.use("/api/created", ResponseRoute)

const PORT = process.env.PORT || 5000




apps.listen(PORT, () => {
    console.log(`Server Connected: http://localhost:${PORT}`);
})