// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import routes from './routes/route.js'
// import mongoose from 'mongoose'

// dotenv.config()
// const app = express()



// app.use(cors())
// app.use(express.json())

// app.use("/api/users", routes)

// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {
//     console.log(`Server Connected: http://localhost:${PORT}`);
// })


// // http://localhost:5000/api/users


import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/route.js'
import mongoose from 'mongoose'
import model from './model/userModel.js'


const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);   // Using create()

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
