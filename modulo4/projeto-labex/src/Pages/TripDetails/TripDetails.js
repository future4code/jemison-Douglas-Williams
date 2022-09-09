import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Section } from '../../GlobalStyled';
import { Button, ItemsList, List } from "./styled";
import {useProtectedPage} from "../../hooks/useProtectedPage"
import {useRequestData} from "../../hooks/useRequestData"
import { FcApproval } from "react-icons/fc";
import { CgCloseO } from "react-icons/cg";
import {decideCandidate} from "../../constants/requestPut"


function TripDetails() {
  useProtectedPage()

  const id = useParams()

  const [data] = useRequestData(`trip/${id.id}`, {})

  const listCandidates = data && data.trip ? data.trip.candidates.map((candidate) =>{
    return(
        <List  key={candidate.id}>
             <p><span>Nome:</span>{candidate.name}</p>
             <p><span>Idade:</span>{candidate.age}</p>
             <p><span>País:</span>{candidate.country}</p>
             <p><span>Profissão:</span>{candidate.profession}</p>
             <p><span>Candidatura:</span>{candidate.applicationText}</p>
                <button
                    onClick={() => decide(candidate.id,true)}> 
                    < FcApproval size={20}/>
                    Aprovar
                </button>
                <button 
                    onClick={() => decide(candidate.id,false)}>
                    <CgCloseO size={20} />
                    Reprovar
                </button>
        </List>
    )
}):  ("Não há candidatos pendentes");

const decide = (candidateId, booleano) => {  
    decideCandidate(id.id, candidateId, booleano)
}

const approvedList = data && data.trip ? data.trip.approved.map((candidate) =>{
    return(
        <List  key={candidate.id}>
             <p><span>Nome:</span>{candidate.name}</p>
        </List>
    )
}) : ("Não há candidatos aprovados");



  

  return (
    <Container>
      <h1></h1>

      <Link to="/AdminHouse">
        <Button> Voltar </Button>
      </Link>

      <h1>Candidatos Pendentes</h1>

      {listCandidates}

      <h1>Candidatos Aprovados</h1>
      
      {approvedList}

    </Container>
  );
}

export default TripDetails;