export const NEXT = "NEXT"
export const PREVIOUS = "PREVIOUS"
export const START_INDEX = "START_INDEX"

export function next() {
    return (dispatch) => {
        dispatch({type: NEXT})
    }
}

export function previous() {
    return (dispatch) => {
        dispatch({type: PREVIOUS})
    }
}

export function startIndex(index) {
    return (dispatch) => {
        dispatch({type: START_INDEX, payload: index})
    }
}