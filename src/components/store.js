import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import game from "./reducer";

const store = createStore(
    game,
    applyMiddleware(thunk)
);
  
export default store;