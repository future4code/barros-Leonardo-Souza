import styled from "styled-components";

export const DetailContainer = styled.div `
    display: flex;
    flex-direction: column;
    font-family: "Poppins";


    .wrapper {
        margin: 0 auto;
    }

    h1 {
        color: gray;
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    div button {
        border: none;
        padding: 15px 60px;
        border-radius: 10px;
        background-color: #5f5f5f;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
    
`
