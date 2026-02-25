import mongoose from "mongoose";


const newSchema = new mongoose.Schema({
    Datas: {
      name: String,
      skill: String,
      experience: String
    }
  },
  { timestamps: true }
);


const newmodel = mongoose.model("task",newSchema)

export default newmodel