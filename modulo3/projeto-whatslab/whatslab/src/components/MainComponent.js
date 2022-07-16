import React, { useState } from "react";
import {
  GreenComponent,
  MiddleWhiteComponent,
  MessageBox,
  MyForm,
} from "../style.js";
import { MainContainer } from "../style.js";

export default function MainContent() {
  // Define object that will hold the array of names and messages
  const [mensagens, setMensagens] = useState([{}]);
  // Define variables to hold both inputs, name and message
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  // Manipulate previous variables with input values
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputMessage = (e) => {
    setInputMessage(e.target.value);
  };
  
  // When button is clicked, update the object properties with the new values.
  const enviarMensagem = (e) => {
    e.preventDefault();
    const novaMensagem = [
      ...mensagens,
      { nome: inputName, message: inputMessage },
    ];
    setMensagens(novaMensagem);
    // Reset inputs
    setInputName("");
    setInputMessage("");
  };
  
  // Eliminate index 0 which is empty. 
  const retornarValorCheioCallback = (element, index, array) => {
    return index !== 0;
  };
  
  const retornarValorFinal = mensagens.filter(retornarValorCheioCallback);

  // Return the array in reverse order, so that the elements is correctly rendered
  retornarValorFinal.reverse();

  console.log(retornarValorFinal);

  // Return the array of objects as html elements.
  function percorrerArrayCallback(element, index) {
    return (
      <MessageBox key={index}>
        <p>
          <strong>{element.nome}</strong>: {element.message}
        </p>
      </MessageBox>
    );
  }

  const percorrerArrayMap = retornarValorFinal.map(percorrerArrayCallback);

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
