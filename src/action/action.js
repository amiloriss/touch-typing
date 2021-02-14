import axios from 'axios';
import { GET_DATA, GET_ERROR } from './type';

export const getData = () => async (dispatch) => {
    try {
        const res = await axios.get(
            'https://baconipsum.com/api/?type=all-meat&sentences=5'
        );
        const data = res.data;
        dispatch({ type: GET_DATA, payload: data });

        throw Error('Something went wrong, please try later');
    } catch (err) {
        dispatch({ type: GET_ERROR, payload: err });
    }
};
