import React, { Component } from "react"
import content from "../content"
import {Link} from "react-router-dom"
import "./Thumbnail.scss"

class Thumbnail extends Component {
    componentDidMount() {
        this.props.clearURLs()
    }
    render() {
        return(
            Object.values(content).map((work, index) => {
                return(
                    <Link key={index} to={`/${work.url}`}>
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
}


export default Thumbnail