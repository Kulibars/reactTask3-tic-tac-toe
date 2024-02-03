import { useState } from "react";
import { GameLayout } from "./GameLayout.js";

function Game() {
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function resetGame() {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
  }

  return (
    <GameLayout
      resetGame={resetGame}
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
    />
  );
}

export default Game;
