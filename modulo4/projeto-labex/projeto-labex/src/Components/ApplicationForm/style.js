import styled from 'styled-components'

export const ApplicationDiv = styled.div `
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: "Poppins";
    margin-top: 50px;

    h1 {
        color: #5f5f5f;
    }

    div {
        margin: auto;
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
        justify-content: space-around;
    }

    .button-div button {
        border: none;
        padding: 15px 25px;
        border-radius: 10px;
        background-color: #5f5f5f;
        color: white;
        font-size: 20px;
    }
`