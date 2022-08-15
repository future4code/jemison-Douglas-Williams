import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, HomeTitle, HomeButton, HomeSection} from './styled';
import { Container } from "../../GlobalStyled"


function Home() {

  return (
    <Container>
      <HomeTitle>LabeX</HomeTitle>
      <HomeSection>
      <Link to="ListTrip">
      <HomeButton>Ver Lista</HomeButton>
        </Link>

        <Link to="Login">
      <HomeButton>Área Administrativa</HomeButton>
        </Link>
      </HomeSection>
    </Container>
  );
}

export default Home;