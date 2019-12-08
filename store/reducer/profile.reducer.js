import {GET_PROFILE,CREATE_PROFILE,EDIT_PROFILE} from '../actions/profile.actions';

const initialState = {
    profile:{},
    status:''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                username: action.payload
            };

        case CREATE_PROFILE:
            return {
                ...state,
                status: 'CREATED'
            };

        case EDIT_PROFILE:
            return {
                ...state,
                status:'EDITED'
            }

        default:
            return state;
    }
}

