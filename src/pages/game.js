import React, { Component } from "react";
import { connect } from "react-redux";

import { placeAndCheck } from "../components/actions";

import Header from "../components/game/header";
import GameBox from "../components/game/game-box";
import PlayerBox from "../components/game/player-box";
import PlayerDetails from "../components/game/player-details";
import ShowMatchWinner from "../components/game/show-match-winner";

class Game extends Component{
    // componentDidMount(){
    //     console.log(1);
    //     console.log(this.props);
    // }
    render(){
        let {gameReady, haveMatchWinner, totalGameCount, playerOneWinCount, playerTwoWinCount, currentPlayer, winner, matchDraw, gameArr, winIndex, playerOneName, playerTwoName} = this.props;
        return (
            <div className="flex-container game-main-container vertical-middle">
                <Header/>
                {!gameReady && <PlayerDetails/>}
                {gameReady && !haveMatchWinner && 
                    <React.Fragment>
                        <PlayerBox name={playerOneName} player={1} step={totalGameCount} win={playerOneWinCount} current={currentPlayer} winner={winner} draw={matchDraw}/>
                        <GameBox game={gameArr} win={winIndex} onChooseTile={this.props.placeAndCheck}/>
                        <PlayerBox name={playerTwoName} player={2} step={totalGameCount} win={playerTwoWinCount} current={currentPlayer} winner={winner} draw={matchDraw}/>
                    </React.Fragment>
                }
                {haveMatchWinner && <ShowMatchWinner player={playerOneWinCount > playerTwoWinCount ? 1 : 2} name={playerOneWinCount > playerTwoWinCount ? playerOneName : playerTwoName}/>}
            </div>
        )
    }
}

// Reading all the initial state variable value
const mapStateToProps = state => ({
    gameReady: state.gameReady,
    playerOneName: state.playerOneName,
    playerTwoName: state.playerTwoName,
    playerOneWinCount: state.playerOneWinCount,
    playerTwoWinCount: state.playerTwoWinCount,
    totalGameCount: state.totalGameCount,
    currentPlayer: state.currentPlayer,
    gameArr: state.gameArr,
    winIndex: state.winIndex,
    winner: state.winner,
    matchDraw: state.matchDraw,
    haveMatchWinner: state.haveMatchWinner
});
  
// Passing the initial props value
// Passing the callback functions as well
export default connect(mapStateToProps, { placeAndCheck })(Game);