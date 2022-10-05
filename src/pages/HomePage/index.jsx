import React,{ useContext, useEffect, useState} from "react";
import { AuthContext } from "../../contexts/auth";
import {getCategories, getSpecifications} from "../../services/api"


const HomePage = () =>{
  const {logout, token} = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  const [specifications, setSpecifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   (async () => {
    //const response = await getCategories()
    const res = await getSpecifications(token)
      
    
    console.log(token)
    //setCategories(response.data)
    setSpecifications(res.data)
    setLoading(false)
   })()
  }, [])

  const handleLogout = () =>{
    logout()
  }

  if(loading){
    return <div className="loading">Carregando...</div>
  }

  return(
    <>
    <h1>Home Page</h1>
    <button onClick={handleLogout}>Logout</button>
    {
      /*
       <ul>
      {
        categories.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))
      }
    </ul>
      */
    }
   
   {
      <ul>
      {
        specifications.map((specification) => (
          <li key={specification.id}>
            {specification.name}
          </li>
        ))
      }
    </ul>
   }
   
    </>
    

  )
}

export default HomePage