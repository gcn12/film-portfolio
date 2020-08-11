import React from "react"
import content from "../content"
import {Link} from "react-router-dom"
import "./Thumbnail.scss"

const Thumbnail = (props) => {
    return(
        content.map((work, index) => {
            return(
                <Link onClick={()=>props.getURL(work.url)} key={index} to={`/film-portfolio/${work.url}`}>
                    {/* <div className="text-and-thumbnail"> */}
                        <img className="thumbnail" alt="display" src={work.thumbnail}></img>
                        {/* <div class="text">{work.header}</div> */}
                    {/* </div> */}
                </Link>
            )
        })
    )
}

export default Thumbnail