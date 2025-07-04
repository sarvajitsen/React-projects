

export default function GameBoard({ onselect,board }) {
  // let board = initialGameBoard;
  return (
    <>
      <ol id="game-board">
        {/* using index for key is problem when swapping rows */}
        {board.map((row, index) => (
          <li key={index}>
            <ol>
              {row.map((symbol, colIndex) => (
                <li key={colIndex}>
                  {/* col */}
                  <button
                  // disabled={board[index][colIndex]!==null}
                  disabled={symbol!==null}
                  onClick={() => onselect(index, colIndex)}
                  >
                    {symbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
