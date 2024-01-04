import { useState } from 'react';
import './Campotexto.css';


// let valor = '';


const CampoTexto = (props) => {
    
    const AoDigitado = (evento) =>{
       props.Aoalterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={AoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;