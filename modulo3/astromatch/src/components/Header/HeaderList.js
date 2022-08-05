import React from "react"
import { HeaderContainer, ButtonNavegationList, SpanTitulo1List, SpanTitulo2List } from "./styled";
import IconeLista from "../../img/icone-list.png"


function Card (props) {
    return (
        <HeaderContainer>
            <ButtonNavegationList onClick={() => props.changeScreen("start")}>
                <img src={IconeLista} alt="Icone para lista de Matches" />
            </ButtonNavegationList>
            <SpanTitulo1List>astro</SpanTitulo1List><SpanTitulo2List>match</SpanTitulo2List>

        </HeaderContainer>
    )
}

export default Card;