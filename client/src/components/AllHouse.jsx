import React from "react";
import HouseDetaill from "./HouseDetaill.jsx";


const AllHouse = (props) => {
  return (
  <div>
 

  {props.items.map((elem)=>{
    {console.log(elem)}
    return <HouseDetaill key={elem.id} house={elem}/>
  })} 

  </div>
)
}

export default AllHouse;


///{/* There are {props.items.length} items.
    
  //  */}