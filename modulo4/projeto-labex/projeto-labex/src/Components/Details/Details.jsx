import React from "react";
import { useNavigate } from "react-router-dom";

function Details() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return ( 
        <>
        <h1>Detalhes</h1>
        <div>
            <button onClick={goBack}>Voltar</button>
        </div>
        </>
    )
}

export default Details