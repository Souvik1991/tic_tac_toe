import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import game from "./reducer";

// Creating the redux store and binding the game with it
const store = createStore(
    game,
    applyMiddleware(thunk)
);
  
export default store;