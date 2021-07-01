import React, {useState} from "react"
import ErrorList from "./ErrorList"
import _ from "lodash"

const RestaurantForm = props => {
  const [restaurantRecord, setRestaurantRecord] = useState({
    name: "",
    location: "",
    image: ""
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = event => {
    event.preventDefault()
    setRestaurantRecord({
      ...restaurantRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    event.preventDefault()
    setRestaurantRecord({
      name: "",
      location: "",
      image: ""
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "location", "image"]
    requiredFields.forEach(field => {
      if (restaurantRecord[field].trim() === "") {
        submitErrors = {...submitErrors, [field]:"is blank"}
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (validForSubmission()) {
      props.addRestaurant(restaurantRecord)
    }
    
    setRestaurantRecord({
      name: "",
      location: "",
      image: ""
    })
  }


  return (
    <div>
      <h4>Add a Restaurant Form </h4>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label htmlFor="name">Restaurant's Name
          <input type="text" id="name" name="name" onChange={handleInputChange} value={restaurantRecord.name}/>
        </label>

        <label htmlFor="location">Location 
          <input type="text" id="location" name="location" onChange={handleInputChange} value={restaurantRecord.location}/>
        </label>

        <label htmlFor="image">Url for the restaurant's image
          <input type="text" id="image" name="image" onChange={handleInputChange} value={restaurantRecord.image}/>
        </label>

        <div className="button-group">
          <button className="button" onClick={clearForm}>Clear Form</button>
          <input className="button" type="submit" value="Add" />
        </div>
        
      </form>
    </div>
  )

}

export default RestaurantForm