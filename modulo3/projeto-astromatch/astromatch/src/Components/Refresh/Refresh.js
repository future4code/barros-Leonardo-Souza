import React from "react";
import { RefreshPage } from "./style";

export function Refresh(props) {
    return (
    <RefreshPage>
    <h2>Os perfis acabaram, clique no botão abaixo para carregar novamente</h2>
    <button onClick={props.onClickRefresh}>Clique aqui</button>
    </RefreshPage>
    )

}