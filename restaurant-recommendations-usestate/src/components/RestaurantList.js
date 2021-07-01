import React from 'react'
import Restaurant from './Restaurant'
import RestaurantForm from './RestaurantForm'

const RestaurantList = (props) => {
  const allRestaurants = props.all.map( restaurant => {
    const className = props.selectedId === restaurant.id ? "selected" : null

    const handleClick = () => {
      props.setSelectedId(restaurant.id)
    }

    return (
      <Restaurant
        key = {restaurant.id}
        name = {restaurant.name}
        location = {restaurant.location}
        image = {restaurant.image}
        className = {className}
        handleClick = {handleClick}
      />
    )
  })

  return(
    <div>
      <RestaurantForm addRestaurant={props.addRestaurant}/>
      {allRestaurants}      
    </div>
  )
}

export default RestaurantList