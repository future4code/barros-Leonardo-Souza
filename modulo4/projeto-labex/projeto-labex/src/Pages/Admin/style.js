import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";

  .wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #cac7a6;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  div button {
    margin: 0 30px;
    margin-bottom: 50px;
    border: none;
    width: 200px;
    padding: 15px 0px;
    border-radius: 10px;
    background-color: #cac7a6;
    color: #0f020d;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }

  div button:hover {
    transition: 0.2s;
    opacity: 0.9;
  }
`;

export const TripContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #cac7a6;
`;