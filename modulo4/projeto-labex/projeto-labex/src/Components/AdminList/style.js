import styled from "styled-components";

export const AdminListContainer = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 450px;
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
  }
`;
