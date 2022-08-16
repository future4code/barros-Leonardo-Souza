import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { LoginContainer } from "./style";
import { BASE_URL } from "../../constants/constants";

function Login() {
  const navigate = useNavigate();

  const [form, onChange] = useForm({ email: "", password: "" });

  const doLogin = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}leonardo-souza-barros/login`, form)
    .then((response) => {
      alert("Usuário logado com sucesso!")
      console.log(response.data);
      goAdminArea()
    })
    .catch((err) => {
      alert("Usuário inválido")
      console.log(err.response);
    })
    // console.log(body);
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
          <button onClick={goBack}>Voltar</button>
          <button>Entrar</button>
        </form>
      </div>
    </LoginContainer>
  );
}

export default Login;
