export const LOG_OUT = 'LOG_OUT';
export const AUTH = "AUTH";
export const LOGIN = 'LOGIN';



export const login = (phone,password) => dispatch => {
    localStorage.setItem("access_token", `${phone}:${password}`);

    dispatch({
        type: LOGIN,
        payload: phone
    });
};

export const logout = (phone,password) => dispatch => {
    dispatch({
        type: LOG_OUT,
        payload: ""
    });
};

export const authorize = (phone,password) => dispatch => {
    localStorage.setItem("access_token", `${phone}:${password}`);

    dispatch({
        type: AUTH,
        payload: phone
    });
};



