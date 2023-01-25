import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './User.css'

const UserForm = () => {
  const[make,setMake]=useState("");
  const[model,setModel]=useState("");
  const navigate=useNavigate();

  const handleSubmit=()=>{
    if(make && model){
    let obj={make,model}
    localStorage.setItem("user",JSON.stringify(obj));
     navigate("/grid")
    }else{
      alert("Enter All Details");
      setMake("");
      setModel("");
    }

  }
  return (
    <div className='formdiv'>
      <form onSubmit={handleSubmit}>
        <select  value={make} onChange={(e)=>setMake(e.target.value)}>
             <option value="">Select Make</option>
             <option value="Ford">Ford</option>
             <option value="Porsche">Porsche</option>
             <option value="Toyota">Toyota</option>
        </select> <br />
        <select value={model} onChange={(e)=>setModel(e.target.value)}>
              <option value="">Select Model</option>
             <option value="Boxter">Boxter</option>
             <option value="Mondeo">Mondeo</option>
             <option value="Celica">Celica</option>
        </select>  <br />
        <input type="submit" />
      </form>
       
    </div>
  )
}

export default UserForm