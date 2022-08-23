import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from '../../GlobalStyled';
import { Button, ItemsList, List } from "./styled";

function TripDetails() {
  return (
    <Container>
      <h1>Nome da Viagem</h1>

      <Link to="/AdminHouse">
        <Button> Voltar </Button>
      </Link>

      <h1>Candidatos Pendentes</h1>
      <p>Não à candidatos pendentes</p>
      <h1>Candidatos Aprovados</h1>
      <List>
      <p>Não à candidatos aprovados</p>

      </List>

    </Container>
  );
}

export default TripDetails;