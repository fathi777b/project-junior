import React from "react";


const SearchHouse = (props)=>{
    const house = props.items.filter((elem)=>{
        return elem.name === props.name 
    }) 
console.log(house);
    return(
<div className='house'>
     <img src={house[0].image} alt={house[0].name} className='img'  />
     <h2 className='name'>{house[0].name}</h2>
     <h4 className ="loc" >{house[0].location}</h4>
     <h3 className='price'>price: {house[0].price} TND</h3>
     
    </div>
    )
}
export default SearchHouse