import React from "react";
import { AdminListContainer } from "./style";

export function AdminList(props) {


    return (
      <AdminListContainer>
        <button class="button" onClick={props.onClickDetails}>
          <p>{props.name}</p>
        </button>
          <button onClick={props.onClickDelete}>X</button>
      </AdminListContainer>
    );
    
}