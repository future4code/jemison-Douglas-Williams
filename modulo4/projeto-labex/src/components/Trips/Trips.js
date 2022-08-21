import React from "react";
import { Base_url } from "../../constants";
import { useRequestData } from "../../hooks/useRequestData";
import { ListTripSection } from "../../Pages/ListTrips/styled";
import { InfoTrips, LabelTrips, TripContainer } from "./styled";


export function Trips() {
    const [data, isLoading, error] = useRequestData(`${Base_url}trips`)
    
    const listTrips = data && data.trips && data.trips.map((trip, key) => {
        return (
            <ListTripSection key={trip.id}>
                <TripContainer>
                <LabelTrips> Nome:</LabelTrips><InfoTrips>{trip.name}</InfoTrips>
                </TripContainer>
                <TripContainer>
                <LabelTrips> Planeta: </LabelTrips><InfoTrips>{trip.planet}</InfoTrips>

                </TripContainer>
                <TripContainer>
                <LabelTrips> Duração:</LabelTrips><InfoTrips>{trip.durationInDays}</InfoTrips>

                </TripContainer>
                <TripContainer>
                <LabelTrips> Data: </LabelTrips><InfoTrips>{trip.date}</InfoTrips>

                </TripContainer>
                <TripContainer>
                <LabelTrips> Descrição: </LabelTrips><InfoTrips>{trip.description}</InfoTrips>

                </TripContainer>

            </ListTripSection>
        )
    })
    return (
        <div>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && data && data.trips && data.trips.length > 0 && listTrips}
            {!isLoading && data && data.trips && data.trips.length === 0 && <p>Não há nenhuma viagem</p>}
        </div>
    )
}

