import React from 'react';
import { ListTripsContainer, ListTripSection, ListTripsSectionButtons, ListTripsButton, ListTripsTitle } from './styled';
import {Base_url, serviceHeaders} from '../../constants/index';
import {useRequestData} from '../../hooks/useRequestData';



function ListTrips() {
  const [trips, isLoading, isError ] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips`, serviceHeaders);
  
  const listTrips = trips && trips.map((trip) => {
    return <div key={trip.id}>
              <p>{trip.name}</p>
              <p>{trip.description}</p>
              <p>{trip.planet}</p>
              <p>{trip.durationInDays}</p>
              <p>{trip.date}</p>
            </div>
          
        })

    
  
  return (
    <ListTripsContainer>
      <ListTripsSectionButtons>
        <ListTripsButton>Voltar</ListTripsButton>
        <ListTripsButton>Inscrever-se</ListTripsButton>
      </ListTripsSectionButtons>
      <ListTripsTitle>Lista de Viagens</ListTripsTitle>
      <ListTripSection>
        {isLoading ? <p>Carregando...</p> : listTrips}
        {isError ? <p>Erro ao carregar</p> : null}  

      </ListTripSection>

    </ListTripsContainer>
  );
}

export default ListTrips;