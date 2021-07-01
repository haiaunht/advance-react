import React from "react"
import { Link } from "react-router-dom"

const LauncherTile = ({ launcher: { name, bio, id} }) => {  
  return (
    <div className="row">
      <div className="project small-9 small-centered columns">
        <h4><Link to={`/launchers/${id}`}>{name}</Link></h4>
        <p>Bio: {bio} </p>
      </div>
    </div>
  )
}

export default LauncherTile