import express from 'express'
import { auth } from '../controller/auth.js';

const router = express.Router()

router.post("/login", auth);

export default router

