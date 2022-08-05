import React from "react"
import { HeaderContainer, ButtonNavegationHome, SpanTitulo1Home, SpanTitulo2Home } from "./styled";
import IconeHome from "../../img/icone-home.png"


function Card (props) {
    return (
        <HeaderContainer>
            <SpanTitulo1Home>astro</SpanTitulo1Home><SpanTitulo2Home>match</SpanTitulo2Home>
            <ButtonNavegationHome onClick={() => props.changeScreen("list")}>
                <img src={IconeHome} alt="Icone para lista de Matches" />
            </ButtonNavegationHome>

        </HeaderContainer>
    )
}

export default Card;