import React, { useState } from "react";



const CreatHouse = (props)=>{
    const [image , setImage] = useState("")
    const [name , setName] = useState("")
    const [description, setDesription] = useState("")
    const [location ,setLocation] = useState("")
    const [price , setPrice]=useState(0)
    return (
        <div id = 'cr'>
        <div className="creat">
    <input type="text" placeholder="url image" onChange={(e)=>{setImage(e.target.value)}} />
    <input type="text" placeholder=" name house"  onChange={(e)=>{setName(e.target.value)}}/>
    <input type="text" placeholder="  description of house" onChange={(e)=>{setDesription(e.target.value)}}/>
    <input type="text" placeholder=" location of house " onChange={(e)=>{setLocation(e.target.value)}}/>
    <input type="number" name="price" onChange={(e)=>{setPrice(e.target.value) }} />
  
    <button onClick={()=>{props.createHouse({image,name,description,location,price}),props.setView("allhouse")}}>add house</button>
    </div>
        </div>
    )
}
export default CreatHouse ; 