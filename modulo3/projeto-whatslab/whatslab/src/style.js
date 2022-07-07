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
   background-color: orange;
`

export const MiddleWhiteComponent = styled.div `
   display: flex;
   align-items: flex-end;
   flex-direction: column-reverse;
   max-height: 100%;
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

export const MessageBox = styled.div `
   padding: 5px, 10px;
   background-color: orange;
   border-radius: 10px;
   margin: 10px;
   padding-left:10px;
   padding-right:10px;
`

export const MyForm=styled.form`
    margin-top:20px;
    width: 70%;
    input:nth-child(1){
      width:150px;
    }
    input{
        font-size: 1.2vw;
        max-height: 300px;
    }
    button{
        font-size: 1.2vw;
    }
`