import { SET_ISSUES, SET_SEARCH_PARAMS, SET_PAGE, SET_LAST_PAGE } from './actions';

const initialState = {
    issues: [],
    searchParams: {
        labels: "",
        per_page: 10,
        state: "all",
        sort: "created",
        direction: "desc",
        page: 1,
    },
    lastPage: 100
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ISSUES:
            return {
                ...state,
                issues: action.payload,
            }
        case SET_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: {
                    ...action.payload,
                    page: state.searchParams.page,
                    per_page: 10,
                }
            }
        case SET_PAGE:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    page: action.payload,
                }
            }
        case SET_LAST_PAGE:
            return {
                ...state,
                lastPage: action.payload
            }
        default:
            return state;
    }
}