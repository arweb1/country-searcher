import { SET_THEME } from "./theme-actions";

const themeReducer = (state = 'light', {type, payload}) => {
    switch (type) {
        case SET_THEME:
            return payload
        default:
            return state
    }
}

export default themeReducer;