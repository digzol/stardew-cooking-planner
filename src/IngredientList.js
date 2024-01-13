import IngredientListEntry from "./IngredientListEntry";

function IngredientList(props) {
  const ingredientList = [];
  const listRows = [];

  // Search and return a recipe in all enabled collections
  function GetRecipe(recipeID) {
    for (let recipes of props.recipes) {
      if (recipes[recipeID] != null) {
        return recipes[recipeID];
      }
    }
    return null;
  }

  // Compile an array of ingredients to be displayed
  function AddIngredients(ingredients, recipeSource) {
    for (let ingredient of ingredients) {
      const ingredientID = ingredient.name;
      const count = ingredient.count;

      // Add ingredient to the displayed list
      if (ingredientList[ingredientID] != null) {
        ingredientList[ingredientID].count += count;
        ingredientList[ingredientID].recipes.push(recipeSource);
      } else {
        ingredientList[ingredientID] = {
          "count": count,
          "recipes": [recipeSource]
        }
      }

      // If the ingredient is a recipe too AND we need more than 1, add its ingredients too
      if (ingredientList[ingredientID].count > 1) {
        const ingredientRecipe = GetRecipe(ingredientID);
        if (ingredientRecipe != null) {
          AddIngredients(ingredientRecipe.ingredients, ingredient.name);
        }
      }
    }
  }

  for (let recipes of props.recipes) {
    for (let recipeID in recipes) {
      if (!props.completedRecipes[recipeID]) {
        const recipe = recipes[recipeID];
        AddIngredients(recipe.ingredients, recipeID);
      }
    }
  }

  for (let ingredientID in ingredientList) {
    const data = ingredientList[ingredientID];
    listRows.push(<IngredientListEntry
      key = {ingredientID}
      name = {ingredientID}
      count = {data.count}
      recipes = {data.recipes}
    />);
  }

  return (<div className="data-list">{listRows}</div>);
}

export default IngredientList;
