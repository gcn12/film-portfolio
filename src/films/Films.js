import React from "react"
import "./Films.css"
import content from "../content"
import Thumbnail from "./Thumbnail"

const Films = (props) => {
    return(
        <div className="films">
            {Object.values(content).map((work, index) => {
                return(
                    <Thumbnail work={work} key={index} index={index} clearURLs={props.clearURLs} getURL={props.getURL}/>
                )
            })}
        </div>
    )
}

export default Films