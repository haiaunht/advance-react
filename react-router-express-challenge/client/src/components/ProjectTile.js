import React from "react"
import { Link } from "react-router-dom"

const ProjectTile = ({ project: { name, description, id} }) => {  
  return (
    <div className="row">
      <div className="project small-9 small-centered columns">
        <h2><Link to={`/projects/${id}`}>{name}</Link></h2>
        <h3>Description: {description} </h3>
      </div>
    </div>
  )
}

export default ProjectTile
