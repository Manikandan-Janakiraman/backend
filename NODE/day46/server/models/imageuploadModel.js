import mongoose from 'mongoose'


const imageSchema = new mongoose.Schema({
    name:String,
    image:String,
},{timestamps:true})


const imageuploadmodel = mongoose.model("imageadddata",imageSchema)


export default imageuploadmodel