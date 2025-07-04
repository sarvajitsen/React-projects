import GameBoard from "./componets/Gameboard";
import Player from "./componets/Player";
import { useState } from "react";
import Log from "./componets/Log";
import { WINNING_COMBINATIONS } from "./componets/winingCombination";
import Gameover from "./componets/Gameover";

function deriveactivePlayer(turn) {
  let current = "X";
  if (turn.length > 0 && turn[0].Player === "X") {
    current = "O";
  }
  return current;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  //deep clone of array inside array.
  let board = [...initialGameBoard.map((Array) => [...Array])];
  // const [active, setactive] = useState("X");
  const [turns, setturns] = useState([]);
  let winner = null;

  const active = deriveactivePlayer(turns);

  //turns empty array this loop wont execute
  for (let turn of turns) {
    const { square, Player } = turn;
    const { row, col } = square;
    board[row][col] = Player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const FirstSymbol = board[combination[0].row][combination[0].column];
    const secondSymbol = board[combination[1].row][combination[1].column];
    const thirdSymbol = board[combination[2].row][combination[2].column];
    if (
      FirstSymbol !== null &&
      FirstSymbol === secondSymbol &&
      FirstSymbol === thirdSymbol
    ) {
      winner = FirstSymbol;
    }
  }

  const hasdraw = turns.length === 9 && !winner;

  const handlesquare = (rowindex, colindex) => {
    // setactive((prev) => {
    //   if (prev === "X") {
    //     return "O";
    //   } else {
    //     return "X";
    //   }
    // });
    setturns((prev) => {
      //active different state so to get latest value
      // let currentplayer="X";
      // if(prev.length>0 && prev[0].Player==="X"){
      //   currentplayer="O"
      // }else{
      //   currentplayer="X"
      // }
      const currentplayer = deriveactivePlayer(prev);
      const updated = [
        { square: { row: rowindex, col: colindex }, Player: currentplayer },
        ...prev,
      ];
      return updated;
    });
  };

  function rematch() {
    setturns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intname="player1"
            symbol="X"
            isActive={active === "X"}
          ></Player>
          <Player
            intname="player2"
            symbol="O"
            isActive={active === "O"}
          ></Player>
        </ol>
        {(winner || hasdraw) && (
          <Gameover winner={winner} reset={rematch}></Gameover>
        )}
        <GameBoard
          // turns={turns}
          board={board}
          onselect={handlesquare}
          activeSymbol={active}
        ></GameBoard>
      </div>
      <Log gameturns={turns}></Log>
    </main>
  );
}

export default App;
// Deploy build == https://bespoke-meerkat-22abc4.netlify.app/