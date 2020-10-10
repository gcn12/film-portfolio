import React, { Component } from "react"
import content from "../content"
import {Link} from "react-router-dom"
import "./Thumbnail.scss"

class Thumbnail extends Component {

    state = {
        imagesLoaded: false,
    }

    imagesLoaded = () => {
        this.setState({
            imagesLoaded: true,
        })
    }

    componentDidMount() {
        this.props.clearURLs()
    }
    render() {
        return(
            Object.values(content).map((work, index) => {
                return(
                    <Link key={index} to={`/${work.url}`}>
                        <div className={`text-and-thumbnail ${this.state.imagesLoaded ? 'fade-in' : null} `}>
                            <div className="blur-container">
                                <div className="image-scale-container">
                                    <img onLoad={this.imagesLoaded}  className="thumbnail" alt="display" src={work.thumbnail}></img>
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