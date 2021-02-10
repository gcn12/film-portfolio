import React, { Component } from "react"
// import "./HomePage.css"
import { ReactComponent as PlayButton } from "../play-button.svg"
import {
    Container,
    Thumbnail,
    PlayButtonStyles,
    ThumbnailContainer,
    Video,
    Container2,
} from './HomePage.styles'

class HomePage extends Component {
    state = {
        isThumbnail: true
    }

    setIsThumbnail = () => {
        this.setState({
            isThumbnail: false
        })
    }

    render() {
        return(
            <Container2>
                <Container>
                    <div className="reel">
                        {this.state.isThumbnail ? 
                            <ThumbnailContainer className="thumbnail-reel-container">
                                <Thumbnail onClick={this.setIsThumbnail} className="reel-thumbnail" alt="thumbnail" src="https://live.staticflickr.com/65535/50211469602_89981b86da_k.jpg" />
                                <PlayButtonStyles>
                                    {/* <PlayButton src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAyMnYtMjBsMTggMTAtMTggMTB6Ii8+PC9zdmc+" /> */}
                                    <PlayButton onClick={this.setIsThumbnail} />
                                </PlayButtonStyles>
                            </ThumbnailContainer>
                        :
                            <Video 
                            className="embed-home"
                            src="https://player.vimeo.com/video/353403743?autoplay=1" 
                            frameBorder="0" 
                            allow="autoplay; fullscreen" 
                            title="video" 
                            allowFullScreen
                            />
                        }
                    </div>
                </Container>
            </Container2>
        )
    }
}

export default HomePage


// import React, { Component } from "react"
// import "./HomePage.css"
// import {ReactComponent as PlayButton} from "../play-button.svg"

// class HomePage extends Component {
//     state = {
//         isThumbnail: true
//     }

//     thumbnailToVideo = () => {
//         this.setState({
//             isThumbnail: false
//         })
//     }

//     render() {
//         return(
//             <div className="reel2">
//                 <div className="reel">
//                     {this.state.isThumbnail ? 
//                         <div className="thumbnail-reel-container">
//                             <img onClick={this.thumbnailToVideo} className="reel-thumbnail" alt="thumbnail" src="https://live.staticflickr.com/65535/50211469602_89981b86da_k.jpg"></img>
//                             <PlayButton onClick={this.thumbnailToVideo} className="play-button"/>
//                         </div>
//                     :
//                         <iframe 
//                         className="embed-home"
//                         src="https://player.vimeo.com/video/353403743?autoplay=1" 
//                         width="960" 
//                         height="540" 
//                         frameBorder="0" 
//                         allow="autoplay; fullscreen" 
//                         title="video" 
//                         allowFullScreen
//                         />
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default HomePage