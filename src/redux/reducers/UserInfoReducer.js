import {WHO_AM_I_ACTION} from "../constants/Actions";

const initialState = {
    userInfo: []
};

export function userInfoReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case WHO_AM_I_ACTION:
            return {...state, ...{userInfo: action.payload}};
        default:
            return state;
    }
}
