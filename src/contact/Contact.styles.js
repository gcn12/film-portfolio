import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ContactLine = styled.div`
    white-space: nowrap;
`

export const NoSelect = styled.div`
    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;      
    user-select: none;
`