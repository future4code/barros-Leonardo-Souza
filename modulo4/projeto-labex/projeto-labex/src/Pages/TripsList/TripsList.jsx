import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/constants";
import useRequestData from "../../Hooks/useRequestData";
import Card from "../../Components/Card/Card";
import { TripsContainer } from "./style";

function TripsList() {
  const [data, isLoading, error] = useRequestData(
    `${BASE_URL}leonardo-souza-barros/trips`
  );

  console.log(data);

  const cardList =
    data &&
    data.trips &&
    data.trips.map((element) => {
      return (
        <Card
          name={element.name}
          planet={element.planet}
          description={element.description}
          date={element.date}
          days={element.durationInDays}
        />
      );
    });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const subscribe = () => {
    navigate("/subscribe");
  };

  return (
    <TripsContainer>
      <div className="container">
        <div>
          <button onClick={goBack}>Voltar</button>
          <button onClick={subscribe}>Increver-se</button>
        <h1>Viagens</h1>
        </div>
        <div className="card-wrapper">
          {isLoading && "Carregando..."}
          {!isLoading && data && cardList}
          {!isLoading && !data && error}
        </div>
      </div>
    </TripsContainer>
  );
}

export default TripsList;
