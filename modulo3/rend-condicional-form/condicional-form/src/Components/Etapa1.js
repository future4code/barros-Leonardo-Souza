import React from "react";
import { MyForm } from "../Style";

const Etapa1 = () => {

    return (
        <MyForm>
            <h1>Etapa 1 - dados gerais</h1>

            <label>1 - Qual o seu nome?</label>
            <input type="text"></input>

            <label>2 - Qual sua idade?</label>
            <input type="text"></input>

            <label>3 - Qual seu e-mail?</label>
            <input type="text"></input>

            <label>4 - Nivel escolaridade</label>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>

        </MyForm>
    )

}

export default Etapa1