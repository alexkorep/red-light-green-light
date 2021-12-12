// This component contains a green circle
const Player = (props) => {
  const { x, y, size } = props;
  return (
    <circle cx={x} cy={y} r={size} fill="green" />
  );
}
export default Player;