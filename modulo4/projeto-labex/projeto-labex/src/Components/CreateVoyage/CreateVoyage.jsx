import React from "react";
import { useNavigate } from "react-router-dom";

function CreateVoyage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }


    return (
        <>
        <h1>Criar Viagem</h1>
        <form action="">
            <input type="text" placeholder="Nome" />
            <option value="">
                <select name="" id="">Terra</select>
                <select name="" id="">Marte</select>
                <select name="" id="">Jupiter</select>
            </option>
            <input type="date"/>
            <input type="text"placeholder="Descrição" />
            <input type="number" placeholder="Duração em dias" />
        </form>
        <div>
            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>
        </div>
        </>
    )
}

export default CreateVoyage