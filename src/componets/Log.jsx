import React from "react";

function Log({ gameturns }) {
  const { square, Player } = gameturns;
  // console.log(square)
  // const{ row, col}=square;
  return (
    <ol id="log">
      {gameturns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.Player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
