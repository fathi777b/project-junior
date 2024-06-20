import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AllHouse from './components/AllHouse.jsx'
import OneHouse from './components/OneHouse.jsx'
import SearchHouse from './components/Search.jsx'
import CreatHouse from './components/CreatHouse.jsx'
 import House from './components/House.jsx'
import axios from 'axios'
import { IoCreate } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";

const App = () => {
  const [items, setItems] = useState([])
  const [view , setView] = useState("allhouse")
  const [refetch , setRefetch] = useState(false)
  const [house , setHouse]= useState({})
   const [houseSearched , sethouseSearched]=useState([])
  const [name , setName]=useState("")

  const fetchAll = ()=>{
    axios.get('http://127.0.0.1:3000/api/items')
    .then((res)=>{
      console.log(res.data)
    setItems(res.data)
    }).catch((error)=>{console.log(error)})
  } 

const createHouse = (newhouse)=>{
  axios.post('http://127.0.0.1:3000/api/items',newhouse)
  .then(()=>{
    setRefetch(!refetch)
  }).catch((error)=>{console.log(error)})
}
const deleteHouse = (id)=>{
  axios.delete(`http://127.0.0.1:3000/api/items/${id}`)
  .then(()=>{
    setRefetch(!refetch)
    setView("allhouse")

  }).catch((error)=>{console.log(error)})

}

const updateHouse = (name,description,id)=>{
  axios.put(`http://127.0.0.1:3000/api/items/${id}`,{name,description})
  .then(()=>{
    setRefetch(!refetch)
    setView("allhouse")
  }).catch((error)=>{console.log(error)})
}

// const searchHouse = (name)=>{
//   axios.get(`http://127.0.0.1:3000/api/items/${name}`)
//   .then((res)=>{
//     sethouseSearched(res.data)
//     setView("house")
  
//   }).catch((error)=>{console.log(error)})
//   }
   
 useEffect(()=>{
fetchAll()
 },[refetch])
  
 const onehouse = (iteme)=>{
  setHouse(iteme)
  setView('onehouse')
  }

 
  const renderView = ()=>{
    if(view === "allhouse" ){
      return  <AllHouse items={items}  onehouse= { onehouse}  />
    }
    else if (view === "create"){
      return <CreatHouse createHouse={createHouse} setView = {setView} />
    }
    else if (view === "onehouse")  {
      return <OneHouse iteme = {house} updateHouse={updateHouse}  deleteHouse= {deleteHouse} setView = {setView}/>
    }
    else if (view === "house"){
      return <House house={houseSearched} />
    }
    else if (view === "search"){
      return <SearchHouse  houseSearched ={houseSearched} items= {items}  name={name}/>
    }
    else {
      return <AllHouse/>
    }
    
   }

   
  return (
    <div>
    <div className='app-container'>
   
  <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/House-Logo-Design.jpg" alt=""  id = "logo"/>
      <ul >
      <IoCreate className='logocreate'/>
    <li onClick={()=>{setView("allhouse")}}> AllHouse</li>
    <GiFamilyHouse className='logoAll' />
    <li onClick={()=>{setView("create")}}>CreatHouse</li>
      </ul>
      <input type="text" id="input" placeholder="Search" onChange={(e)=>setName(e.target.value)}/>
        <button className='click' onClick={()=>{setView("search")}}>click</button>
        <FaSearchLocation id="ic"/>
      </div>
      {renderView()}
     
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
