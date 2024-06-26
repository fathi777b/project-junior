import React from "react";
import { MdNotListedLocation } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
const House = (props)=>{
    
return (
    <div className='house'>
<img src={props.house.image} alt={props.house.name} className='img'  onClick={()=>{props.onehouse(props.house)}} />
<h2 className='name'> :{props.house.name}</h2>
<IoMdContact id="logoname" />

<MdNotListedLocation id="logoLocation"/>
<h4 className ="loc" >{props.house.location}</h4>
<h3 className='price'>price: {props.house.price}TND</h3>
<button className='delete'>delete</button>
</div>
)
}
export default House;

