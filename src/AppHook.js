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
