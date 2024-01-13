import RecipeListEntry from "./RecipeListEntry";
import UserData from "./UserData";

function RecipeList(props) {
  const listRows = [];

  const handleRecipeCompletion = ({target}) => {
    const id = target.id;
    const newCompletedRecipes = {...props.completedRecipes};
    newCompletedRecipes[id] = target.checked;
    props.onRecipeCompletedChange(newCompletedRecipes);
    UserData.setCompletedRecipes(newCompletedRecipes);
  }

  for (let recipes of props.recipes) {
    for (let recipeID in recipes) {
      if (!props.completedRecipes[recipeID]) {
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
