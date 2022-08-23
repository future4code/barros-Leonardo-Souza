import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { AdminContainer, TripContainer } from "./style";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL, myHeaders } from "../../Constants/constants";
import { AdminList } from "../../Components/AdminList/AdminList";
import axios from "axios";


function Admin() {
  const navigate = useNavigate();

  useProtectedPage();


  // information from api / boolean to render loading if its true / error log / boolean to load list again on every update
  const [data, isLoading, error, booleanState, setBooleanState] = useRequestData(
    `${BASE_URL}leonardo-souza-barros/trips`
  );

  console.log(data);


  const goToTripDetail = (id) => {
    navigate(`/login/admin/details/${id}`)
  }

  const deleteTrip = (id) => {
    const confirm = window.confirm (`Tem certeza que quer apagar essa viagem?`)
    if (confirm) {
      axios
      .delete(`${BASE_URL}leonardo-souza-barros/trips/${id}`, myHeaders)
      .then((response) => {
        setBooleanState(!booleanState)
        alert("Viagem deletada com sucesso")
      })
      .catch((err) => {
        alert("Ops... Algo deu errado :/")
      })
      
    }
  }
  
  // List of existing trips
  
  const tripList =
    data &&
    data.trips &&
    data.trips.map((element) => {
      return (
        <AdminList
          value={element.id}
          name={element.name}
          onClickDetails={() => goToTripDetail(element.id)}
          onClickDelete={() => deleteTrip(element.id)}
        />
      );
    });

  const goBack = () => {
    navigate("/");
  };

  const goToCreateVoyage = () => {
    navigate("/login/admin/create-voyage");
  };

  const goToLogin = () => {
    localStorage.clear()
    navigate("/login");
  };

  return (
    <>
      <AdminContainer>
        <div className="wrapper">
          <h1>Painel Administrativo</h1>
          <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateVoyage}>Criar viagem</button>
            <button onClick={goToLogin}>Logout</button>
          </div>
        </div>
      </AdminContainer>
      <TripContainer>
        {isLoading && "Carregando..."}
        {!isLoading && data && tripList}
        {!isLoading && !data && error}
      </TripContainer>
    </>
  );
}

export default Admin;
