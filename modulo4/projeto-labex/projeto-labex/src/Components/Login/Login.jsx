import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goAdminArea = () => {
        navigate('/login/admin')
    }

    return (
        <>
        <h1>Login</h1>
        <form action="">
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Senha" />
        </form>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goAdminArea}>Entrar</button>
        </>
    )
    
}

export default Login