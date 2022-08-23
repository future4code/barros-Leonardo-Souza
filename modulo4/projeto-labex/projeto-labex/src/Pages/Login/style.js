import styled from "styled-components";

export const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    font-family: "Poppins";
    margin-top: 100px;

    div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 500px;
    }

    div h1 {
        align-self: center;
        color: #5f5f5f;
    }

    form { 
        display: flex;
        flex-direction: column;
    }

    form label {
        font-size: 20px;
        color: #5f5f5f;
        font-weight: 500;
    }

    form input {
        padding: 10px 20px;
        border-radius: 10px;
        margin: 15px 0px;
    }

    button {
        padding: 10px 20px;
        border-radius: 10px;
        margin: 15px 0px;
        border: none;
        background-color:#5f5f5f;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
`