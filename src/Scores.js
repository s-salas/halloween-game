import React from 'react';

function Scores({ players }) {
    return (
        <div>
            <h2 className="fw-bold" style={{ fontFamily: "Metal Mania" }}>Scores:</h2>
            <div className="row text-center mb-2">
                {players.map((player, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3"> {/* Adjust the column sizes as needed */}
                        <p className="player fw-bold" style={{ fontFamily: "Metal Mania", fontSize: "32px" }}>
                            {player.name}: {player.points}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Scores;
