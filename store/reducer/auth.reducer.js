import {LOGIN, AUTH, LOG_OUT} from '../actions/auth.actions';

const token = localStorage.getItem("access_token");
const phone = token ? token.split(":")[0] : "";

const initialState = {
    phone,
    status: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                phone: action.payload
            };

        case AUTH:
            return {
                ...state,
                status: 'AUTHORIZED'
            };

        case LOG_OUT:
            return state;

        default:
            return state;
    }
}

