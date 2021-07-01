import React from "react"

const Restaurant = props => {
  //change background to blue when its clicked
  let classNameSelected = props.className
 return (
  <div className={`grid-x grid-margin-x grid-padding-y ${classNameSelected}`} onClick={props.handleClick}>
    <h3></h3>
    <div className="cell">
      <img src={props.image} alt={props.name} />
    </div>

    <div className="cell">
      <p>
        <a href="#">
          <strong>{props.name}</strong>
        </a>
      </p>

      <p>{props.location}</p>
    </div>  
  </div>
 )
}

export default Restaurant