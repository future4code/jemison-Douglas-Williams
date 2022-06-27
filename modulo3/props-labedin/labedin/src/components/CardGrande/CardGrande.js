import React from 'react';
import './CardGrande.css';

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } alt="Foto de Douglas Williams"/>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <p>{ props.subDescricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;