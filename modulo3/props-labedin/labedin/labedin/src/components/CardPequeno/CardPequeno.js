import React from "react";
import './CardPequeno.css'

function CardPequeno(props){
    return (
    <div className = 'container'>
        <div className = 'container-img'>
            <img src= {props.imagem} />
        </div>
        <h3>{props.type}</h3>
        <p>{props.info}</p>
    </div>
    )
    
}

export default CardPequeno;