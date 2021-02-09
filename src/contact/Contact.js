import React from "react"
// import "./Contact.css"
import {
    Container,
    ContactLine,
    NoSelect,
} from './Contact.styles'

const Contact = () => {
    return(
        <Container>
            <div>
                <div>
                    <ContactLine>
                        <NoSelect>e:</NoSelect>
                        garethcng@gmail.com
                    </ContactLine>
                </div>
                <div>
                    <NoSelect>ig:</NoSelect> 
                    instagram.com/gareth.ng
                </div>
            </div>
        </Container>
    )
}

export default Contact