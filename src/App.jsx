import axios from 'axios'
import "./App.css"
import React from 'react'

const App = () => {
const getUSers = async () => {
  const res = await axios.get("/users");
  console.log(res.data);
}

const getUserById = async() =>{
  const res = await axios.get("/users/1");
  console.log(res.data);
}

const createUSer = async () => {
  const res = await axios.post("/users",{
    name:"virat",
    email:"vk@gmail.com"
  })
  console.log(res.data);
  
}

const updateUser = async () => {
  const res = await axios.put("/users/3",{
    name:"kohli",
    email:"kohli2gmail.com"
  })
  console.log(res.data);
  
}

const deleteUSer= async () => {
  const res = await axios.delete("/users/3")
  console.log(res.data);
  
}




  return (
    <div className='container'>
      <button onClick={getUSers}>GETUSERS</button>
      <button onClick={getUserById}>GET USER BY ID</button>
      <button onClick={createUSer}>CREATE USER</button>
      <button onClick={updateUser}>UPDATE USER</button>
      <button onClick={deleteUSer}>DELETE USER</button>
    </div>
  )
}

export default App
