import React from 'react';
import { useDispatch } from 'react-redux';

// This code shows the final winner at the end of the game
// This is a stateless component
// All the data get passed as props, and it render the ui based on that
// It uses redux dispatcher to reload the game
const ShowMatchWinner = (props) => {
    // console.log(props.win);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div className="flexbox">
                <div className="game-main-cont">
                    <div className="game-cont winner" onClick={() => dispatch({
                        type: 'RELOAD_GAME'
                    })}>
                        <div className="heading text-uppercase">Winner!</div>
                        <div className="player">
                            <div className="pheading text-uppercase">player {props.player}</div>
                            <div className="name">{props.name}</div>
                            <div className="sign">
                                {props.player === 1 && <div className="cross"></div>}
                                {props.player === 2 && <div className="round"></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pyro">
                <div class="before"></div>
                <div class="after"></div>
            </div>
        </React.Fragment>
    )
};

export default ShowMatchWinner;