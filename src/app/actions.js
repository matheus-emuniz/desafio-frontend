export const SET_ISSUES = "SET_ISSUES";

export function setIssues(issues) {
    return {
        type: SET_ISSUES,
        payload: issues
    }
}