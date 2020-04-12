import {combineReducers} from "redux";
import {tokensReducer} from "./tokensReducer";

export const rootReducer = combineReducers({
    auth: tokensReducer
});
