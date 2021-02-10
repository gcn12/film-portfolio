import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Container2 = styled.div`
    min-height: 200px;
    height: 80vh;
    position: relative;
`

export const ContactLine = styled.div`
    white-space: nowrap;
    font-weight: 300;
    display: flex;
`

export const NoSelect = styled.div`
    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;      
    user-select: none;
    padding-right: 5px;
`