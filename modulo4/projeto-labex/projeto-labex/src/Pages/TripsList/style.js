import styled from "styled-components";

export const TripsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  font-family: "Poppins";

  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .container div {
    display: flex;
    flex-direction: column;
  }

  .card-wrapper {
    display: flex;
    align-items: flex-start;
    color: #cac7a6;
  }

  div button {
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

  div button:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.9;
  }

  h1 {
    align-self: center;
    font-family: "Poppins";
    color: #cac7a6;
  }
`;

