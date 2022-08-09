import React from 'react'
import { Container } from "../../../GlobalStyle";
import ButtonClear from '../../ButtonsMatches/ButtonClear';
import HeaderList from "../../Header/HeaderList"

function ListMatches () {
    return (
        <Container>
            <HeaderList />
            <ButtonClear />
        </Container>
    )
}

export default ListMatches;