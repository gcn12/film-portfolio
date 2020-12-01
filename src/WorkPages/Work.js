import React, { Component } from "react"
import content from "../content"
import "./Work.scss"
import {ReactComponent as PlayButton } from "../play-button.svg"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { startIndex } from "../redux/enlargeImageActions"

class Work extends Component {
    state={
        thumbnail: true,
        urls: [],
        urlsLarge: [],
    }

    getPhotos = () => {
        if(content[this.props.match.params.workPage]){
          let setID=content[this.props.match.params.workPage].album
          fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3e8a789d6f4ae2feba4c606393db4c70&photoset_id=${setID}&user_id=96067761%40N02&format=json&nojsoncallback=1`)
          .then(response=>response.json())
          .then(data=>{
            const urlArray = []
            const urlArrayLarge = []
            data.photoset.photo.map(photo=>{
              fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=3e8a789d6f4ae2feba4c606393db4c70&photo_id=${photo.id}&format=json&nojsoncallback=1`)
              .then(response=>response.json())
              .then(data=>{
                urlArray.push(data.sizes.size[7].source)
                urlArrayLarge.push(data.sizes.size[12].source)
                this.setState({
                  urls: urlArray,
                })
                this.props.getURLLarge(urlArrayLarge)
              })
              return(photo.id)
            })
          })
        }
    }

    componentDidMount(){
        this.getPhotos()
        window.scrollTo({top: 0})
    }

    thumbnailToVideo = () => {
        this.setState({
            thumbnail: false
        })
    }

    render(){
        return(
            <div className="work">
                <br></br>
                <div className="work-title">{content[this.props.match.params.workPage].header}</div>
                <br></br>
                {
                    content[this.props.match.params.workPage].video.length>0
                    ? 
                    (this.state.thumbnail ? 
                        <div className="thumbnail-container fade-in-work">
                            <img className="thumbnail-work" onClick={this.thumbnailToVideo} alt="still" src={content[this.props.match.params.workPage].thumbnail}></img>
                            <PlayButton className="play-button" onClick={this.thumbnailToVideo} />
                        </div>
                        :
                        <div className={content[this.props.match.params.workPage].sixteenNine ? "work16" : "work235"}>
                        {content[this.props.match.params.workPage].videoHost==='vimeo' 
                        ? 
                        <iframe 
                        className="embed-work"
                        src={`https://player.vimeo.com/video/${content[this.props.match.params.workPage].video}?autoplay=1`} 
                        width="960" 
                        height="540" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        title="video" 
                        allowFullScreen
                        />
                        :
                        <iframe title='video' width="560" height="315" src={content[this.props.match.params.workPage].video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        }
                        </div>
                    )
                    :
                    <div></div>
                }
                <br></br>
                <div>
                    <div className="stills">
                    {
                        this.state.urls.map((image, index)=> {
                            return(
                                <Link onClick={()=>this.props.dispatch(startIndex(index))} key={index} to={`${this.props.match.params.workPage}/gallery`}>
                                    <img className="still fade-in-work" id={index} key={index} alt="still" src={image}></img>
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