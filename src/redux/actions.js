export const SET_ISSUES = "SET_ISSUES";

export function setIssues(issues) {
    return {
        type: SET_ISSUES,
        payload: issues
    }
}

export const SET_SEARCH_PARAMS = "SET_SEARCH_PARAMS";

export function setSearchParams(params) {
    return {
        type: SET_SEARCH_PARAMS,
        payload: params
    }
}

export const SET_PAGE = "SET_PAGE";

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const SET_LAST_PAGE = "SET_LAST_PAGE";

export function setLastPage(page) {
    return {
        type: SET_LAST_PAGE,
        payload: page
    }
}