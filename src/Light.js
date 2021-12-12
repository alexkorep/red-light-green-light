// This component contains an SVG rect on top of the screen
// Its width is 100%
// Its height is 20
// Its background color is green if isGreen parameter is true, and red otherwise
const Light = ({ isGreen }) => {
  return (
    <svg width="100%" height="20">
      <rect
        x="0"
        y="0"
        width="100%"
        height="20"
        fill={isGreen ? "green" : "red"}
      />
    </svg>
  );
}

export default Light;
