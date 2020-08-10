import React from "react"
import {Link} from "react-router-dom"
import "./Header.scss"

const HomePage = () => {
    return(
        <div className="header">
            <Link className="logo" to="/">Gareth Ng</Link>
            <div className="links">
                <Link className="link" to="/films">Work</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default HomePage