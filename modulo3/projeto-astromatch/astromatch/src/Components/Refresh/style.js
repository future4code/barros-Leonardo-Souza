import styled from "styled-components";

export const RefreshPage = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 200px 50px;

    h2 {
        font-size: 15px;
        margin-bottom:25px;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        color: white;
        background: var(--red);
        cursor: pointer;
    }
`