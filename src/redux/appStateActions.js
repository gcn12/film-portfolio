export const ADD_URL = "ADD_URL"
export const ADD_ID = "ADD_ID"
export const ADD_URLS = "ADD_URLS"
export const IS_SIXTEEN_NINE = "IS_SIXTEEN_NINE"

export function isSixteenNine(bool){
    return dispatch=> {
        dispatch({type: IS_SIXTEEN_NINE, payload: bool})
    }
}

export function addURL(url){
    return dispatch=> {
        dispatch({type: ADD_URL, payload: url})
    }
}

export function addID(id) {
    return dispatch => {
        dispatch({type: ADD_ID, payload: id})
    }
}

export function addURLS(urls) {
    return dispatch => {
        dispatch({type: ADD_URLS, payload: urls})
    }
}