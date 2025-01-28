import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
  X : "Player 1",
  O : "Player 2"
};

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derrivePlayer(gameTurn){
  let currentPlayer  = 'X';

  if (gameTurn.length > 0 && gameTurn[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function derriveWinner(gameBoard, players) {
  let winner = null;

  for(const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if(
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner = players[firstSquareSymbol];
    } 
  }
  return winner;
}

function derriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])];

  for(const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  
  const activePlayer = derrivePlayer(gameTurns);
  const gameBoard = derriveGameBoard(gameTurns);
  const winner = derriveWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns => {
      const currentPlayer = derrivePlayer(prevTurns);

      const updatedTurn = [{
        square : {row : rowIndex, col : colIndex}, player: currentPlayer
      }, ...prevTurns];

      return updatedTurn;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(oldPlayers => {
      return {
        ...oldPlayers,
        [symbol] : newName
      };
    });
  }

  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player">
          <Player 
            intitialPlayerName = {PLAYERS.X}
            symbol = "X" 
            isActive = {activePlayer === "X"}
            onSaveClick = {handlePlayerNameChange}
          />
          <Player 
            intitialPlayerName = {PLAYERS.O} 
            symbol = "O" 
            isActive = {activePlayer === "O"}
            onSaveClick = {handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner = {winner} onRestart = {handleRestart}/>}
        <GameBoard 
          board={gameBoard} 
          onSelect={handleSelectSquare}
        />
      </div>
      <Log turns = {gameTurns}/>
    </main>
  );
}

export default App