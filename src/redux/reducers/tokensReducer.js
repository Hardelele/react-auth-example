import {AUTH_ACTION, REGISTER_ACTION} from "../constants/Actions";

const initialState = {
    tokens: [],
};

export function tokensReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case AUTH_ACTION:
            return {...state, ...{tokens: action.payload}};
        case REGISTER_ACTION:
            return {...state, ...{tokens: action.payload}};
        default:
            return state;
    }
}
