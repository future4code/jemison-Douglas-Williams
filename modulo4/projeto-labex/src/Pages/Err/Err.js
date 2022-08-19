import React from 'react';
import { Container } from '../../GlobalStyled';
import { Trips } from "../../components/Trips/Trips"

function Erro() {
  return (
    <Container>
        <h1>Not Found 404</h1>
        <Trips />
    </Container>
  );
}

export default Erro;