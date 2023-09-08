import { SET_SEARCH, SET_REGION } from "./controls-action";

const initialState = {
    search: '',
    region: ''
}

export const controlsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_SEARCH:
            return {
                ...state,
                search: payload
            }
        case SET_REGION:
            return{
                ...state,
                region: payload
            }
        default:
            return state
    }
}