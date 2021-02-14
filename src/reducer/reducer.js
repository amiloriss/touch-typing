import { GET_DATA } from '../action/type';

const initialState = {
    data: null,
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
