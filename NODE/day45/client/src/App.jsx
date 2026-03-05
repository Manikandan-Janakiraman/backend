import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const App = () => {
  const [formData,setFormData] = useState({name:"",email:"",age:""})
  const [users,setUsers] = useState([])
  const [editId,setEditId] = useState("")
  const handleChange = (e)=>{

    setFormData({...formData,[e.target.name]:e.target.value})

  }

const fecthData = async ()=>{
    
     try {

      const dataFetch = await axios.get(" http://localhost:5000/api/crud/getdata")
     
     setUsers(dataFetch.data.getdata)
      
     } catch (error) {

      alert(error.response.data.msg)
      
     }

}

useEffect(()=>{
  (async()=>{
fecthData()
  })()

 
    
 
},[])

  const handleClick = async(e)=>{

     e.preventDefault()
    
     try {

        const added = await axios.post("http://localhost:5000/api/crud/insert",formData)
        
        alert(added.data.msg)

        setFormData({name:"",email:"",age:""})
        
        fecthData()

     } catch (error) {

      alert(error.response.data.msg)
      
     }


  }


const handleEdit = async (user)=>{

  setFormData({name:user.name,email:user.email,age:user.age})
   
  setEditId(user._id)


}



const handleUpdate = async(e) =>{

  e.preventDefault()

 try {
   const updatedata = await axios.put(`http://localhost:5000/api/crud/updatedata/${editId}`,formData)
  
  alert(updatedata.data.msg)

  setFormData({name:"",email:"",age:""})
  setEditId("")
  fecthData()


  
 } catch (error) {

   alert(error.response.data.msg)
  
 }

}


const handleDelete = async(userid)=>{

 

  try {

    const deteleted = await axios.delete(`http://localhost:5000/api/crud/deletedata/${userid}`)
    alert(deteleted.data.msg)
    fecthData()
  } catch (error) {

    alert(error.response.data.msg)
    
  }

}

  return (
   <>
   
    <form>
      <input type="text" name="name" placeholder="Enter the Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Enter the email" value={formData.email} onChange={handleChange} />
      <input type="number" name="age" placeholder="Enter the age" value={formData.age} onChange={handleChange} />
      {editId?<button onClick={handleUpdate}>Update</button>:<button onClick={handleClick}>Add</button>}
     
      
    </form>
   

   <div style={{padding:"20px"}}>
    <table border={1}>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((e,i)=>(

         <tr>
          <td>{i+1}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.age}</td>
          <td><button onClick={()=>handleEdit(e)}>Edit</button> || <button onClick={()=>handleDelete(e._id)}>Delete</button></td>
         
         </tr>

        ))}
      </tbody>
    </table>
   </div>
   
   </>
  )
}

export default App