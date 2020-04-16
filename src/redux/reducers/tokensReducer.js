import {AUTH_ACTION, INVALIDATE_AUTH_ACTION, REGISTER_ACTION} from "../constants/Actions";

const initialState = {
    tokens: {
        access_token: "",
        refresh_token: "",
    },
    isAuth: false
};

export function tokensReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case AUTH_ACTION:
            return {...state, ...{tokens: action.payload, isAuth: true}};
        case REGISTER_ACTION:
            return {...state, ...{tokens: action.payload, isAuth: true}};
        case INVALIDATE_AUTH_ACTION:
            return {...state, ...initialState};
        default:
            return state;
    }
}
