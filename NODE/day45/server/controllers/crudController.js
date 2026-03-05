
import crudModel from '../models/crudModel.js'
export const insertData = async(req,res)=>{

    try {

        const {name,email,age} = req.body

        const addData = await crudModel.create({name,email,age})

        res.status(201).json({msg:"Data Added Successfully"})
        
    } catch (error) {

        console.log('error',error);
        res.status(500).json({msg:"Internal Error"})
        
        
    }


}


export const getData = async(req,res)=>{


    try {

        const getDatas = await crudModel.find()

        res.status(200).json({getdata:getDatas})
        
    } catch (error) {

        res.status(500).json({msg:"Data Not Fetch Error"})
        
    }



}



export const editData = async(req,res)=>{

    try { 

        const {userid} = req.params

        const editData = await crudModel.findById({userid})

        res.status(200).json({editdatas:editData})
        
    } catch (error) {

        res.status(500).json({msg:"Something error"})
        
    }

}


export const updatedata = async(req,res)=>{

  
     console.log(req.params);
     
    try { 

        // const {userid} = req.params
        // const {name,email,age} = req.body

        const updateData = await crudModel.findByIdAndUpdate(req.params.userid,req.body,{ returnDocument: 'after' })
       
        
        res.status(200).json({msg:"Updated Successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Something error"})
        
    }

}


export const deletedata = async(req,res)=>{

    try { 

        // const {userid} = req.params
        

        const deleteData = await crudModel.findByIdAndDelete(req.params.userid)
        
        res.status(200).json({msg:"Data Deleted"})
        
    } catch (error) {

        console.log(error);
        

        res.status(500).json({msg:"Something error"})
        
    }

}