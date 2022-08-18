import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import Card from "../Card/Card";
import { DetailContainer } from "./style";
import { BASE_URL, myHeaders } from "../../constants/constants";
import axios from "axios";

function Details() {
  const [ tripDetail, setTripDetail ] = useState({})
  const navigate = useNavigate();
  const params = useParams() 

  useProtectedPage();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getTripDetail()
  },[])

  const getTripDetail = () => {
    axios
    .get(`${BASE_URL}leonardo-souza-barros/trip/${params.id}`, myHeaders)
    .then((response) => {
      setTripDetail(response.data.trip)
      console.log(tripDetail);
    })
    .catch((err) => {
      alert("Ops... algo deu errado")
    })
  }

  return (
    <DetailContainer>
      <div className="wrapper">
        <h1>Detalhes</h1>
        <div>
          <button onClick={goBack}>Voltar</button>
        </div>
      </div>
      <Card
        name={tripDetail.name}
        planet={tripDetail.planet}
        description={tripDetail.description}
        date={tripDetail.date}
        days={tripDetail.durationInDays}
      />
    </DetailContainer>
  );
}

export default Details;
