import { useState } from "react";

// usePlayer hook
// returns the player yCoordinate
// returns a function to reset the player yCoordinate to 0
// returns a function to increment the player yCoordinate by STEP_SIZE
export const usePlayer = () => {
  const [yCoordinate, setYCoordinate] = useState(0);
  const resetYCoordinate = () => setYCoordinate(0);
  const doStep = () => setYCoordinate(yCoordinate + STEP_SIZE);
  return {yCoordinate, resetYCoordinate, doStep};
}

const STEP_SIZE = 10;