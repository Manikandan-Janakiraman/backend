import express from "express";
import { bodyExample, paramsExample, queryExample, fullRequestExample } from "../controllers/requestController.js";

const router = express.Router();

// 1. BODY
router.post("/body", bodyExample);

// 2. PARAMS
router.get("/params/:id", paramsExample);

// 3. QUERY
router.get("/query", queryExample);

// 4. FULL REQUEST OBJECT
router.get("/full", fullRequestExample);

export default router;
