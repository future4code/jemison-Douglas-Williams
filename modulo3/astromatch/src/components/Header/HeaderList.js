import React from "react"
import { HeaderContainer, ButtonNavegationList, SpanTitulo1List, SpanTitulo2List } from "./styled";
import IconeLista from "../../img/icone-list.png"
import { useNavigate } from "react-router-dom";


function HeaderList () {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }
    return (
        <HeaderContainer>
            <ButtonNavegationList onClick={goToHomePage}>
                <img src={IconeLista} alt="Icone para lista de Matches" />
            </ButtonNavegationList>
            <SpanTitulo1List>astro</SpanTitulo1List><SpanTitulo2List>match</SpanTitulo2List>

        </HeaderContainer>
    )
}

export default HeaderList;