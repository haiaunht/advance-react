import React from "react"

const ErrorList = props => {

  const errorFieldList = Object.keys(props.errors)

  if (errorFieldList.length > 0) {
    let index = 0

    const displayErrorFied = errorFieldList.map(field => {
      index++
      return (
        <li key={index}>{_.capitalize(field)} {props.errors[field]}</li>
      )
    })

  return (
      <div className="callout alert">
        {displayErrorFied}
      </div>
    )
  } else {
    return ""
  }
  
}

export default ErrorList