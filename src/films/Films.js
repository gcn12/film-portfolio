import React from "react"
import "./Films.scss"
import Thumbnail from "./Thumbnail"
// import content from "../content"

 
const Films = (props) => {
    return(
        <div>
            <Thumbnail getURL={props.getURL}/>
        </div>
    )
}

export default Films