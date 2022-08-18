import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hook/useForm";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { CreateVoyageContainer } from "./style";

function CreateVoyage() {
  const navigate = useNavigate();
  useProtectedPage()
  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  console.log(form);

  const date = new Date()
  const currentDate = date.toLocaleDateString()
  console.log(date.toLocaleDateString());

  //tratar data 
  function formatDate(date) {
    let day = date.split("/")[0];
    let month = date.split("/")[1];
    let year = date.split("/")[2];

    return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2)
    
  }

  console.log(formatDate(currentDate));

  const myHeaders = {
    headers: {
      auth: localStorage.getItem("token"),
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
            min={formatDate(currentDate)}
            id="date"
            name="date"
            value={form.date}
            onChange={onChange}
            // pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$"
            // pattern= "min={date}"
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
