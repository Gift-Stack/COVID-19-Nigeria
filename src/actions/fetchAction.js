import { GET_DATA, SET_LOADING } from './types';

export const getData = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('https://covidnigeria.herokuapp.com/api');
        const data = await res.json();

        dispatch({
            type: GET_DATA,
            payload: data,
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
