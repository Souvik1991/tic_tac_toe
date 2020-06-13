import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PlayerDetails = () => {
    // Using react hooks to define state variables in functional component
    // Also defining the redux dispatcher
    // So that we can dispatch the event from here directly
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="flexbox">
            <div className="game-main-cont">
                <div className="game-cont form">
                    <div className="heading">Welcome to <span className="text-uppercase">Tic tac toe</span></div>
                    <div className="form-group">
                        <label htmlFor="player1">Player 1</label>
                        <input type="text" autoComplete="off" className="input-field" id="player1" name="player1" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="player2">Player 2</label>
                        <input type="text" autoComplete="off" className="input-field" id="player2" name="player2" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
                    </div>

                    <button className="gradient-btn" disabled={!playerOne || !playerTwo} onClick={() => dispatch({ 
                        type: 'PLAYER_SET', 
                        playerOneName: playerOne,
                        playerTwoName: playerTwo 
                    })}>Continue</button>
                </div>
            </div>
        </div>
    )
};

export default PlayerDetails;