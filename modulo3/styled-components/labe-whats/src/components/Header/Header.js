import React from 'react'
import {HeaderEstilizado,Titulo} from './StyleHeader.js'
import Logo from '../../img/logo.png'




function App() {
    return (
        <HeaderEstilizado>
            <img src={Logo} alt="Logo"/>
            <Titulo>
                LabZap
            </Titulo>
        </HeaderEstilizado>
    );
}

export default App;