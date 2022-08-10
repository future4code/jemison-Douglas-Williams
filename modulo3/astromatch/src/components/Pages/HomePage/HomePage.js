import React from "react"
import Card from "../../Card/Card"
import HeaderHome from "../../Header/HeaderHome"
import { Container } from "../../../GlobalStyle"
import ButtonsMatches from "../../ButtonsMatches/ButtonsMatches"


function HomePage() {

    
    return (
        <Container>
            <HeaderHome />
            <Card />
            <ButtonsMatches />
        </Container>
    )
}

export default HomePage;