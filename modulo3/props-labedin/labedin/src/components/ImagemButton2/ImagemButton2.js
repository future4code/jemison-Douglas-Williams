import React from 'react';
import './ImagemButton2.css'

function ImagemButton2(props) {
    return (
        <a className="image-button-container2" href={ props.link } target="_blank" rel="noopener noreferrer">
            <div>
                <img src={ props.imagem } alt="Logo rede social Instagram ou Facebook"/>
                <p>{ props.texto }</p>
            </div>
        </a>

    )
}

export default ImagemButton2;