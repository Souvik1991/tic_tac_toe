// This function decides, if there is any winner in the game or not
// It takes the game array as input
// Respond back with the winner and win index
const checkWinner = (game) => {
    // This variable stores all combination of winning index
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

    // Looping through winning array
    // Checking the index does not contain -1
    // If the value of index combination contain the same value
    // return it with winner and winner array indexes
    if(game.filter(el => el !== -1).length > 0){
        for(let i = 0; i < winComb.length; i++){
            let el = winComb[i];
            if(game[el[0]] !== -1 || game[el[1]] !== -1 || game[el[2]] !== -1){
                if(game[el[0]] === game[el[1]] && game[el[1]] === game[el[2]]) return {winner: game[el[0]], winIndex: el}
            }
        }
    }
    // If there is no match, return it with -1 winner
    return {winner: -1, winIndex: []}
};

// Trigger the winner event
// Pass the winner id, The array of index for which combination winner has won the match,
// Pass the game array, and both players updated win count
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

// Trigger the draw event
// Pass the updated game array
export function setDraw(gameArr) {
    return {
        type: 'DRAW',
        gameArr
    };
}

// Trigger the place event
// Pass the updated game array and updated current player
export function place(gameArr, currentPlayer){
    return {
        type: 'PLACE',
        gameArr,
        currentPlayer
    };
}

// This is the main function which get called every single time user click on square
// This function check if assigning is possible or not also check the winner
export function placeAndCheck(index){
    return function(dispatch, getState){
        // Check we already have winner or not
        // Also check if the match is draw or not
        // If any of the condition match reset the game for rematch
        if(getState().winner !== -1 || getState().matchDraw){
            dispatch({type: 'RESET_GAME'})
            return;
        }

        // Getting the game array from the store
        // If the player is already assinged for the index return from here
        const game = [...getState().gameArr];
        if(game[index] !== -1) return;

        // Get the current player number
        // And assing that player number in the game array
        const currentPlayer = getState().currentPlayer;
        game[index] = currentPlayer;

        // Check we have winner or not
        // If there is a winner it should return the player number and
        // The array of index for which combination winner has won the match
        // If there is no winner it will return winner as -1
        let {winner, winIndex} = checkWinner(game);

        // checking the winner value if there is an winner the winner will player number
        if(winner !== -1){
            // Getting the player win count for each player
            let playerOneWinCount =  getState().playerOneWinCount,
                playerTwoWinCount = getState().playerTwoWinCount;
            
            // Increasing the win count depending upon the winner
            // If the first player win we are increasing the player one win count
            if(winner === 1) playerOneWinCount++;
            else playerTwoWinCount++;

            // After we set all the variable value
            // We dispatch event for the store so that we can update value on redux
            dispatch(setWinner(winner, winIndex, game, playerOneWinCount, playerTwoWinCount));
            if(playerOneWinCount === getState().totalGameCount || playerTwoWinCount === getState().totalGameCount) 
                dispatch({type: 'FINAL_WINNER'})
        }
        else{
            // If there is no winner, checking how many move is left
            const remainTurn = game.filter(el => el === -1);
            // If there is no move left, that means it's a draw
            // Else set assing the player click in game array
            // Also switch current player
            if(remainTurn.length === 0) dispatch(setDraw(game));
            else dispatch(place(game, currentPlayer === 1 ? 2 : 1));
        }
    }
}
