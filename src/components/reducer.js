// Defining all initial state values
const initialState = {
    gameReady: false,
    playerOneName: '',
    playerTwoName: '',
    playerOneWinCount: 0,
    playerTwoWinCount: 0,
    totalGameCount: 6,
    currentPlayer: 1,
    gameArr: [...Array(9).fill(-1)],
    winIndex: [],
    winner: -1,
    matchDraw: false,
    haveMatchWinner: false 
};

// The game reducer
// Changing the store state value
const game = (state = initialState, action) => {
    let tmpState = {};
    // console.log(action);
    switch (action.type) {
        case 'PLAYER_SET':
            tmpState = {
                ...state,
                playerOneName: action.playerOneName,
                playerTwoName: action.playerTwoName,
                gameReady: true
            }
        break;

        case 'PLACE':
            tmpState = {
                ...state,
                gameArr: action.gameArr,
                currentPlayer: action.currentPlayer
            }
        break;

        case 'SET_WINNER':
            tmpState = {
                ...state,
                winner: action.winner,
                winIndex: action.winIndex,
                gameArr: action.gameArr,
                playerOneWinCount: action.playerOneWinCount,
                playerTwoWinCount: action.playerTwoWinCount
            };
        break;

        case 'DRAW':
            tmpState = {
                ...state,
                gameArr: action.gameArr,
                matchDraw: true
            };
        break;

        case 'RESET_GAME':
            tmpState = {
                ...state,
                winner: -1,
                winIndex: [],
                gameArr: [...Array(9).fill(-1)],
                currentPlayer: 1,
                matchDraw: false,
            };
        break;

        case 'RELOAD_GAME':
            tmpState = {
                gameReady: false,
                playerOneName: '',
                playerTwoName: '',
                playerOneWinCount: 0,
                playerTwoWinCount: 0,
                totalGameCount: 6,
                currentPlayer: 1,
                gameArr: [...Array(9).fill(-1)],
                winIndex: [],
                winner: -1,
                matchDraw: false,
                haveMatchWinner: false 
            };
        break;

        case 'FINAL_WINNER':
            tmpState = {
                ...state,
                haveMatchWinner: true
            }
        break;

        default:
            tmpState = state
        break;
    }
    // console.log(tmpState);
    return tmpState;
}

export default game;