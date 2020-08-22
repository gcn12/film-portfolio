import * as actions from "./enlargeImageActions"

export const initialState = {
    index: ""
}

export default function enlargeImageReducer(state=initialState, action){
    switch(action.type){
        case actions.NEXT:
            return {...state, index: state.index+1}
        case actions.PREVIOUS:
            return {...state, index: state.index-1}
        case actions.START_INDEX:
            return {...state, index: action.payload}
        default:
            return state
    }
} 