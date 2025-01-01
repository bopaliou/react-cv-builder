import React, { useState } from 'react'
import '../Styles/GeneralInfo.css';

const GeneralInfo = () => {
    const [isEditing,setIsEditing] = useState(true)
    const [info,setInfo]=useState({name:'',phone:'',email:''})

    const handleChange=(e)=>{
        
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const toggleEdit=()=> setIsEditing(!isEditing)
  return (
    <div className='general-info'>
        
            {isEditing ? (
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' value={info.name} onChange={handleChange}/>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={info.email} onChange={handleChange}/>
                    <label htmlFor="">Phone</label>
                    <input type="tel" name='phone' value={info.phone} onChange={handleChange}/>

                    <button type='button' onClick={toggleEdit}>Soumettre</button>
                </form>
            ) : (
                <div>
                    <p>Name:{info.name}</p>
                    <p>Email:{info.email}</p>
                    <p>Phone:{info.phone}</p>
                    <button type='button' onClick={toggleEdit}>Edit</button>
                </div>
            )}
        
    </div>
  )
}

export default GeneralInfo