import React, { Component } from "react"
import content from "../content"
import "./Work.scss"
import {ReactComponent as PlayButton } from "../play-button.svg"

class Work extends Component {

    state={
        images: [],
        thumbnail: true,
    }

    componentDidMount(){
        this.props.getPhotos()
    }

    thumbnailToVideo = () => {
        this.setState({
            thumbnail: false
        })
    }

    render(){
        const urlArray = []
        for (const item of content){
            urlArray.push(item.url)
        }
        const index = urlArray.indexOf(this.props.url)
        return(
            <div className="work">
                <br></br>
                <div className="work-title">{content[index].header}</div>
                {
                    content[index].video.length>0
                    ? 
                    (this.state.thumbnail ? 
                        // <div className="thumbnail-container">
                        //     <div className="container">
                        //         <PlayButton className="play-button"/>
                        //         <div className="text-test">text</div>
                        //         <img className="thumbnail-work" onClick={this.thumbnailToVideo} key={index} alt="still" src={content[index].thumbnail}></img>
                        //     </div>
                        // </div>
                        <div className="thumbnail-container">
                            {/* <div className="container"> */}
                                <img className="thumbnail-work" onClick={this.thumbnailToVideo} key={index} alt="still" src={content[index].thumbnail}></img>
                                <PlayButton className="play-button" onClick={this.thumbnailToVideo} />
                                {/* <div className="text-test">text</div> */}
                            {/* </div> */}
                        </div>
                        :
                        <div className={content[index].sixteenNine ? "work16" : "work235"}>
                        <iframe 
                        className="embed-work"
                        src={`https://player.vimeo.com/video/${content[index].video}?autoplay=1`} 
                        width="960" 
                        height="540" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        title="video" 
                        allowFullScreen
                        />
                    </div>
                    )
                    :
                    <div></div>
                }
                <br></br>
                <div className="stills">
                {
                this.props.urls.map((image, index)=> {
                    return(
                        <img style={{animation: `fadeInAnimation ease ${Math.random()*2+1}s` }} className="still" key={index} alt="still" src={image}></img>
                        // <img className="still" key={index} style={{height: "100px"}} alt="still" src={image}></img>
                    )
                })
                }   
                </div>
            </div>
        )
    }
}

export default Work