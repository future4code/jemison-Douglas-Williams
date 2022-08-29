import React, {useState} from "react";
import { Base_url, headers } from "../../constants";
import { InfoTrips } from "../Trips/styled";
import { Link, useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { ListTripSection, ButtonDel, Button } from "./styled";
import Lixeira from "../../img/lixeira.png"
import { Container } from "./styled"
import axios from 'axios';


export function NameTripsAdminHouse() {
    const {data, getTripsData} = useRequestData("trips", {})


    const navigate = useNavigate()
    const getId = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    
    const deletedTrip = (e, id, getTripsData) => {
        e.preventDefault()

        axios
    .delete(`${Base_url}/trips/${id}`,headers)
    .then(() => {
        alert("Viagem removida com sucesso!")
        getTripsData()
    })
    .catch((err) => {
        alert(err.message)
    })
    }

    const toRemoveTrip = (id) => {
        if (window.confirm("Tem certeza que deseja remover essa viagem?")) {
            deletedTrip(id, getTripsData)
        }
    }
    

    const listTrips = data && data.trips && data.trips.map((trip, key, id) => {
        return (
            <ListTripSection key={trip.id}>
                <Link to={`/admin/trips/${trip.id}`} 
                // onClick={() => getId(trip.id)}
                >
                    <InfoTrips>{trip.name}</InfoTrips>
                </Link>
                <ButtonDel
                // value={trip.id}
                // onClick={() => toRemoveTrip(trip.id)}
                >
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