import React from "react"
import "./Films.scss"
import Thumbnail from "./Thumbnail"

const Films = (props) => {
    return(
        <div className="films">
            <Thumbnail getURL={props.getURL}/>
        </div>
    )
}

export default Films