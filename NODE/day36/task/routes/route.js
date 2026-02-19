import express from 'express'
import { users } from '../controllers/auth.js'


const route = express.Router()

route.post("/create", users)

export default route