import React, { Component } from "react"
import "./HomePage.scss"
import {ReactComponent as PlayButton} from "../play-button.svg"

class HomePage extends Component {
    state = {
        isThumbnail: true
    }

    thumbnailToVideo = () => {
        this.setState({
            isThumbnail: false
        })
    }

    render() {
        return(
            // this.state.isThumbnail ? 
            // <div className="thumbnail-container">
            //     <img onClick={this.thumbnailToVideo} className="reel-thumbnail" alt="thumbnail" src="https://live.staticflickr.com/65535/50211469602_89981b86da_k.jpg"></img>
            // </div>
            //     :
            <div className="reel2">
                <div className="reel">
                {this.state.isThumbnail ? 
            <div className="thumbnail-container">
                <img onClick={this.thumbnailToVideo} className="reel-thumbnail" alt="thumbnail" src="https://live.staticflickr.com/65535/50211469602_89981b86da_k.jpg"></img>
                <PlayButton className="play-button"/>
            </div>
                :
                    <iframe 
                    className="embed-home"
                    src="https://player.vimeo.com/video/353403743" 
                    width="960" 
                    height="540" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    title="video" 
                    allowFullScreen
                    />
                }
                </div>
            </div>
        )
    }
}

export default HomePage