import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";

  .wrapper {
    margin: 0 auto;
  }

  h1 {
    color: #cac7a6;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #cac7a6;
  }

  div button {
    border: none;
    padding: 15px 60px;
    border-radius: 10px;
    background-color: #cac7a6;
    color: #0f020d;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
  }

  div button:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.9;
  }
`;

export const ApprovedContainer = styled.div`
  min-height: 180px;
  width: 450px;
  box-shadow: 5px 5px 5px gray;
  font-family: "Poppins";
  margin: 0;
  padding: 0;
  align-self: center;
  background-color: #cac7a6;
  margin-bottom: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0px;
  }

  div h5 {
    margin-right: 5px;
    margin-left: 15px;
    color: gray;
    margin-bottom: 0;
  }

  div p {
    color: #0f020d;
  }
`;
