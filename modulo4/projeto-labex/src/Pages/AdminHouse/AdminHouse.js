import React, { useState } from 'react';
import { Container } from '../../GlobalStyled';
import { Title, SectionsButtons, Button } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { NameTripsAdminHouse } from '../../components/NameTrips/NameTripsAdminHouse';
import { Base_url, headers } from "../../constants/index"
import axios from 'axios'
import {useProtectedPage} from "../../hooks/useProtectedPage"

function AdminHouse() {
  useProtectedPage()

  const navigate = useNavigate()



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
