import React from "react"
import { HeaderContainer, ButtonNavegationHome, SpanTitulo1Home, SpanTitulo2Home } from "./styled";
import IconeHome from "../../img/icone-home.png"
import { useNavigate } from "react-router-dom";

function HeaderHome () {
    const navigate = useNavigate()

    const goToListMatches = () => {
        navigate("/list")
    }


    return (
        <HeaderContainer>
            <SpanTitulo1Home>astro</SpanTitulo1Home><SpanTitulo2Home>match</SpanTitulo2Home>
            <ButtonNavegationHome onClick={goToListMatches}>
                <img src={IconeHome} alt="Icone para lista de Matches" />
            </ButtonNavegationHome>

        </HeaderContainer>
    )
}

export default HeaderHome;