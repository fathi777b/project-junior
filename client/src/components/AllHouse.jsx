import React from "react";
import HouseDetaill from "./HouseDetaill.jsx";


const AllHouse = (props) => {
  return (
  <div className="houses">
 

  {props.items.map((elem)=>{
    return <HouseDetaill key={elem.id} house={elem} onehouse = {props.onehouse}/>
  })} 

  </div>
)
}

export default AllHouse;


///{/* There are {props.items.length} items.
    
  //  */}