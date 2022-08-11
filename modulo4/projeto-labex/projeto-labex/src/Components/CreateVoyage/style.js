import styled from "styled-components";

export const CreateVoyageContainer = styled.div `
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: "Poppins";
    margin-top: 50px;

    h1 {
        color: #5f5f5f;
        align-self: center;
    }

    div {
        margin: auto;
        width: 30%;
    }

    form { 
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 10px 0px;
    }

    form select {
        padding: 10px 20px;
        border-radius: 10px;
        margin: 15px 0px;
    }

    form input {
        padding: 10px 20px;
        border-radius: 10px;
        margin: 15px 0px;
    }

    .button-div {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .button-div button {
        border: none;
        padding: 15px 40px;
        border-radius: 10px;
        background-color: #5f5f5f;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin: 0px 40px;
    }
`