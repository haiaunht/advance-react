import React from 'react'

import Review from "./Review"

const ReviewList = (props) => {
  console.log(props.selectedId) //this is for the jm-curley
  const currentRestaurant = props.selectedId

  const currentReviews = props.reviews.find( review => review.restaurant_id === currentRestaurant)
  
  let allReviews
  if (currentReviews) {
    allReviews = props.reviews.map( review => {
      return (
        <Review 
          key = {review.id}
          id = {review.restaurant_id}
          name = {review.name}
          rating = {review.rating}
          content = {review.content}
        />
      )
    })
  } else {
    return (
      <h2>There is no current review for this restaurant!</h2>
    )
  }

  
  return(
    <div>
      {allReviews}
    </div>
  )
}

export default ReviewList
