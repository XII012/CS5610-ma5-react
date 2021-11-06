import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import clikReducer from "./clickReducer"

export default combineReducers ({
    game: gameReducer,
    clickCount: clikReducer,
    

})