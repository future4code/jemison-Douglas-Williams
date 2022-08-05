import React from "react"
import Card from "../../Card/Card"
import HeaderHome from "../../Header/HeaderHome"
import { Container } from "../../../GlobalStyle"

function HomePage() {
    return (
        <Container>
            <HeaderHome />
            <Card />
        </Container>
    )
}

export default HomePage;