import { combineReducers } from "redux"
import enlargeImageReducer from "./enlargeImageReducer"
import appStateReducer from "./appStateReducer"

const rootReducer = combineReducers ({
    enlargeImage: enlargeImageReducer,
    appState: appStateReducer
})

export default rootReducer