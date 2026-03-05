import express from 'express'
import { getData, insertData,editData,updatedata,deletedata } from '../controllers/crudController.js'


const route = express.Router()

route.post("/insert",insertData)
route.get("/getdata",getData)
route.get("/editdata/:userid",editData)
route.put("/updatedata/:userid",updatedata)
route.delete("/deletedata/:userid",deletedata)
export default route


// http://localhost:5000/api/crud/insert
// http://localhost:5000/api/crud/getdata
// http://localhost:5000/api/crud/editdata
// http://localhost:5000/api/crud/updatedata
// http://localhost:5000/api/crud/deletedata