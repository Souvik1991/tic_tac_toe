const checkWinner = (game) => {
    let winComb = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    if(game.filter(el => el !== -1).length > 0){
        for(let i = 0; i < winComb.length; i++){
            let el = winComb[i];
            if(game[el[0]] !== -1 || game[el[1]] !== -1 || game[el[2]] !== -1){
                if(game[el[0]] === game[el[1]] && game[el[1]] === game[el[2]]) return {winner: game[el[0]], winIndex: el}
            }
        }
    }
    return {winner: -1, winIndex: []}
};

export function setWinner(winner, winIndex, gameArr, playerOneWinCount, playerTwoWinCount) {
    return {
        type: 'SET_WINNER',
        winner,
        winIndex,
        gameArr,
        playerOneWinCount,
        playerTwoWinCount
    };
}

export function setDraw(gameArr) {
    return {
        type: 'DRAW',
        gameArr
    };
}

export function place(gameArr, currentPlayer){
    return {
        type: 'PLACE',
        gameArr,
        currentPlayer
    };
}

export function placeAndCheck(index){
    return function(dispatch, getState){
        if(getState().winner !== -1 || getState().matchDraw){
            dispatch({type: 'RESET_GAME'})
            return;
        }

        let game = [...getState().gameArr];
        if(game[index] !== -1) return;

        const currentPlayer = getState().currentPlayer;
        game[index] = currentPlayer;

        // console.log(game);
        let {winner, winIndex} = checkWinner(game);

        if(winner !== -1){
            let playerOneWinCount =  getState().playerOneWinCount,
                playerTwoWinCount = getState().playerTwoWinCount;
                
            if(winner === 1) playerOneWinCount++;
            else playerTwoWinCount++;

            dispatch(setWinner(winner, winIndex, game, playerOneWinCount, playerTwoWinCount));
            if(playerOneWinCount === getState().totalGameCount || playerTwoWinCount === getState().totalGameCount) dispatch({type: 'FINAL_WINNER'})
        }
        else{
            const remainTurn = game.filter(el => el === -1);
            if(remainTurn.length === 0) dispatch(setDraw(game));
            else dispatch(place(game, currentPlayer === 1 ? 2 : 1));
        }
    }
}
