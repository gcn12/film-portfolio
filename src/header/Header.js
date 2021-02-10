import React, { useState } from "react"
import { Link } from "react-router-dom"
// import "./Header.css"
import {
    Container,
    Title,
    SubTitle,
    PageLink,
    HeaderRight,
    HeaderContainer,
    Navigation,
    MenuDropdown,
    MenuItem,
} from './Header.styles'

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)

    return(
        <Container>
            <HeaderContainer>
                <MenuDropdown height={showNavigation ? '100px' : '0px'}>
                    <Link onClick={()=>setShowNavigation(false)} to="/films" style={{textDecoration: 'none'}}>
                        <MenuItem>Work</MenuItem>
                    </Link>
                    <div style={{marginTop: '14px'}}></div>
                    <Link onClick={()=>setShowNavigation(false)} to="/contact" style={{textDecoration: 'none'}}>
                        <MenuItem>Contact</MenuItem>
                    </Link>
                </MenuDropdown>
                <Navigation onClick={()=>setShowNavigation(!showNavigation)}>Navigation</Navigation>
                <Link to="/" style={{textDecoration: 'none'}}><Title>GARETH NG</Title></Link>
                <SubTitle mediaQuery='min-width: 870px'>Cinematographer</SubTitle>
                <HeaderRight>
                    <Link to="/films" style={{textDecoration: 'none'}}><PageLink>WORK</PageLink></Link>
                    <div style={{marginLeft: '20px'}}></div>
                    <Link to="/contact" style={{textDecoration: 'none'}}><PageLink>CONTACT</PageLink></Link>
                </HeaderRight>
            </HeaderContainer>
            <SubTitle mediaQuery='max-width: 870px'>Cinematographer</SubTitle>
        </Container>
    )
}

export default Header