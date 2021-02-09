import React from "react"
import {Link} from "react-router-dom"
// import "./Header.css"
import {
    Container,
    Title,
    SubTitle,
    PageLink,
    HeaderRight,
    HeaderContainer,
} from './Header.styles'

const Header = () => {
    return(
        <Container>
            <HeaderContainer>
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