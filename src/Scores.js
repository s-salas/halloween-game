import React from 'react';

function Scores({ players }) {
    return (
        <div>
            <h3>Scores:</h3>
            <div className="row text-center mb-2">
                {players.map((player, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3"> {/* Adjust the column sizes as needed */}
                        <p className="player fs-4">
                            {player.name}: {player.points} points
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Scores;