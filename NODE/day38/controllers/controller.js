import deptmodel from "../models/deptmodel.js";

export const added = async (req,res)=>{




    try {
        const adddata =await deptmodel.create(req.body)
        res.status(201).json({msg:"successfully Done",adddata})
    } catch (error) {

        console.log("Somethimng error",error);
        
    }
}
export const updatedata = async (req,res)=>{

    console.log(req.params._id);
    

    console.log(req.body);

    try {
      
        const updateData = await deptmodel.findByIdAndUpdate(req.params._id,req.body)

        console.log(updateData);
        
        res.status(200).json({msg:'Updated Succfully',userdata:updateData})
        
    } catch (error) {

         console.log('error',error);
        
    }
    

}