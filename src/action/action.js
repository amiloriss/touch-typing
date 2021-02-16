import axios from 'axios';
import {
    GET_DATA,
    GET_ERROR,
    UPDATE_ACCURACY,
    UPDATE_SPEED,
    UPDATE_MISTAKE,
    UPDATE_COUNT,
    NEW_START,
} from './type';

export const getData = () => async (dispatch) => {
    try {
        const res = await axios.get(
            'https://baconipsum.com/api/?type=all-meat&sentences=5'
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

export const updateSpeed = (speedCount) => ({
    type: UPDATE_SPEED,
    payload: speedCount,
});
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
