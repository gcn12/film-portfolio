import React from "react"
import content from "../content"
import {Link} from "react-router-dom"

const Thumbnail = (props) => {
    return(
        content.map((work, index) => {
            return(
                <Link onClick={()=>props.getURL(work.url)} key={index} to={`/${work.url}`}>
                    <img style={{height: "200px"}} alt="display" src={work.thumbnail}></img>
                </Link>
            )
        })
    )
}

export default Thumbnail