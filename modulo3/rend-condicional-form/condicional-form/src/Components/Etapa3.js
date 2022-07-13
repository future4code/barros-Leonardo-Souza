import React from "react";
import { MyForm } from "../Style";

const Etapa3 = () => {


    return (
        <MyForm>
            <h2>Etapa 3 - Informações sobre quem não se formou no ensino superior nem está cursando</h2>
    
            <label>5 - Por que você não terminou um curso de graduação?</label>
            <input type="text"></input>

            <label>6 - Você fez algum curso complementar? </label>
            <select>
                <option>Curso de inglês</option>
                <option>Curso tecnico</option>
                <option>Nenhum</option>
            </select>

        </MyForm>
    )
}

export default Etapa3