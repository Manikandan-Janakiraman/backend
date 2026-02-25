import express from 'express'
import { addition } from '../controllers/controller.js'

const router = express.Router()

router.post("/data", addition)

export default router;


//http://localhost:5000/api/user/data