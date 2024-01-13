import Form from 'react-bootstrap/Form';
import SpriteIcon from "./SpriteIcon";

function RecipeListEntry(props) {
  const label = (<span className="icon-label">
    <SpriteIcon name={props.name} />
    {props.name}
  </span>);

  const ingredients = props.ingredients.map((value) => (
    <li key={props.name+"."+value.name}>
      <SpriteIcon name={value.name} />
      {value.name + " (" + value.count + ")"}
    </li>
  ));

  return(<div className="data-list-row">
    <div className="col recipe-col">
      <Form.Check
        type="checkbox"
        label={label}
        data-tag={props.name}
        defaultChecked={props.isCompleted}
        onChange={props.onCompletion}
      />
    </div>
    <div className="col ingredient-col">
      <ul className="ingredient-list">{ingredients}</ul>
    </div>
  </div>)
}

export default RecipeListEntry;
