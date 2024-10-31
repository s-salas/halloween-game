import React, { useState } from 'react';

function SetUpPlayers({ updatePlayers }) {
    const [player, setPlayer] = useState('');

    const handleNewPlayer = (event) => setPlayer(event.target.value);

    const handlePlayers = (event) => {
        event.preventDefault();
        if (player.trim()) {
            updatePlayers((prevPlayers) => [...prevPlayers, { name: player, points: 0 }]);
            setPlayer('');
        }
    };

    return (
        <div className="mb-5">
            <form onSubmit={handlePlayers}>
                <label htmlFor="player">
                    <input
                        id="player"
                        type="text"
                        name="player"
                        value={player}
                        onChange={handleNewPlayer}
                    />
                </label>
                <button type="submit" className="btn btn-dark mx-2">+ Add player</button>
            </form>
        </div>
    );
}

export default SetUpPlayers;
