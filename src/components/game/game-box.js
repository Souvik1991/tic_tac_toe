import React from 'react';

// This code contain the main game box
// This is a stateless component
// All the data get passed as props, and it render the ui based on that
const GameBox = (props) => {
    // console.log(props.win);
    return (
        <div className="flexbox gamem">
            <div className="game-main-cont">
                <div className="game-cont board">
                    {
                        [...Array(9).keys()].map((el) => (
                            <div key={el} className="square" onClick={() => props.onChooseTile(el)}>
                                <div className={`sign${props.win.length > 0 && props.win.indexOf(el) > -1 ? ' selected' :''}`}>
                                    {props.game[el] === 1 && <div className="cross"></div>}
                                    {props.game[el] === 2 && <div className="round"></div>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default GameBox;