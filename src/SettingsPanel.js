import {useState} from 'react';
import {Form} from "react-bootstrap";
import UserData from './UserData';

function SettingsPanel(props) {
  const [enabledRecipes, setEnabledRecipes] = useState(UserData.enabledRecipes);

  const toggleRecipe = (key) => {
    setEnabledRecipes((prevEnabledRecipes) => {
      const newEnabledRecipes = {...prevEnabledRecipes};
      newEnabledRecipes[key] = !prevEnabledRecipes[key];

      UserData.setEnabledRecipes(newEnabledRecipes);
      props.OnEnabledRecipesChange(newEnabledRecipes);

      return newEnabledRecipes;
    });
  };

  const handleShowCompletedRecipesChange = () => {
    props.settings.setShowCompletedRecipes((prevState) => {
      const newState = !prevState;
      UserData.setShowCompletedRecipes(newState);
      return newState;
    })
  };

  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="switch"
          id="show-completed-recipes"
          label="Show completed recipes"
          defaultChecked={props.settings.showCompletedRecipes}
          onChange={handleShowCompletedRecipesChange}
        />
        <Form.Label>Enabled Recipes</Form.Label>
        <Form.Check
          type="switch"
          id="toggle-vanilla-recipes"
          label="Vanilla recipes"
          defaultChecked={enabledRecipes.vanillaRecipes}
          onChange={() => toggleRecipe("vanillaRecipes")}
        />
        <Form.Check
          type="switch"
          id="toggle-SVE-recipes"
          label="SVE recipes"
          defaultChecked={enabledRecipes.SVERecipes}
          onChange={() => toggleRecipe("SVERecipes")}
        />
        <Form.Check
          type="switch"
          id="toggle-RSV-recipes"
          label="RSV recipes"
          defaultChecked={enabledRecipes.RSVRecipes}
          onChange={() => toggleRecipe("RSVRecipes")}
        />
      </Form.Group>
    </Form>
  )
}

export default SettingsPanel;
