// React component called Main
// - It contains a div with onclick handler and with class of main
// - The div contains an svg component
// - The svg component contains a Light component
// - The svg component contains a Player component
// - The component uses useApp hook to get 
//   - the state of the app
//   - the function handleClick to handle the click event
//   - isGreen flag
//   - yCoordinate position of the player
// - If isGreen is true, the Light component is green
  
import React, { useState, useEffect } from 'react';
import { useApp, GameState } from './AppHook';
import Light from './Light';
import Player from './Player';
const Main = () => {
  const { gameState, onClick, isGreen, yCoordinate } = useApp();

  // div which contains
  // "Click to step" if state is GameState.IN_GAME
  // "You win!" if state is GameState.WIN
  // "You lose!" if state is GameState.LOSE
  const gameMessageDiv = <div>
    {gameState === GameState.IN_GAME ? "Click to step" : gameState === GameState.WIN ? "You win!" : "You lose!"}
  </div> 


  return (
    <div className="main" onClick={onClick}>
      <svg width="320" height="320">
        <Light isGreen={isGreen} />
        <Player x={160} y={300 - yCoordinate} size={20}/>
      </svg>
      {gameMessageDiv}
    </div>
  );
}
export default Main;

