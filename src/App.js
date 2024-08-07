import {useState} from "react";
import {Tab, Nav, NavDropdown} from "react-bootstrap";

import RecipeList from "./RecipeList";
import IngredientList from "./IngredientList";
import SettingsPanel from "./SettingsPanel";

import UserData from './UserData';
import Recipes from "./data/recipes";
import RecipesRSV from "./data/recipes-rsv";
import RecipesSVE from "./data/recipes-sve";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function GetActiveRecipes() {
  const recipes = [];
  if (UserData.enabledRecipes.vanillaRecipes) {
    recipes.push(Recipes);
  }
  if (UserData.enabledRecipes.SVERecipes) {
    recipes.push(RecipesSVE);
  }
  if (UserData.enabledRecipes.RSVRecipes) {
    recipes.push(RecipesRSV);
  }
  return recipes;
}

function App() {
  const [showCompletedRecipes, setShowCompletedRecipes] = useState(UserData.showCompletedRecipes);
  const [activeRecipes, setActiveRecipes] = useState(GetActiveRecipes());
  const [completedRecipes, setCompletedRecipes] = useState(UserData.completedRecipes);
  const [completedIngredients, setCompletedIngredients] = useState(UserData.completedIngredients);

  const handleUpdatedActiveRecipes = () => { setActiveRecipes(GetActiveRecipes()); };
  const handleRecipeCompletedChange = (completedRecipes) => { setCompletedRecipes(completedRecipes); };
  const handleIngredientCompletedChange = (completedIngredients) => { setCompletedIngredients(completedIngredients); };

  return (
    <div className="app">
      <Tab.Container defaultActiveKey="recipes" transition={false}>
        <Nav variant="underline" className="px-4">
          <Nav.Item>
            <Nav.Link eventKey="recipes">Recipes</Nav.Link>
          </Nav.Item>
          <Nav.Item className="me-auto">
            <Nav.Link eventKey="ingredients">Ingredients</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Settings">
            <SettingsPanel
              settings={{
                showCompletedRecipes: showCompletedRecipes,
                setShowCompletedRecipes: setShowCompletedRecipes,
              }}
              OnEnabledRecipesChange={handleUpdatedActiveRecipes}
            />
          </NavDropdown>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="recipes">
            <RecipeList
              recipes={activeRecipes}
              completedRecipes={completedRecipes}
              showCompletedRecipes={showCompletedRecipes}
              onRecipeCompletedChange={handleRecipeCompletedChange}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="ingredients">
            <IngredientList
              recipes={activeRecipes}
              completedRecipes={completedRecipes}
              completedIngredients={completedIngredients}
              showCompletedRecipes={showCompletedRecipes}
              onIngredientCompletedChange={handleIngredientCompletedChange}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default App;
