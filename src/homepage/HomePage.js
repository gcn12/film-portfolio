import React from "react"
import "./HomePage.scss"

const HomePage = () => {
    return(
        <div className="reel">
            <iframe 
            className="embed-home"
            src="https://player.vimeo.com/video/353403743" 
            width="640" 
            height="272" 
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            title="video" 
            allowFullScreen
            />
        </div>
    )
}

export default HomePage