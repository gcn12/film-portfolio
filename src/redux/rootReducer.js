import { combineReducers } from "redux"
import enlargeImageReducer from "./enlargeImageReducer"

const rootReducer = combineReducers ({
    enlargeImage: enlargeImageReducer
})

export default rootReducer