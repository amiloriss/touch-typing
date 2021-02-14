import { GET_DATA } from '../action/type';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;
