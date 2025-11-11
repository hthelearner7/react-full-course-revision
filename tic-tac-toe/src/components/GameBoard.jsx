export default function GameBoard({ onSelectSquare, gameBoard }) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                // do not forget to return
                return (
                    <li key={rowIndex}>
                        <ol>
                            {
                                // column -> playerSymbol
                                row.map(
                                    (
                                        playerSymbol,
                                        colIndex // auto-return because of ()-syntax
                                    ) => (
                                        <li key={colIndex}>
                                            <button
                                                onClick={() =>
                                                    onSelectSquare(
                                                        rowIndex,
                                                        colIndex
                                                    )
                                                }
                                                disabled={playerSymbol != null}
                                            >
                                                {playerSymbol}
                                            </button>
                                        </li>
                                    )
                                )
                            }
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
}
