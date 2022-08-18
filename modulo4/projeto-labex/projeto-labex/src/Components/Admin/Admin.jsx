import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { AdminContainer } from "./style";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../../constants/constants";
import { AdminList } from "../AdminList/AdminList";

function Admin() {
  const navigate = useNavigate();

  useProtectedPage();

  const [data, isLoading, error] = useRequestData(
    `${BASE_URL}leonardo-souza-barros/trips`
  );

  console.log(data);

    const tripList =
      data &&
      data.trips &&
      data.trips.map((element) => {
        return (
          <AdminList
            name={element.name}
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
