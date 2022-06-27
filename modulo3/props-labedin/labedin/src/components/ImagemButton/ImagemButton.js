import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <a className="image-button-container" href={ props.link }>
            <div>
                <p>{ props.texto }</p>
                <img src={ props.imagem } alt="Seta apontando para baixo"/>
            </div>
        </a>
    )
}

export default ImagemButton;