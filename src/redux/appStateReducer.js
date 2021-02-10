import * as actions from "./appStateActions"

const initialState = {
    url: "",
    id: [],
    urls: [],
    isSixteenNine: true,
} 

export default function appStateReducer(state=initialState, action){
    switch(action.type){
        case actions.IS_SIXTEEN_NINE:
            return {...state, isSixteenNine: action.payload}
        case actions.ADD_URL:
            return {...state, url: action.payload}
        case actions.ADD_ID:
            return {...state, id: action.payload}
        case actions.ADD_URLS:
            return {...state, urls: action.payload}
        default: 
            return state
    }
}
