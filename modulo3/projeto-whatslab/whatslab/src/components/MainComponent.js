import React from "react";
import { GreenComponent, MiddleWhiteComponent } from "../style.js";
import { MainContainer } from "../style.js";

export default function MainContent() {
  return (
    <MainContainer>
      <GreenComponent></GreenComponent>
      <MiddleWhiteComponent>

        <form>
          <div>
            <label for="remetente">Remetente:</label>
            <input type="text" id="remetente" placeholder="Digite seu nome"></input>
            <label for="msg">Msg:</label>
            <input type="text" id="msg" placeholder="Digite sua Mensagem"></input>
            <button>Enviar Mensagem</button>
          </div>
        </form>
        <p>mensagem</p>
        <p>mensagem1</p>
      </MiddleWhiteComponent>
      <GreenComponent></GreenComponent>
    </MainContainer>
  );
}
