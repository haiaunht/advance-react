import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const NewMovieForm = props => {
  const [movieTitle, setMovieTitle] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errorFetch, setError] = useState(null)

  const onTitleChange = event => {
    setMovieTitle(event.target.value)
  }

  const postNewMovie = async () => {
    event.preventDefault()

    try {
      const response = await fetch('/api/v1/movies', {
        method: "POST",
        credentials: "same-origin",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ title: movieTitle })
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      console.log("Movie was added successfully!")
      
      //this is not nesscessary since it not fetching all data again because of redirect
      // const body = await response.json()
      // if (body.errors) {
      //   setError(body.errrors)
      // } else {
      setShouldRedirect(true)
      //}
      
    } catch(err) {
      setError("Title cannot be blank!!!")
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/movies" />
  }

  let errorMsg 
  if (errorFetch) {
    errorMsg =  <h4 className="callout alert">Error: {errorFetch}</h4>
  }

  return (
    <div>     
      
      <form onSubmit={postNewMovie}>
        {errorMsg} 
        <label>
          Movie Title
          <input
            type="text"
            name="title"
            onChange={onTitleChange}
            value={movieTitle}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default NewMovieForm
