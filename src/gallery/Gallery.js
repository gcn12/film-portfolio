import React, { Component } from "react"
import { connect } from "react-redux"
import { next, previous, startIndex} from "../redux/enlargeImageActions"
import content from '../content'
import { ReactComponent as Arrow } from '../Arrow.svg'
import "./Gallery.css"
import {
    ImageContainer,
    ArrowLeft,
    ArrowRight,
    Container,
    Back,
} from './Gallery.styles'

class Gallery extends Component {

    state = {
        urls: [],
        isLoaded: false,
    }
    
    getPhotos = () => {
        if (this.props.urls.length===0) {
            if(content[this.props.match.params.workPage]){
                // this.props.dispatch(startIndex(0))
                let setID=content[this.props.match.params.workPage].album
                fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3e8a789d6f4ae2feba4c606393db4c70&photoset_id=${setID}&user_id=96067761%40N02&format=json&nojsoncallback=1`)
                .then(response=>response.json())
                .then(data=>{
                    const urlArray = []
                    data.photoset.photo.map(photo=>{
                        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=3e8a789d6f4ae2feba4c606393db4c70&photo_id=${photo.id}&format=json&nojsoncallback=1`)
                        .then(response=>response.json())
                        .then(data=>{
                        urlArray.push(data.sizes.size[12].source)
                        this.props.getURLSLarge(urlArray)
                        })
                        return(photo.id)
                    })
                })
            }
        }
    }

    nextImage = () => {
        if(this.props.index<this.props.urls.length-1){
            this.props.dispatch(next())
        }else if (this.props.index===this.props.urls.length-1){
            this.props.dispatch(startIndex(0))
        }
    }

    previousImage = () => {
        if(this.props.index>0){
            this.props.dispatch(previous())
        }else if (this.props.index===0){
            this.props.dispatch(startIndex(this.props.urls.length-1))
        }
    }

    componentDidMount() {
        this.getPhotos()
    }

    render(){
        return(
            <Container opacity={this.state.isLoaded ? 1 : 0}>
                <Back onClick={this.props.history.goBack}>Back</Back>
                    <ImageContainer>
                        <ArrowLeft>
                            <Arrow onClick={this.previousImage} />
                        </ArrowLeft>
                        <img onLoad={()=>this.setState({isLoaded: true})} className="enlarged-image" alt="large display" src={this.props.urls[this.props.index]}></img>
                        <ArrowRight>
                            <Arrow onClick={this.nextImage} />
                        </ArrowRight>
                    </ImageContainer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    index: state.enlargeImage.index
})

export default connect(mapStateToProps)(Gallery)