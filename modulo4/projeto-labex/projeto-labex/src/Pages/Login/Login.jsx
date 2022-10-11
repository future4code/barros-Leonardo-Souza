import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { LoginContainer } from "./style";
import { BASE_URL } from "../../Constants/constants";

function Login() {
  const navigate = useNavigate();

  const [form, onChange] = useForm({ email: "", password: "" });

  const doLogin = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}leonardo-souza-barros/login`, form)
    .then((response) => {
      alert("Usuário logado com sucesso!")
      console.log(response.data);
      localStorage.setItem("token", response.data.token)
      goAdminArea()
    })
    .catch((err) => {
      alert("Usuário inválido")
      console.log(err.response);
    })
  };

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
        <form onSubmit={doLogin}>
          <label htmlFor="e-mail">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            pattern="^[a-zA-Z0-0._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={onChange}
            pattern="^.{5,}"
            required
          />
          <button onClick={goBack} type="button">
            Voltar
          </button>
          <button>Entrar</button>
        </form>
      </div>
    </LoginContainer>
  );
}

export default Login;
