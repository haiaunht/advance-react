import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"
import {Link} from "react-router-dom"
import LauncherTile from "./LauncherTile"

const LauncherList = props => {
  const [launchers, setLaunchers] = useState([])

  const fetLaunchers = async () => {    
    try {
      const response = await fetch('/api/v1/launchers')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      
      const body = await response.json()
      setLaunchers(body.launchers)
      console.log(launchers)
    } catch(err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetLaunchers()
  }, [])

  const launcherList = launchers.map(launcher => {
    //return <Link to={`/launchers/${launcher.id}`}><li key={launcher.id}>{launcher.name}</li></Link>
    return <LauncherTile key={launcher.id} launcher={launcher} />
  })

  return (
    <div className="grid-y grid-margin-y grid-padding-y">
      <div className="cell small-6 large-8">
        <h2 className="text-center">My Launcher List</h2>
        <ul className="margin-left">{launcherList}</ul>
        <h4 className="text-center"><Link to="/" >Home</Link></h4>
      </div>
    </div>
  )
}

export default hot(LauncherList)
