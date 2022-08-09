import React from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationDiv } from "./style";

function ApplicationForm() {

    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1)
    }

    return (
        <ApplicationDiv>
            <div>
        <h1>Inscreva-se para uma viagem</h1>
        <form action="">
            <select name="" id="">
                <option value="">Teste</option>
                <option value="">Teste2</option>
            </select>
            <input type="text" placeholder="Nome"/>
            <input type="number" placeholder="Idade" />
            <input type="text" placeholder="Texto de Candidatura"/>
            <input type="text" placeholder="Profissão"/>
            <select name="" id="">
                <option value="">Brasil</option>
            </select>
        </form>
        <div className="button-div">
            <button onClick={goBack}>Voltar</button>
            <button>Enviar</button>
        </div>
        </div>
        </ApplicationDiv>

    )
}

export default ApplicationForm