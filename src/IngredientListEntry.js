import Form from 'react-bootstrap/Form';
import SpriteIcon from "./SpriteIcon";

function IngredientListEntry(props) {
  const label = (<span className="icon-label">
    <SpriteIcon name={props.name} />
    {props.name + " (" + props.count + ")"}
  </span>);

  let recipeCounter = 0;
  const recipes = props.recipes.map((value) => (
    <li key={props.name+".recipes."+recipeCounter++}>
      <SpriteIcon name={value} />
    </li>
  ));

  return(<div className="data-list-row">
    <div className="col recipe-col">
      <Form.Check
        type="checkbox"
        label={label}
        id={"ingredients."+props.name}
        data-tag={props.name}
        defaultChecked={props.isCompleted}
        onChange={props.onCompletion}
      />
    </div>
    <div className="col">
      <ul className="icon-list">
        {recipes}
      </ul>
    </div>
  </div>)
}

export default IngredientListEntry;
