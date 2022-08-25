import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  margin-top: 100px;

  div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  div h1 {
    align-self: center;
    color: #cac7a6;
    font-size: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 20px;
    color: #cac7a6;
    font-weight: 500;
  }

  form input {
    padding: 10px 20px;
    border-radius: 10px;
    margin: 15px 0px;
  }

  button {
    padding: 10px 20px;
    border-radius: 10px;
    margin: 15px 0px;
    border: none;
    background-color: #cac7a6;
    color: #0f020d;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.9;
  }
`;