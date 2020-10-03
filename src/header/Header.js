import React from "react"
import {Link} from "react-router-dom"
import "./Header.scss"

const Header = () => {
    return(
        <div className="header">
            <div className="logo-and-subtitle">
                <Link className="logo" to="/">GARETH NG</Link>
                <div className="break"></div>
                <div className="subtitle">Cinematographer</div>
            </div>
            <div className="links">
                <Link className="link" to="/films"><span>WORK</span></Link>
                <Link className="link" to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Header