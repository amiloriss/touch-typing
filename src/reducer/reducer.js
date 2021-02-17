import {
    GET_DATA,
    UPDATE_MISTAKE,
    UPDATE_SPEED,
    UPDATE_ACCURACY,
    UPDATE_COUNT,
} from '../action/type';

const initialState = {
    data: null,
    loading: true,
    error: null,
    count: 0,
    typingSpeed: 0,
    typingAccuracy: 100,
    typingMistake: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case UPDATE_SPEED:
            return {
                ...state,
                typingSpeed: action.payload,
            };
        case UPDATE_ACCURACY:
            return {
                ...state,
                typingAccuracy: action.payload,
            };
        case UPDATE_COUNT:
            return {
                ...state,
                count: action.payload,
            };
        case UPDATE_MISTAKE:
            return {
                ...state,
                typingMistake: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
