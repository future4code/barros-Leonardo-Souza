import React from 'react';
import { CardContainer } from './style';

function Card(props) {


    return (
        <CardContainer>
        <div>
            <h5>Nome: </h5>
            <p>{props.name}</p>
        </div>
        <div>
            <h5>Descrição: </h5>
            <p>{props.description}</p>
        </div>
        <div>
            <h5>Planeta: </h5>
            <p>{props.planet}</p>
        </div>
        <div>
            <h5>Duração em dias: </h5>
            <p>{props.days}</p>
        </div>
        <div>
            <h5>Data: </h5>
            <p>{props.date}</p>
        </div>
    </CardContainer>
    )

    
}

export default Card