import styled from 'styled-components'

export const Container = styled.div`
    /* width: 80vw; */
`

export const Video = styled.iframe`
    width: 80vw;
    height: calc(80vw / ${props=>props.height});
`

export const VideoThumnail = styled.img`
    position: relative;
    /* width: 100%;
    height: auto; */
    width: 80vw;
    height: calc(80vw / ${props=>props.height});
    max-width: 1150px;
    opacity: ${props=> props.opacity};
    transition: opacity 700ms ease-in-out;
`

export const Image = styled.img`
    opacity: ${props=> props.opacity};
    transition: opacity 700ms ease-in-out;
    padding: 0px 1px 0px 1px;
    width: 26.5vw;
    @media(max-width: 1000px){
        padding: 0px 1px 0px 1px;
        width: 40vw;
    }
    @media(max-width: 750px){
        padding: 0px 1px 0px 1px;
        width: 79.8vw;
    }

`

export const Title = styled.div`
    font-weight: 300;
    display: flex;
    justify-content: center;
    font-size: 24px;
`