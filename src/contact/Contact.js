import React from "react"
// import "./Contact.css"
import {
    Container,
    ContactLine,
    Container2,
    NoSelect,
} from './Contact.styles'

const Contact = () => {
    return(
        <Container2>
            <Container>
                <div>
                    <ContactLine>
                        <NoSelect>e:</NoSelect>
                        garethcng@gmail.com
                    </ContactLine>
                    <div style={{marginBottom: '5px'}}></div>
                    <ContactLine>
                        <NoSelect>ig:</NoSelect> 
                        instagram.com/gareth.ng
                    </ContactLine>
                </div>
            </Container>
        </Container2>
    )
}

export default Contact