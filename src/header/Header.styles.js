import styled from 'styled-components'

export const Container = styled.div`
    @media(max-width: 870px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 14px 10% 0 10%;
    @media(max-width: 870px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

export const Title = styled.div`
    font-size: 48px;
    text-decoration: none;
    color: #242424;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
`

export const SubTitle = styled.div`
    font-size: 24px;
    text-decoration: none;
    color: #242424;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    margin: 0 10%;
    @media(${props=>props.mediaQuery}) {
        display: none;
        visibility: hidden;
    }
    @media(max-width: 870px) {
        margin-bottom: 24px;
    }
`

export const PageLink = styled.div`
    font-size: 30px;
    text-decoration: none;
    color: #242424;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    display: inline-block;
`

export const HeaderRight = styled.div`
    display: flex;
    @media(max-width: 870px) {
        display: none;
        visibility: hidden;
    }
`   

export const MenuDropdown = styled.div`
    height: ${props=>props.height};
    transition: height 230ms ease-in-out;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(min-width: 870px) {
        display: none;
        visibility: hidden;
    }
`

export const MenuItem = styled.div`
    font-size: 24px;
    cursor: pointer;
    font-weight: 300;
    color: #242424;
`

export const Navigation = styled.div`
    cursor: pointer;
    margin: 6px 0 20px 0;
    font-size: 18px;
    font-weight: 300;
    @media(min-width: 870px) {
        display: none;
        visibility: hidden;
    }
`

