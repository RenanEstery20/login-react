import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { getCategories, getSpecifications } from "../../services/api"


const HomePage = () => {
  const { logout } = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  const [specifications, setSpecifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {      
      try {
        const response = await getCategories()
        //const res = await getSpecifications(localStorage.getItem("token"))
       // console.log(token)
      setCategories(response.data)
      //setSpecifications(res.data)
      setLoading(false)

      } catch (error) {
        console.log('Não autorizado');
      }

      
    })()
  }, [])

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return <div className="loading">Carregando...</div>
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      {
        
         <ul>
        {
          categories.map((category) => (
            <li key={category.id}>
              {category.name}
            </li>
          ))
        }
      </ul>
        
      }

      {
        /*
        <ul>
          {
            specifications.map((specification) => (
              <li key={specification.id}>
                {specification.name}
              </li>
            ))
          }
        </ul>
        */
      }

    </>


  )
}

export default HomePage