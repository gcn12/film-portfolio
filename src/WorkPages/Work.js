import React, { Component } from "react"
import content from "../content"
import "./Work.scss"

class Work extends Component {

    state={
        images: [],
    }

    componentDidMount(){
        this.props.getPhotos()
    }

    render(){
        const urlArray = []
        for (const item of content){
            urlArray.push(item.url)
        }
        const index = urlArray.indexOf(this.props.url)
        return(
            <div>
                <br></br>
                <div className="work-title">{content[index].header}</div>
                {
                    content[index].video.length>0
                    ? 
                    <iframe 
                    className="embed-home"
                    src={content[index].video} 
                    width="640" 
                    height="272" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    title="video" 
                    allowFullScreen
                    />
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