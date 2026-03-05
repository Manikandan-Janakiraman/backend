import mongoose from 'mongoose'


const crudSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
},{timestamps:true})


const crudModel = mongoose.model("crudData",crudSchema)


export default crudModel