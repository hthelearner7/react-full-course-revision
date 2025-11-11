import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
import WINNING_COMBINATIONS from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
    X: "PLAYER 1",
    O: "PLAYER 2",
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];
        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            secondSquareSymbol === thirdSquareSymbol
        ) {
            // game-stops and winner is declared
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    let gameBoard = deriveGameBoard(gameTurns);
    const [players, setPlayers] = useState(PLAYERS);
    const winner = deriveWinner(gameBoard, players);

    const hasDraw = gameTurns.length === 9 && !winner;

    // const [activePlayer, setActivePlayer] = useState("X");

    const activePlayer = deriveActivePlayer(gameTurns); // every time App component re-renders this gets re-computed

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
        setGameTurns((prevTurns) => {
            let currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex,
                    },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                // note-down this syntax
                [symbol]: newName,
            };
        });
    }

    // console.log({ gameTurns });

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo
                        initialName={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onNameChange={handlePlayerNameChange}
                    />
                    <PlayerInfo
                        initialName={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onNameChange={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && (
                    <GameOver winner={winner} onRestart={handleRestart} />
                )}

                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    gameBoard={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
