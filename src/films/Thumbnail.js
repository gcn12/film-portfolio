import React, { Component } from "react"
import {Link} from "react-router-dom"
import "./Thumbnail.css"
import {
    Image,
    Title,
    ImageContainer,
} from './Thumbnail.styles'

class Thumbnail extends Component {

    state = {
        isImageLoaded: false,
        fadeIn: 0
    }

    componentDidMount() {
        this.props.clearURLs()
        const fadeNumber = Math.round(Math.random()*400) + 400
        this.setState({
            fadeIn: fadeNumber,
        })
    }
    render() {
        return(
            <Link to={`/${this.props.work.url}`}>
                <ImageContainer>
                    <Image fadeIn={this.state.fadeIn} opacity={this.state.isImageLoaded ? 1 : 0} onLoad={()=>this.setState({isImageLoaded: true})}  alt='' src={this.props.work.thumbnail} />
                    <Title>{this.props.work.displayTitle.toUpperCase()}</Title>
                </ImageContainer>
            </Link>
        )
    }
}


export default Thumbnail