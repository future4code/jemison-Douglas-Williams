import React from "react";
import {ButtonsContainer, ButtonMatch, ButtonNoMatch } from "./styled"
import ButtonMatch from "../../img/heart.png"
import ButtonNoMatch from "../../img/X.png"

function ButtonsMatches () {
    return (
        <ButtonsContainer>
            <ButtonMatch>
                <img src="ButtonMatch" alt="Botão de coração para dar um Match" />
            </ButtonMatch>
            <ButtonNoMatch>
                <img src="ButtonNoMatch" alt="Botão X branco dentro de um quadrado vermmelho para não dar Match" />
            </ButtonNoMatch>
        </ButtonsContainer>
    )
}

export default ButtonsMatches;