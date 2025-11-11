import { useState } from "react";

export default function PlayerInfo({
    initialName,
    symbol,
    isActive,
    onNameChange,
}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing((prev) => !prev);
        if (isEditing) {
            onNameChange(symbol, playerName.toUpperCase());
        }
    }
    // console.log(symbol, isActive);

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {!isEditing && (
                    <span className="player-name">{playerName}</span>
                )}
                {isEditing && (
                    <input
                        type="text"
                        value={playerName}
                        onChange={(event) => setPlayerName(event.target.value)}
                        placeholder="new name: "
                        required
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
