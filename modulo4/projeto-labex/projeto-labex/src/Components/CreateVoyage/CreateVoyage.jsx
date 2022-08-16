import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hook/useForm";
import { CreateVoyageContainer } from "./style";

function CreateVoyage() {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const myHeaders = {
    headers: {
      Auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0",
    },
  };

  const createTrip = (e) => {
    e.preventDefault()
    axios
    .post(`${BASE_URL}leonardo-souza-barros/trips`, form, myHeaders )
    .then((response) => {
      alert("Viagem criada com sucesso!")
    })
    .catch((err) => {
      alert("Ops... algo deu errado :/")
      console.log(err.response);
    })
    
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <CreateVoyageContainer>
      <div>
        <h1>Criar Viagem</h1>
        <form onSubmit={createTrip}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
          />
          <select
            id="planet"
            name="planet"
            value={form.planet}
            onChange={onChange}
          >
            <option name="" id="">
              Mercúrio
            </option>
            <option name="" id="">
              Vênus
            </option>
            <option name="" id="">
              Marte
            </option>
            <option name="" id="">
              Júpiter
            </option>
            <option name="" id="">
              Saturno
            </option>
            <option name="" id="">
              Urano
            </option>
            <option name="" id="">
              Netuno
            </option>
            <option name="" id="">
              Plutão
            </option>
          </select>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Descrição"
            id="description"
            name="description"
            value={form.description}
            onChange={onChange}
          />
          <input
            type="number"
            placeholder="Duração em dias"
            id="durationInDays"
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
          />
        <div className="button-div">
          <button onClick={goBack} type="button">Voltar</button>
          <button>Criar</button>
        </div>
        </form>
      </div>
    </CreateVoyageContainer>
  );
}

export default CreateVoyage;
