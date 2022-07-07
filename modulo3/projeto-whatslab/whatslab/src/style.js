import styled from "styled-components";

export const Header = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
   color: black;
   width: 100%;
   height: 80px;
   background-color: #fff;

`

export const ImgLogo = styled.img `
   height: 100px;
   width: 100px;
   /* background-image: url("./logo-labenu.jpg"); */
`

export const MainContainer = styled.div `
   display: flex;
   justify-content: space-between;
   align-items: stretch;
   height: 100vh;
   width: 100%;
`

export const GreenComponent = styled.div `
   height: 100%;
   width: 20%;
   background-color: greenyellow;
`

export const MiddleWhiteComponent = styled.div `
   display: flex;
   align-items: flex-end;
   flex-direction: column-reverse;
   height: 100%;
   width: 60%;
   background-color: #fff;
   form {
    margin: 1rem;
    input {
        margin: 1rem;
    }
   }
   `

export const Footer = styled.div `
   display: flex;
   justify-content: center; 
   align-items:center;
   height: 100px;
   width: 100%;
   bottom: 0;
   background-color:gray;
`