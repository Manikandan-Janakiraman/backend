import express from 'express'
import { check, created, createresponse, customheader, data, echo, error, header, jsontoken, profile, success, successs, user } from '../controllers/responseController.js'



//http://localhost:5000/api/response/create 

//http://localhost:5000/api/response/getjson 


//http://localhost:5000/api/response/profiles  
//http://localhost:5000/api/response/users

//http://localhost:5000/api/response/errors

//http://localhost:5000/api/response/headers

//http://localhost:5000/api/response/checks

//http://localhost:5000/api/response/success

//http://localhost:5000/api/response/data

//http://localhost:5000/api/response/echo

//http://localhost:5000/api/response/customheader

//http://localhost:5000/successs

//http://localhost:5000/api/response/created

const route = express.Router()

route.post("/create", createresponse)
route.get("/getjson/:userid", jsontoken)

route.get("/success", success)

route.get("/profiles", profile)

route.post("/users", user)

route.get("/errors", error)

route.get("/headers", header)

route.get("/checks", check)

route.get("/data", data)

route.post("/echo", echo)

route.get("/customheader", customheader)

route.get("/", successs)

route.get("/created", created)

export default route