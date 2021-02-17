import axios from 'axios';
import {
    GET_DATA,
    GET_ERROR,
    UPDATE_ACCURACY,
    UPDATE_SPEED,
    UPDATE_MISTAKE,
    UPDATE_COUNT,
} from './type';

export const getData = () => async (dispatch) => {
    try {
        const res = await axios.get(
            'https://baconipsum.com/api/?type=all-meat&sentences=1'
        );
        const data = res.data
            .toString()
            .split('')
            .map((letter) => {
                return {
                    letter,
                    current: null,
                    success: null,
                    failure: null,
                };
            });
        dispatch({ type: GET_DATA, payload: data });
    } catch (err) {
        dispatch({ type: GET_ERROR, payload: err });
    }
};

export const updateSpeed = (charCount, timeElapsed, timer, text) => async (
    dispatch
) => {
    if (charCount === text.length) {
        clearInterval(timer);
    } else
        dispatch({
            type: UPDATE_SPEED,
            payload: Math.round((charCount / timeElapsed) * 60),
        });
};

export const updateAccuracy = (accuracyCount) => ({
    type: UPDATE_ACCURACY,
    payload: accuracyCount,
});
export const updateMistake = (mistakeCount) => ({
    type: UPDATE_MISTAKE,
    payload: mistakeCount,
});

export const setCount = (count) => ({
    type: UPDATE_COUNT,
    payload: count,
});
