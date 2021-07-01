import fs from "fs"

const recipesPath = "recipes.json"

class Recipe {
  constructor(name) {
    this.name = name
  }

  static findAll() {
    const recipeData = JSON.parse(fs.readFileSync(recipesPath)).recipes
    let recipes = []
    recipeData.forEach(recipe => {
      const newRecipe = new Recipe(recipe)
      recipes.push(newRecipe)
    })
    return recipes
  }

  static findLongest() {
    const recipes = this.findAll()
    let longestRecipe = recipes[0]

    for (let i=1; i<recipes.length; i++) {
       if (recipes[i].name.length > longestRecipe.name.length) {
         longestRecipe = recipes[i]
       }
    }

    return longestRecipe
  }
}

export default Recipe