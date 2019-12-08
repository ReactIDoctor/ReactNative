export const GET_ALL_DOCTORS = 'GET_ALL_DOCTORS';

export const getAllDoctors = response => dispatch =>  {
    dispatch({
        action: GET_ALL_DOCTORS,
        payload: response.data
    });
}

