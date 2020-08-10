import React, { Component } from "react"
import content from "../content"

class Work extends Component {

    state={
        images: [],
    }


    test = () => {
        console.log(this.state.images)
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
                {
                this.props.urls.map((image, index)=> {
                    return(
                        <div key={index}>
                            <img style={{height: "500px"}} alt="still" src={image}></img>
                        </div>
                    )
                })
                }   
            </div>
        )
    }
}

export default Work