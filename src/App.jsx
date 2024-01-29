import { useState } from "react";

import "./App.css";

function App() {
  const [diceOne, setDiceOne] = useState();
  const [diceTwo, setDiceTwo] = useState();
  const [winner, setWinner] = useState("");
  const [hide, setHide] = useState(true);
  const [hideTwo, setHideTwo] = useState(false);

  function playerOneDice() {
    const dice = Math.floor(Math.random() * (6 - 0) + 1);
    setDiceOne(dice);
    setHide(false);
    setHideTwo(true);
  }

  function playerTwoDice() {
    const dice = Math.floor(Math.random() * (6 - 0) + 1);
    setDiceTwo(dice);
    setHideTwo(false);
  }

  function rematch() {
    setDiceOne(0);
    setDiceTwo(0);
    setHide(true);
    setWinner("roll a dice");
  }

  function checkWinner() {
    if (diceOne > diceTwo) {
      setWinner("Player 1 win");
    } else if (diceOne < diceTwo) {
      setWinner("Player 2 win");
    } else {
      setWinner("tie");
    }
  }

  return (
    <>
      <h1>DICE GAME LETS GO-!</h1>
      <div className="player">
        <div className="player1">
          <h1>{diceOne}</h1>
          <h2>PLAYER 1</h2>
          {hide ? <button onClick={playerOneDice}>ROLL A DICE</button> : <></>}
        </div>
        <div className="player2">
          <h1>{diceTwo}</h1>
          <h2>PLAYER 2</h2>
          {hideTwo ? (
            <button onClick={playerTwoDice}>ROLL A DICE</button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <h1>{winner}</h1>
      <div>
        <button onClick={checkWinner}>CheckWinner</button>
        <button onClick={rematch}>AGAIN</button>
      </div>
    </>
  );
}

export default App;
