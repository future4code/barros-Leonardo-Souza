import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { AdminContainer } from "./style";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL, myHeaders } from "../../constants/constants";
import { AdminList } from "../AdminList/AdminList";
import axios from "axios";


function Admin() {
  const navigate = useNavigate();
  const [ selectedTrip, setSelectedTrip ] = useState({})

  useProtectedPage();

  const [data, isLoading, error] = useRequestData(
    `${BASE_URL}leonardo-souza-barros/trips`
  );

  console.log(data);

  
  // const goToTripDetail = (id) => {
  //   axios 
  //   .get(`${BASE_URL}leonardo-souza-barros/trip/${id}`, myHeaders)
  //   .then((response) => {
  //     alert("Sucesso")
  //     setSelectedTrip(response.data.trip)
  //     console.log(selectedTrip);
  //     goToDetails()
  //   })
  //   .catch((err) => {
  //     alert("Ops... algo deu errado")
  //   })
  // }

  const goToTripDetail = (id) => {
    navigate(`/login/admin/details/${id}`)
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
            <button onClick={goToDetails}>Detalhes</button>
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
