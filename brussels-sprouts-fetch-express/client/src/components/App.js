import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"
import LongestRecipe from './LongestRecipe'

import RandomSprout from './RandomSprout'
import SproutsIndex from './SproutsIndex'

const App = (props) => {
  const [recipe, setRecipe] = useState("")
  const [recipes, setRecipes] = useState([])
  const [longest, setLongest] = useState("")

  const getRandomRecipe = async () => {
    try {
      const responseRandom = await fetch('/api/v1/recipes/random')
      if (!responseRandom.ok) {
        const errorMessage = `${responseRandom.status} (${responseRandom.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const randomBody = await responseRandom.json()
      setRecipe(randomBody.recipe)
      console.log(recipe)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const getAllRecipes = async () => {
    try {
      const allRecipes = await fetch('/api/v1/recipes/')
      if (!allRecipes.ok) {
        const errorMessage = `${allRecipes.status} (${allRecipes.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const allRecipesData = await allRecipes.json()
      setRecipes(allRecipesData.recipes)
      console.log(recipes)
    } catch(err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  const getLongestRecipe = async () => {
    try {
      const longestResponse = await fetch('/api/v1/recipes/longest')
      if (!longestResponse.ok) {
        const errorMessage = `${longestResponse.status} (${longestResponse.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const longestData = await longestResponse.json()
      setLongest(longestData.longest)
      console.log(longestData.longest)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const handleRandomClick = () => {
    getRandomRecipe()
    setRecipes([])
    setLongest("")
  }

  const handleIndexClick = () => {
    getAllRecipes()
    setRecipe("")
    setLongest("")
  }

  const handleLongestClick = () => {
    getLongestRecipe()
    setRecipes([])
    setRecipe("")
  }

  useEffect(() => {}, [])

  return(
    <div className="container">
      <h1>Sprout Fetcher</h1>
      <RandomSprout
        recipe={recipe}
      />
      <SproutsIndex
        recipes={recipes}
      />

      <LongestRecipe 
        longest = {longest}
      />

      <div className="buttons">
        <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

        <button onClick={handleIndexClick} className="btn">See All Recipes</button>

        <button onClick={handleLongestClick} className="btn">Get Longest Recipe Name</button>

      </div>
    </div>
  )
}

export default hot(App)
