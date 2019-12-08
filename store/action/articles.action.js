export const GET_ARTICLES = 'GET_ARTICLES';

export const getArticles = response => dispatch =>  {
    dispatch({
        action: GET_ARTICLES,
        payload: response.data
    });
}

