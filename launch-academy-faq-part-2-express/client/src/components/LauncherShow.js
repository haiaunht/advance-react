import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const LauncherShow = props => {  
  const [launcher, setLauncher] = useState({})
  
  const fetchLauncher = async () => {
    //IMPROTANT
    let id = props.match.params.id
    try {
      const response = await fetch(`/api/v1/launchers/${id}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const body = await response.json()
      setLauncher(body.launcher)

    } catch (err) {
      console.error(`Error in fetch launcher: ${err.message}`)
    }
  }

  useEffect( () => {
    fetchLauncher()
  }, [])

  return (
    <div>     
      <h1>{launcher.name}</h1>
      <p className="text-center">{launcher.bio}</p>
      <div className="text-center">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/launchers" >Back</Link></li>
        </ul>
      </div>
      
    </div>
  )
}

export default LauncherShow