import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./style";

function Login() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goAdminArea = () => {
    navigate("/login/admin");
  };

  return (
    <LoginContainer>
      <div>
        <h1>Login</h1>
        <form action="">
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Senha" />
        </form>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goAdminArea}>Entrar</button>
      </div>
    </LoginContainer>
  );
}

export default Login;
