import styled from 'styled-components'

export const Video = styled.iframe`
    width: 80vw;
    height: calc(80vw / 2.35);
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* width: 100%;
    height: 80%; */
`

export const ThumbnailContainer = styled.div`
    position: relative;
`

export const Thumbnail = styled.img`
    cursor: pointer;
    /* height: 409px;
    width: 960px; */
    width: 80vw;
    height: calc(80vw / 2.35);
`

export const PlayButtonStyles = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`