import ItemSprites from './assets/item-sprites.json';

function SpriteIcon(props) {
  const data = ItemSprites.frames[props.name];

  let posX = 0;
  let posY = 0;

  if (data != null) {
    posX = ItemSprites.meta.size.w - data.frame.x;
    posY = -data.frame.y;
  }

  return (<span
    className="sprite-icon"
    title={props.name}
    style={{
      backgroundPositionX: posX,
      backgroundPositionY: posY
    }}></span>);
}

export default SpriteIcon;
