import React, { useState } from "react"
import Form from "./Form"

const CustomGreeting = props => {
  const [name, setName] = useState("")
  const handleName = event => {
    setName(event.target.value)
  }

  const [type, setType] = useState("greeting")
  const handleType = event => {
    event.preventDefault()
    setType(event.target.value)
  }

  let message

  if (type === "greeting") {
    message = "Hello my friend "
  } else {
    message = "Goodbye my friend "
  }



  return (
    <div id="background">
      <h1 style={{textAlign: "center"}}>Custom Greeting Generator</h1>
      <Form handleType={handleType} handleName={handleName} />
      <p >
        {message}
        {name}
      </p>
    </div>
  )
}

export default CustomGreeting
