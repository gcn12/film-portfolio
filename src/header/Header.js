import React from "react"
import {Link} from "react-router-dom"
import "./Header.scss"

const Header = () => {
    return(
        <div className="header">
            <div className="logo-and-subtitle">
                <Link className="logo" to="/film-portfolio/">GARETH NG</Link>
                <div className="break"></div>
                <div className="subtitle">Cinematographer</div>
            </div>
            <div className="links">
                <Link className="link" to="/film-portfolio/films">WORK</Link>
                <Link className="link" to="/film-portfolio/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Header