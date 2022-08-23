import styled from "styled-components";

export const TripsContainer = styled.div `
    margin: 0 auto;
    display: flex;
    font-family: "Poppins";

    .container {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .container div {
        display: flex;
        flex-direction: column;
    }

    .card-wrapper {
        display: flex;
        align-items:flex-start;
    }

    div button {
        padding: 15px 25px;
        margin: 15px 0px;
        border: none;
        background-color: #5f5f5f;
        color:  white;
        border-radius: 10px;
        cursor: pointer;
        font-size: 15px;
    }

    h1{
        align-self: center;
        font-family: "Poppins";
        color: #5f5f5f;
    }


`

