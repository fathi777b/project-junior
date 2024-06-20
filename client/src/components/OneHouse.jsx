import React, { useState } from "react";


const OneHouse = (props)=>{
    const [name , setName]=useState("")
    const [description,setDescription]=useState("")
   
    return (
        <div className="one">
        <div className="oneHouse">
     <img src={props.iteme.image} alt={props.iteme.name} className='img'  />
     <h2> {props.iteme.name}</h2>
     <input type="text"  placeholder="update name"/>
     <p className='desc'>{props.iteme.description}</p>
     <input type="text"  placeholder="update description" className="inputname"/>
     <h4 className ="loc" >{props.iteme.location}</h4>
     <h3 className='price'>price: {props.iteme.price}DTN</h3>
     <button className='delete'>delete</button>
        </div>
        </div>
    )
}
export default OneHouse;