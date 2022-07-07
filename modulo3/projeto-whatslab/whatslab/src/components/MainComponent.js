import React, { useState } from "react";
import {
  GreenComponent,
  MiddleWhiteComponent,
  MessageBox,
  MyForm,
} from "../style.js";
import { MainContainer } from "../style.js";

export default function MainContent() {
  const [mensagens, setMensagens] = useState([{}]);

  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputMessage = (e) => {
    setInputMessage(e.target.value);
  };

  const enviarMensagem = (e) => {
    e.preventDefault();
    const novaMensagem = [
      ...mensagens,
      { nome: inputName, message: inputMessage },
    ];
    setMensagens(novaMensagem);
    setInputName("");
    setInputMessage("");
    setMensagens.reverse();
  };

  const retornarValorCheioCallback = (element, index, array) => {
    return index !== 0;
  };

  const retornarValorCheio = mensagens.filter(retornarValorCheioCallback);

  retornarValorCheio.reverse();

  console.log(retornarValorCheio);

  function percorrerArrayCallback(element, index) {
    return (
      <MessageBox key={index}>
        <p>
          <strong>{element.nome}</strong>: {element.message}
        </p>
      </MessageBox>
    );
  }

  const percorrerArrayMap = retornarValorCheio.map(percorrerArrayCallback);

  return (
    <MainContainer>
      <GreenComponent></GreenComponent>
      <MiddleWhiteComponent>
        <MyForm>
          <input
            type="text"
            id="remetente"
            placeholder="Digite seu nome"
            value={inputName}
            onChange={handleInputName}
          ></input>
          <input
            type="text"
            id="msg"
            placeholder="Digite sua Mensagem"
            value={inputMessage}
            onChange={handleInputMessage}
          ></input>
          <button onClick={enviarMensagem}>Enviar Mensagem</button>
        </MyForm>
        {percorrerArrayMap}
      </MiddleWhiteComponent>
      <GreenComponent></GreenComponent>
    </MainContainer>
  );
}
