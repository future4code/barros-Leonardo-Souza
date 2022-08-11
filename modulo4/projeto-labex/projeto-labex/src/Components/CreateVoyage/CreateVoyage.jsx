import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateVoyageContainer } from "./style";

function CreateVoyage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <CreateVoyageContainer>
      <div>
        <h1>Criar Viagem</h1>
        <form action="">
          <input type="text" placeholder="Nome" />
          <select value="">
            <option name="" id="">
              Terra
            </option>
            <option name="" id="">
              Marte
            </option>
            <option name="" id="">
              Jupiter
            </option>
          </select>
          <input type="date" />
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Duração em dias" />
        </form>
        <div className="button-div">
          <button onClick={goBack}>Voltar</button>
          <button>Criar</button>
        </div>
      </div>
    </CreateVoyageContainer>
  );
}

export default CreateVoyage;
