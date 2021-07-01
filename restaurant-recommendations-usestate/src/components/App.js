import React, { useState } from "react"
import reviews from "../constants/reviews"
import restaurants from "../constants/restaurants"

import RestaurantList from "./RestaurantList"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

const App = props => {
  const [reviews, setReviews] = useState(reviews)
  const [restaurants, setRestaurants] = useState(restaurants)
  const [selectedId, setSelectedId] = useState('jm-curley-boston')
  console.log(selectedId)
  console.log(reviews)

  const addReview = formPayload => {
    let nextId = reviews.length + 1
    let newReview = {...formPayload, id: nextId}
    setReviews([...reviews, newReview])
  }

  const addRestaurant = newRecord => {
    let nextId = restaurants.length + 1
    let newRestaurant = {...newRecord, id: nextId}
    setRestaurants([...restaurants, newRestaurant])
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <RestaurantList 
            all = {restaurants}
            addRestaurant = {addRestaurant}
            selectedId = {selectedId}
            setSelectedId = {setSelectedId}
          />
        </div>

        <div className="reviews cell auto grid-x">    
          <div className="cell">

          <div className="cell">
            <h3>Review Form</h3>
              <ReviewForm addReview = {addReview} selectedId={selectedId}/>
            </div>
            <h3>Reviews</h3>
            <ReviewList 
              reviews = {reviews}  
              selectedId={selectedId}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
