import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { AdminContainer } from "./style";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL, myHeaders } from "../../constants/constants";
import { AdminList } from "../AdminList/AdminList";
import axios from "axios";


function Admin() {
  const navigate = useNavigate();


  useProtectedPage();
  useEffect(()=>{

  })
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

  const goToDetails = () => {
    navigate("/login/admin/details");
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
        {isLoading && "Carregando..."}
        {!isLoading && data && tripList}
        {!isLoading && !data && error}

    </>
  );
}

export default Admin;
