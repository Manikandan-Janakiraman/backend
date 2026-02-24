import mongoose from "mongoose";


const deptSchema = new mongoose.Schema({
    district_name: {
      type: String,
      required: true
    },
    departments_name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "Active"
    },
    created_by: {
      type: String,
      default: "Admin"
    },
    updated_by: {
      type: String,
      default: "User"
    }
  },
  { timestamps: true }
);


const deptmodel = mongoose.model("departdata",deptSchema)

export default deptmodel