import styled from "styled-components";

export const AdminListContainer = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 600px;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  margin-top: 30px;

  .button {
    padding: 0 30px;
    width: 100%;
    height: 100%;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: "Poppins";
  }

  button {
    cursor: pointer;
    border: none;
    padding: 15px 30px;
    font-weight: 600;
  }

  button:nth-child(2) {
    font-family: "Poppins";
    color: red;
    font-weight: 600;
    font-size: 15px;
  }

  button:nth-child(1):hover {
    transition: 0.3s ease-in-out;
    background-color: #cac7a6;
    color: #0f020d;
  }

  button:nth-child(2):hover {
    transition: 0.3s ease-in-out;
    background-color: red;
    color: white;
  }
`;
