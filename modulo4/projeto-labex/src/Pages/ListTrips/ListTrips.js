import React, { useEffect, useState } from 'react';
import { ListTripSection, ListTripsSectionButtons, ListTripsButton, ListTripsTitle } from './styled';
import { Base_url } from '../../constants/index';
import { useRequestData } from '../../hooks/useRequestData';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {Container} from "../../GlobalStyled"

function ListTrips() {
  const [trips, setTrips] = useState([]);


  const listTrips = trips.map((trip) => {
    return (
      <ListTripSection key={trips.id}>
        <p>{trips.id.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </ListTripSection>
    )

  })


  const getListTrips = () => {
    axios.get(`${Base_url}trips`)
      .then((response) => { setTrips(response.data.result.trips) })
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    getListTrips()
  }, [])

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
    

        { listTrips }


      

    </Container>
  );
}

export default ListTrips;