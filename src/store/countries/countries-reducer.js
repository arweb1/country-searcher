import { SET_LOADING, SET_ERROR, SET_COUNTRY } from "./countries-actions";

const initalState = {
    status: 'idle', // loading || received || rejected
    error: null,
    list: []
}

export const countriesReducer = (state = initalState, {type, payload}) => {
    switch (type) {
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                list: payload
            }
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        default:
            return state;
    }
}