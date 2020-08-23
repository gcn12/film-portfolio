import React from "react"
import content from "../content"
import {Link} from "react-router-dom"
import "./Thumbnail.scss"

const Thumbnail = (props) => {
    return(
        content.map((work, index) => {
            return(
                <Link onClick={()=>props.getURL(work.url)} key={index} to={`/film-portfolio/${work.url}`}>
                    <div className="text-and-thumbnail">
                        <div className="blur-container">
                            <div className="image-scale-container">
                                <img className="thumbnail" alt="display" src={work.thumbnail}></img>
                            </div>
                        </div>
                        <div className="text">{work.displayTitle.toUpperCase()}</div>
                    </div>
                </Link>
            )
        })
    )
}


export default Thumbnail