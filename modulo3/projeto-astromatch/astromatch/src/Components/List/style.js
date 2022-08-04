import styled from "styled-components";


export const Lista = styled.div`
  width: 90%;

  main {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }

  main ul {
    display: flex;
    justify-content: left;
    flex-direction: column;
    /* margin:0 auto; */
    /* position: absolute;
    top: 30%; 
    left:40%;  */
  }

  main ul li {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }

  main ul li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;
