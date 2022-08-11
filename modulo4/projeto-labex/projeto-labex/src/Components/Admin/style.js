import styled from 'styled-components'

export const AdminContainer = styled.div `
    display: flex;
    flex-direction: column;
    font-family: "Poppins";

    .wrapper {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    h1{
        color: #5f5f5f;
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    div button {
        margin-bottom: 50px;
        border: none;
        width: 200px;
        padding: 15px 0px;
        border-radius: 10px;
        background-color: #5f5f5f;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
`