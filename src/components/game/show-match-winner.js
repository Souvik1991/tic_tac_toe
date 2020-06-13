import React from 'react';
import { useDispatch } from 'react-redux';

const ShowMatchWinner = (props) => {
    // console.log(props.win);
    const dispatch = useDispatch();
    return (
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
    )
};

export default ShowMatchWinner;