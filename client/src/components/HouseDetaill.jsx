import React from 'react';

const HouseDetaill = (props) =>{
  console.log(props)
  return(
    <div className='houses'>
     {/* <img src={props.house.url-img} alt={props.house.name} /> */}
     <h1 > {props.house.name}</h1>
     <h5 className='desc'>{props.house.description}</h5>
     <h3 className ="loc" >{props.house.location}</h3>
     <h2 className='price'>price: {props.house.price}DTN</h2>
    </div>
  )

} 

export default HouseDetaill;