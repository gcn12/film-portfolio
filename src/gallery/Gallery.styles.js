import styled from 'styled-components'

export const Back = styled.div`
    cursor: pointer;
`

export const Container = styled.div`
    position: relative;
    min-height: calc(80vw / ${props=>props.isSixteenNine} + 90px);
`

export const Container2 = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.opacity};
    transition: opacity 300ms ease-in-out;
`

export const ArrowLeft = styled.div`
    opacity: 0;
    transition: opacity 400ms ease-in-out;
    position: absolute;
    left: 2.5%;
    top: 50%;
    transform: translate(0%, -50%) rotate(180deg) scale(1.5);
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    padding: 10px 0;
    @media(max-width: 870px) {
        opacity: 1;
    }
`

export const ArrowRight = styled.div`
    opacity: 0;
    transition: opacity 400ms ease-in-out;
    position: absolute;
    right: 2.5%;
    top: 50%;
    transform: translate(0%, -50%) scale(1.5);
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    padding: 10px 0;
    @media(max-width: 870px) {
        opacity: 1;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    &:hover {
        ${ArrowLeft} {
            opacity: 1;
        }
        ${ArrowRight} {
            opacity: 1;
        }
    }
`