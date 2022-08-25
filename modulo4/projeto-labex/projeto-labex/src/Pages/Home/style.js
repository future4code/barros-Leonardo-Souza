import styled from 'styled-components'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  height: 100vh;
  align-items: center;
  justify-content: center;

  div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  div h1 {
    font-size: 50px;
    color: #cac7a6;
  }

  div div {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 15px 25px;
    margin: 15px 0px;
    border: none;
    background-color: #cac7a6;
    color: #0f020d;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }

  button:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.9;
  }
`;