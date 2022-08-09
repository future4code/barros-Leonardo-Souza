import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToCreateVoyage = () => {
        navigate("/login/admin/create-voyage")
    }

    const goToDetails = () => {
        navigate("/login/admin/details")
    }

    const goToLogin = () => {
        navigate("/login")

    }
    



    return (
        <>

        <h1>Painel Administrativo</h1>

        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateVoyage}>Criar viagem</button>
            <button onClick={goToLogin}>Logout</button>
            <button onClick={goToDetails}>Detalhes</button>
        </div>
        
        </>
    )
}

export default Admin