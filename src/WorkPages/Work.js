import React, { Component } from "react"
import content from "../content"
import "./Work.scss"
import {ReactComponent as PlayButton } from "../play-button.svg"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { startIndex } from "../redux/enlargeImageActions"

class Work extends Component {

    state={
        images: [],
        thumbnail: true,
        imageURLSs: []
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
        // const urlArray = []
        // for (const item of content){
        //     urlArray.push(item.url)
        // }
        // const index = urlArray.indexOf(this.props.url)
        return(
            <div className="work">
                <br></br>
                <div className="work-title">{content[this.props.url].header}</div>
                <br></br>
                {
                    content[this.props.url].video.length>0
                    ? 
                    (this.state.thumbnail ? 
                        <div className="thumbnail-container">
                            <img className="thumbnail-work" onClick={this.thumbnailToVideo} alt="still" src={content[this.props.url].thumbnail}></img>
                            <PlayButton className="play-button" onClick={this.thumbnailToVideo} />
                        </div>
                        :
                        <div className={content[this.props.url].sixteenNine ? "work16" : "work235"}>
                        <iframe 
                        className="embed-work"
                        src={`https://player.vimeo.com/video/${content[this.props.url].video}?autoplay=1`} 
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
                <div className="test">
                    <div className="stills">
                    {
                        this.props.urls.map((image, index)=> {
                            return(
                                // <img style={{animation: `fadeInAnimation ease ${(Math.random()*2)+1}s` }} className="still" key={index} alt="still" src={image}></img>
                                <Link onClick={()=>this.props.dispatch(startIndex(index))} key={index} to={`${this.props.match.path}/gallery`}>
                                    <img className="still" id={index} key={index} alt="still" src={image}></img>
                                </Link>
                                )
                            })
                        }   
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    index: state.enlargeImage.index
})

export default connect(mapStateToProps)(Work)