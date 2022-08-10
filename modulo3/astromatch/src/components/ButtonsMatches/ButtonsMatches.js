import React from "react";
import {ButtonsContainer, ButtonMatch, ButtonNoMatch } from "./styled"
import IconMatch from "../../img/heart.png"
import IconNoMatch from "../../img/x-black.png"
function ButtonsMatches () {
    return (
        <ButtonsContainer>
            <ButtonMatch>
                <img src={IconMatch} alt="Botão de coração para dar um Match" />
            </ButtonMatch>

            <ButtonNoMatch> 
                <img src={IconNoMatch} alt="Botão X branco dentro de um quadrado vermmelho para não dar Match" />
            </ButtonNoMatch>
        </ButtonsContainer>
    )
}

export default ButtonsMatches;