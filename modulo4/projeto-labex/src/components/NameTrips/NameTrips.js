import React from "react";
import { Base_url } from "../../constants";
import { InfoTrips } from "../Trips/styled";
import { ContainerSelect, OptionNameTrip } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";

export function NameTrips() {
    const [data] = useRequestData(`${Base_url}trips`)


    const listTrips = data && data.trips && data.trips.map((trip, key) => {
        return (
            <OptionNameTrip key={trip.id}>
                <InfoTrips>{trip.name}</InfoTrips>
            </OptionNameTrip>
        )
    })

    return (
        <ContainerSelect>
            <OptionNameTrip>Selecione uma viagem</OptionNameTrip>
            {listTrips}
        </ContainerSelect>
    )
}