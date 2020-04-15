import axios from "axios";
import {GET_WHO_AM_I} from "../constants/Endpoints";
import {WHO_AM_I_ACTION} from "../constants/Actions";

export function getWhoAmI(token) {
    return dispatch => {
        axios({
            method: 'get',
            url: GET_WHO_AM_I,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            dispatch({type: WHO_AM_I_ACTION, payload: response.data})
        })
    }
}
