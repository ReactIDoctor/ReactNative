export const GET_PROFILE = 'GET_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';


export const getProfile = response => dispatch => {
    dispatch({
        type: GET_PROFILE,
        payload: response.data
    });
}

export const createProfile = response => dispatch => {
    dispatch({
        type: CREATE_PROFILE,
        payload: response.data
    });
}

export const editProfile = response => dispatch => {
    dispatch({
        type: EDIT_PROFILE,
        payload: response.data
    });
}