import styled from "styled-components";

export const CandidatesContainer = styled.div`
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

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .button button {
    margin: 15px 0;
  }
`;
