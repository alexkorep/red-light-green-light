import { useState } from "react";
import { useLight } from './LightHook';
import { usePlayer } from './PlayerHook';

// useApp hook
// - Defines GameState enum, one of the following: IN_GAME, WIN, LOSE 
// - returns game state
// - gets isGreen flag from useLight hook and returns it from the hook
// - gets {yCoordinate, doStep} from usePlayer hook
// - returns onClick function
// - onClick function has no arguments
// - onClick function contains following logic:
//   - if game state is IN_GAME, then
//     - if isGreen if false, then set game state to LOSE
//     - if isGreen if true, then call dosStep function
// - if player yCoordinate is greater than 300, set game state to WIN
export const useApp = () => {
  const [gameState, setGameState] = useState(GameState.IN_GAME);
  const isGreen = useLight();
  const { yCoordinate, doStep, resetYCoordinate } = usePlayer();
  const onClick = () => {
    console.log("onClick", gameState, isGreen, yCoordinate);
    if (gameState === GameState.IN_GAME) {
      if (!isGreen) {
        setGameState(GameState.LOSE);
      } else {
        doStep();
      }
    } else {
      resetYCoordinate();
      // Reset game state to IN_GAME
      setGameState(GameState.IN_GAME);
    }

    if (yCoordinate > 300) {
      setGameState(GameState.WIN);
    }
  };
  return { gameState, onClick, yCoordinate, isGreen };
}

export const GameState = {
  IN_GAME: 'IN_GAME',
  WIN: 'WIN',
  LOSE: 'LOSE'
}
