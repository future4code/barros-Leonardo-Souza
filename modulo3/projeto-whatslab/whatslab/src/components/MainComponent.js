import React from "react";
import {GreenComponent, MiddleWhiteComponent} from "../style.js";
import {MainContainer} from "../style.js";

export default function MainContent() {
    return (
        <MainContainer>
            <GreenComponent></GreenComponent>
            <MiddleWhiteComponent>
                <form>
                    <label for = 'remetente'>Remetente:</label>
                    <input type ='text' id="remetente"></input>
                    <label for = 'remetente'>Msg:</label>
                    <input type ='text' id="remetente"></input>
                    <button>Enviar Mensagem</button>
                </form>
            </MiddleWhiteComponent>
            <GreenComponent></GreenComponent>
        </MainContainer>
    )
    
}