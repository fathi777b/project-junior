import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AllHouse from './components/AllHouse.jsx'
import OneHouse from './components/OneHouse.jsx'
import Search from './components/search.jsx'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  const [view , setView] = useState("allhouse")

  //const [refetch , setRefetch]=useState(false)

  const fetchAll = ()=>{
    axios.get('http://127.0.0.1:3000/api/items')
    .then((res)=>{
    setItems(res.data)
    }).catch((error)=>{console.log(error)})
  } 
  
 useEffect(()=>{
fetchAll()
 },[])
  
 
  const renderView = ()=>{
    if(view === "allhouse" ){
      return  <AllHouse items={items}  />
    }
    else if (view === "createList"){
      return <CreatHouse  />
    }
    else   {
      return <OneHouse />
    }
    
   }



  return (
    <div className='app-container'>
  <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/House-Logo-Design.jpg" alt=""  id = "logo"/>
      <ul >
    <li>home</li>
    <li>AllHouse</li>
    <li>CreatHouse</li>
      </ul>
      <Search/>
    
      {renderView()}
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
