import React from 'react';
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <a className="littlecard-container" href={ props.link } target="_blank" rel="noopener noreferrer">
            <div className="container">
                <img src={ props.imagem } alt=""/>
                <div>
                    <p>{ props.texto }</p>
                </div>
            </div>
        </a>
    )
}

export default CardPequeno;