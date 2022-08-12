import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContainer, HomeTitle, HomeButton, HomeSection} from './styled';



function Home() {
  const navigate = useNavigate()

    const goToListTrips = () => {
        navigate("/ListTrip")
    }

    const goToAdminHome = () => {
      navigate("/AdminHouse")
  }
  return (
    <HomeContainer>
      <HomeTitle>LabeX</HomeTitle>
      <HomeSection>
        <HomeButton onClick={goToListTrips}>Ver Lista</HomeButton>
        <HomeButton onClick={goToAdminHome}>Área Administrativa</HomeButton>
      </HomeSection>
    </HomeContainer>
  );
}

export default Home;