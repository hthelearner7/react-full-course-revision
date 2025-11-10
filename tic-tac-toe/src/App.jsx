import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    function handleSelectSquare() {
        setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <PlayerInfo
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
            </div>
        </main>
    );
}

export default App;
