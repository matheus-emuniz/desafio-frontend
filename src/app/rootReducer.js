import { SET_ISSUES } from './actions';

const initialState = {
    issues: [],
}

export default function rootReducer(state = initialState, action) {
    console.log()
    switch (action.type) {
        case SET_ISSUES:
            return {
                ...state,
                issues: action.payload,
            }
        default:
            return state;
    }
}