import React from "react";
import { Base_url } from "../../constants";
import { InfoTrips } from "../Trips/styled";
import { Link } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { ListTripSection, ButtonDel } from "./styled";
import Lixeira from "../../img/lixeira.png"
import { Container } from "./styled"

export function NameTripsAdminHouse() {
    const [data] = useRequestData(`${Base_url}trips`)


    const listTrips = data && data.trips && data.trips.map((trip, key) => {
        return (
            <ListTripSection key={trip.id}>
                <Link 
                className="link"
                to="">
                    <InfoTrips>{trip.name}</InfoTrips>
                </Link>
                <ButtonDel>
                    <img src={Lixeira} alt="ícone de lixeira" />
                </ButtonDel>
            </ListTripSection>
        )
    })

    return (
        <Container>
            {listTrips}
        </Container>
    )
}