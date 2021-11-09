import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import clickReducer from "./clickReducer"

export default combineReducers ({
    game: gameReducer,
    clickCount: clickReducer,
    
})