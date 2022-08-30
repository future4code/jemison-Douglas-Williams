import React from "react";
import { Base_url} from "../../constants";
import { InfoTrips } from "../Trips/styled";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ListTripSection, ButtonDel, Button } from "./styled";
import Lixeira from "../../img/lixeira.png"
import { Container } from "./styled"
import { deletedTrip } from "../../constants/requestDel"


export function NameTripsAdminHouse() {
    useProtectedPage()
    const [data] = useRequestData(`${Base_url}trips`)
    
    const navigate = useNavigate()
    
    const getId = (id) => {
        navigate(`/admin/trips/${id}`)
    }
    
    const toRemoveTrip = (tripId) => {
        if (window.confirm("Deseja remover essa viagem?")) {
            deletedTrip(tripId)
        }
    }

    const listTrips = data && data.trips ? data.trips.map((trip, key) => {
        return (
            <ListTripSection key={trip.id}>
                <Button onClick={()=>getId(trip.id)}>
                    <InfoTrips>{trip.name}</InfoTrips>
                </Button>
                <ButtonDel onClick={()=> toRemoveTrip(trip.id)}>
                    <img src={Lixeira} alt="ícone de lixeira" />
                </ButtonDel>
            </ListTripSection>
        )
    }) : ("Carregando...")




    return (
        <Container>
            {listTrips}
        </Container>
    )
}