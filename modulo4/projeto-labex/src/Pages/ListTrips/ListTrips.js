import React from 'react';
import { ListTripsSectionButtons, ListTripsButton, ListTripsTitle } from './styled';
import { Link } from 'react-router-dom';
import { Container } from "../../GlobalStyled"
import { Trips } from "../../components/Trips/Trips"



function ListTrips() {
  

  return (
    <Container>
      <ListTripsSectionButtons>
        <Link to="/">
          <ListTripsButton>Voltar</ListTripsButton>
        </Link>
        <Link to="/ApplicationForm">
          <ListTripsButton>Inscrever-se</ListTripsButton>
        </Link>
      </ListTripsSectionButtons>
      <ListTripsTitle>Lista de Viagens</ListTripsTitle>
      
      <Trips />
      

    </Container>
  );
}

export default ListTrips;