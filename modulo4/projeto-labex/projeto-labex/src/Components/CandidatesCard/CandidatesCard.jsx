import React from "react";
import { CandidatesContainer } from "./styled";

export function CandidatesCard(props) {
    return (
      <CandidatesContainer>
        <div>
          <h5>Nome: </h5>
          <p>{props.name}</p>
        </div>
        <div>
          <h5>Profissão: </h5>
          <p>{props.occupation}</p>
        </div>
        <div>
          <h5>Idade: </h5>
          <p>{props.age}</p>
        </div>
        <div>
          <h5>País: </h5>
          <p>{props.country}</p>
        </div>
        <div>
          <h5>Texto de Candidatura: </h5>
          <p>{props.applicationText}</p>
        </div>
        <div className="button">
            <button onClick={props.onClickApprove}>Aprovar</button>
            <button onClick={props.onClickReprove}>Reprovar</button>
        </div>
      </CandidatesContainer>
    );
}