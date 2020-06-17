import React from 'react';
import PropTypes from 'prop-types';

// This code contain both the player details box
// This is a stateless component
// All the data get passed as props, and it render the ui based on that
const PlayerBox = ({player, current, winner, draw, name, win, step}) => {
    return (
        <div className="flexbox">
            <div className={`player-main-cont${winner === player ? ' winner' : ''}${(draw) ? ' draw' : ''}`}>
                <div className={`turn${current === player ? ' visible' : ''}`}>
                    {winner === player ? 'Winner' : (draw) ? 'Draw' : 'Your Turn'}
                </div>
                <div className="player-cont">
                    <div className="heading text-uppercase">player {player}</div>
                    <div className="name">{name}</div>
                    <div className="sign">
                        {player === 1 && <div className="cross"></div>}
                        {player === 2 && <div className="round"></div>}
                    </div>
                </div>
                <div className="steps">
                    {
                        [...Array(step).keys()].map((el) => (
                            <span className={`step${el < win ? ' active' : ''}`} key={el}></span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

PlayerBox.propTypes = {
    current: PropTypes.number.isRequired,
    winner: PropTypes.number.isRequired,
    player: PropTypes.number.isRequired,
    draw: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    win: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired
}

export default PlayerBox;