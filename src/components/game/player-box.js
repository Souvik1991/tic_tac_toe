import React from 'react';

// This code contain both the player details box
// This is a stateless component
// All the data get passed as props, and it render the ui based on that
const PlayerBox = (props) => {
    return (
        <div className="flexbox">
            <div className={`player-main-cont${props.winner === props.player ? ' winner' : ''}${(props.draw) ? ' draw':''}`}>
                <div className={`turn${props.current === props.player ? ' visible' : ''}`}>
                    {props.winner === props.player ? 'Winner' : (props.draw) ? 'Draw' : 'Your Turn'}
                </div>
                <div className="player-cont">
                    <div className="heading text-uppercase">player {props.player}</div>
                    <div className="name">{props.name}</div>
                    <div className="sign">
                        {props.player === 1 && <div className="cross"></div>}
                        {props.player === 2 && <div className="round"></div>}
                    </div>
                </div>
                <div className="steps">
                    {
                        [...Array(props.step).keys()].map((el) => (
                            <span className={`step${el < props.win ? ' active' : ''}`} key={el}></span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default PlayerBox;