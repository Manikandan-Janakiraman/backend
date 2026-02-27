import express from "express";
import { details } from "../controller/details.js";

const router = express.Router()

router.post("/register", details)

export default router


// http://localhost:5000/api/register