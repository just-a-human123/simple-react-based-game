import React from 'react';

const Leaderboard = (props) => {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <ul>
                {props.players.map((player, index) => {
                    return (
                        <li key={index}>
                            {player.name}
                            <span>{player.score}</span>
                        </li>
                    );
                }
                )}
            </ul>
        </div>
    );
}

export default Leaderboard;