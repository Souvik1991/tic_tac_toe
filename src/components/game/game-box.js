import React from 'react';
import PropTypes from 'prop-types';

// This code contain the main game box
// This is a stateless component
// All the data get passed as props, and it render the ui based on that
const GameBox = ({onChooseTile, win, game}) => {
    return (
        <div className="flexbox gamem">
            <div className="game-main-cont">
                <div className="game-cont board">
                    {
                        [...Array(9).keys()].map((el) => (
                            <div key={el} className="square" onClick={() => onChooseTile(el)}>
                                <div className={`sign${win.length > 0 && win.indexOf(el) > -1 ? ' selected' :''}`}>
                                    {game[el] === 1 && <div className="cross"></div>}
                                    {game[el] === 2 && <div className="round"></div>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

GameBox.propTypes = {
    onChooseTile: PropTypes.func.isRequired,
    win: PropTypes.array.isRequired,
    game: PropTypes.array.isRequired
}

export default GameBox;