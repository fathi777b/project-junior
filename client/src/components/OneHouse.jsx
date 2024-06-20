import React, { useState } from "react";


const OneHouse = (props)=>{
    const [name , setName]=useState("")
    const [description,setDescription]=useState("")
  
   
    return (
        <div className="one">
        <div className="oneHouse">
     <img src={props.iteme.image} alt={props.iteme.name} className='img'  />
     <h2> {props.iteme.name}</h2>
     <input type="text"  placeholder="update name" onChange={(e)=>{setName(e.target.value)}}/>
     <p className='desc'>{props.iteme.description}</p>
     <input type="text"  placeholder="update description" className="inputname"  onChange={(e)=>{setDescription(e.target.value)}}/>
     <h4 className ="loc" >{props.iteme.location}</h4>
     
     <h3 className='price'>price: {props.iteme.price}DTN</h3>
     <button className='delete' onClick={()=>{props.deleteHouse(props.iteme.id)}}>delete</button>
     <button className="update" onClick={()=>{props.updateHouse(name,description,props.iteme.id),props.setView("allhouse")}}>update</button>
        </div>
        </div>
    )
}
export default OneHouse;