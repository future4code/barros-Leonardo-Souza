import styled from 'styled-components'

export const MainContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const MyForm = styled.form `
        margin-top:20px;
        display:flex;
        justify-content: center;
        margin-bottom:1rem;
    width: 70%;
    input{
        margin: 0px 3px;
        font-size: 1.2vw;
    }
    button{
        font-size: 1.2vw;
    }
`
