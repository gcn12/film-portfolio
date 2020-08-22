import React from "react"
import { connect } from "react-redux"
import { next, previous, startIndex} from "../redux/enlargeImageActions"
import "./Gallery.scss"

const Gallery = ({urls, index, dispatch, history}) => {
    
    const nextImage = () => {
        if(index<urls.length-1){
            dispatch(next())
        }else if (index===urls.length-1){
            dispatch(startIndex(0))
        }
    }

    const previousImage = () => {
        if(index>0){
            dispatch(previous())
        }else if (index===0){
            dispatch(startIndex(urls.length-1))
        }
    }
    return(
        <div>
            <div className="back" onClick={history.goBack}>Back</div>
            <div className="enlarged-container">
                <div className="nav-button" onClick={previousImage}>{"<"}</div>
                <img className="enlarged-image" alt="large display" src={urls[index]}></img>
                <div className="nav-button" onClick={nextImage}>{">"}</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    index: state.enlargeImage.index
})

export default connect(mapStateToProps)(Gallery)