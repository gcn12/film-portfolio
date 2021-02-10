import styled from 'styled-components'

export const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0;
    @media(max-width: 870px) {
        opacity: 1;
    }
`

export const Image = styled.img`
    opacity: ${props=>props.opacity};
    transition: ${props=>`opacity ${props.fadeIn}ms ease-in-out`};
    width: 100%;
    @media(min-width: 870px) {
        padding: 0px 1px 0px 1px;
        width: 40vw;
    }
    filter: brightness(1);
`

export const ImageContainer = styled.div`
    position: relative;
    margin: 0 2px 4px 2px;
    @media(max-width: 870px) {
        margin: 0;
    }
    &:hover{
        ${Title} {
            opacity: 1;
            transition: opacity 400ms ease-in-out;
        }
        ${Image} {
            filter: brightness(.7);
            transition: filter 300ms ease-in-out;
        }
    }
`