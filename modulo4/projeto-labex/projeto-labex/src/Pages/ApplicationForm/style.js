import styled from 'styled-components'

export const ApplicationDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  margin-top: 50px;

  h1 {
    color: #cac7a6;
  }

  div {
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0px;
  }

  form select {
    padding: 10px 20px;
    border-radius: 10px;
    margin: 15px 0px;
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

  form .button-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .button-div button {
    margin-right: 25px;
    margin-left: 25px;
    border: none;
    padding: 15px 60px;
    border-radius: 10px;
    background-color: #cac7a6;
    color: #0f020d;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
  }
`;