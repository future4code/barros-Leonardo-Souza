import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --pink: #ED5ABE;
        --red: #C7503D;
        --light-blue: #6BD8ED;
    }

    * {
        font-family: "Poppins";
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--light-blue);
    }
`