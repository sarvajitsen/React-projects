import React from "react";

function Gameover({ winner, reset }) {
  function handlereset() {
    reset();
  }
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} has won</p>}
      {!winner && <p>Match drawn</p>}
      <p>
        <button onClick={handlereset}>Rematch!</button>
      </p>
    </div>
  );
}

export default Gameover;
