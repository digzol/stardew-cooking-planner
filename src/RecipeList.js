import RecipeListEntry from "./RecipeListEntry";
import UserData from "./UserData";

function RecipeList(props) {
  const listRows = [];

  const handleRecipeCompletion = ({target}) => {
    const tag = target.dataset.tag;
    const newCompletedRecipes = {...props.completedRecipes};
    newCompletedRecipes[tag] = target.checked;
    props.onRecipeCompletedChange(newCompletedRecipes);
    UserData.setCompletedRecipes(newCompletedRecipes);
  }

  for (let recipes of props.recipes) {
    for (let recipeID in recipes) {
      if (UserData.showCompletedRecipes || !props.completedRecipes[recipeID]) {
        const data = recipes[recipeID];
        const isCompleted = props.completedRecipes[recipeID] != null ? props.completedRecipes[recipeID] : false;
        listRows.push(<RecipeListEntry
          key={recipeID}
          name={recipeID}
          ingredients={data.ingredients}
          isCompleted={isCompleted}
          onCompletion={handleRecipeCompletion}
        />);
      }
    }
  }

  return (<div className="data-list">{listRows}</div>);
}

export default RecipeList;
