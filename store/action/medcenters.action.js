export const GET_ALL_MEDCENTERS = 'GET_ALL_MEDCENTERS';

export const getAllMedcenters = response => dispatch =>  {
    dispatch({
        action: GET_ALL_MEDCENTERS,
        payload: response.data
    });
}

