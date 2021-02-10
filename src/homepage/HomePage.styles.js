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
`

export const Container2 = styled.div`
    /* @media(max-height: 500px){ */
        min-height: calc(80vw / 2.35 + 200px);
        position: relative;
    /* } */
`

export const ThumbnailContainer = styled.div`
    position: relative;
`

export const Thumbnail = styled.img`
    cursor: pointer;
    width: 80vw;
    height: calc(80vw / 2.35);
`

export const PlayButtonStyles = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: 870px) {
        transform: scale(.9) translate(-50%, -50%);
    }
`