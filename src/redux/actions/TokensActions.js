import axios from "axios";
import {POST_AUTH, POST_REGISTER} from "../constants/Endpoints";
import {AUTH_ACTION, INVALIDATE_AUTH_ACTION, REGISTER_ACTION} from "../constants/Actions";

const saveTokens = (data) => {
    window.localStorage.setItem("access_token", data.access_token);
    window.localStorage.setItem("refresh_token", data.refresh_token);
};

const invalidateAuth = (ignore) => {
    window.localStorage.clear();
    return dispatch => {
        dispatch({type: INVALIDATE_AUTH_ACTION})
    };
};

export function postAuth(authInfo) {
    return dispatch => {
        axios.post(POST_AUTH, authInfo).then(response => {
            saveTokens(response.data);
            dispatch({type: AUTH_ACTION, payload: response.data});
        }).catch(invalidateAuth);
    }
}

export async function postRegister(registerInfo) {
    return dispatch => {
        axios.post(POST_REGISTER, registerInfo).then(response => {
                saveTokens(response.data);
                dispatch({type: REGISTER_ACTION, payload: response.data});
        }).catch(invalidateAuth);
    }
}
