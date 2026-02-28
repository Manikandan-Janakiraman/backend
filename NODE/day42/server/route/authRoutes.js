import express from 'express'
import jwt from 'jsonwebtoken'
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();


router.post("/log", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password required"
    });
  }

  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});


router.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Token Verified",
    user: req.user
  });
});

export default router