import React from 'react';
import { Container } from '../../GlobalStyled';
import { Title, SectionsButtons, Button } from './styled';
import { Link } from 'react-router-dom';
import { NameTripsAdminHouse } from '../../components/NameTrips/NameTripsAdminHouse';


function AdminHouse() {
  return (
    <Container>
      <Title>Área Administrativa</Title>
      <SectionsButtons>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
        <Link to="/CreateTrip">
          <Button>Criar Viagem</Button>
        </Link>

        <Link to="/login">
        <Button>Sair</Button>
        </Link>
      </SectionsButtons>
        <NameTripsAdminHouse />
    </Container>
  );
}

export default AdminHouse;
