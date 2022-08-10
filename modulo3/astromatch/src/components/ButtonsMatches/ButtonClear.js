import React from "react";
import { ButtonClearContainer, ButtonClearAll, TextButtonAction } from "./styled";
import ButtonClearMatches from "../../img/lixeira.png";


function ButtonClear() {
    return (
        <ButtonClearContainer>
            <ButtonClearAll>
            Clear all list Matches
            </ButtonClearAll>
            <TextButtonAction></TextButtonAction>
        </ButtonClearContainer>
    );
}

export default ButtonClear;