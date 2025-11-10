import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    // console.log({ activePlayer });
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // deep-copying the array
            const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare(); // switching the player
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    // do not forget to return
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
                                                    handleSelectSquare(
                                                        rowIndex,
                                                        colIndex
                                                    )
                                                }
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
