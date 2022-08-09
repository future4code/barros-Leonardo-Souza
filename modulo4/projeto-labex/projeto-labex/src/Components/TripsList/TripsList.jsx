import React from "react";
import { useNavigate } from "react-router-dom";

function TripsList() {
    
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const subscribe = () => {
        navigate('/subscribe')
    }

    return (
        <>
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={subscribe}>Increver-se</button>
        </div>
        <h1>Viagens</h1>
        </>
    )
}

export default TripsList;