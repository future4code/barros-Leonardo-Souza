import styled from "styled-components";

export const CardContainer = styled.section`
  min-height: 180px;
  width: 450px;
  box-shadow: 5px 5px 5px gray;
  font-family: "Poppins";
  margin: 0;
  padding: 0;
  align-self: center;
  background-color: #cac7a6;
  margin-bottom: 50px;
  padding: 0 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0px;
  }

  div h5 {
    margin-right: 5px;
    margin-left: 15px;
    color: #807675;
    margin-bottom: 0;
  }

  div p {
    color: black;
  }
`;
