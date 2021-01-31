import React from "react"
import "./Contact.css"

const Contact = () => {
    return(
        <div style={{position: 'relative'}}>
            <div className="contact">
                <span className="testcontact">
                <div className="email">
                    <div className="no-select">e:</div>
                    garethcng@gmail.com
                </div>
                <div className="instagram">
                    <div className="no-select">ig:</div> 
                    instagram.com/gareth.ng
                </div>
                </span>
            </div>
        </div>
    )
}

export default Contact