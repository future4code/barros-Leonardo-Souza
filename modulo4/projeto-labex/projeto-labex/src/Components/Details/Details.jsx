import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import Card from "../Card/Card";
import { ApprovedContainer, DetailContainer } from "./style";
import { BASE_URL, myHeaders } from "../../constants/constants";
import axios from "axios";
import { CandidatesCard } from "../CandidatesCard/CandidatesCard";
import useRequestData from "../../hook/useRequestData";

function Details() {
  const [ tripDetail, setTripDetail ] = useState({})
  const [ reload, setReload ] = useState(false)
  const [ isLoading, setIsLoading ] = useState()
  const navigate = useNavigate();
  const params = useParams() 

  useProtectedPage();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getTripDetail()
  },[reload])

console.log(myHeaders);

  const getTripDetail = () => {
    setIsLoading(true)
    axios
    .get(`${BASE_URL}leonardo-souza-barros/trip/${params.id}`, myHeaders)
    .then((response) => {
      setTripDetail(response.data.trip)
      setIsLoading(false)
      console.log(tripDetail);
    })
    .catch((err) => {
      alert("Ops... algo deu errado")
      console.log(err.response);
    })
  }

  console.log(tripDetail);

  // decide candidate 

  const approve = (id, name) => { 
    const body = {
      approve: true,
    };
    axios 
    .put(`${BASE_URL}leonardo-souza-barros/trips/${params.id}/candidates/${id}/decide`, body, myHeaders)
    .then((response) => {
      alert("usuário aprovado")
      localStorage.setItem("name", name);
      setReload(!reload)
    })
    .catch((err) => {
      alert("Ops... Algo deu errado :/")
    })
  }

    const reprove = (id) => {
      const body = {
        approve: false,
      };
      axios
        .put(
          `${BASE_URL}leonardo-souza-barros/trips/${params.id}/candidates/${id}/decide`,
          body,
          myHeaders
        )
        .then((response) => {
          alert("usuário reprovado");
          setReload(!reload);
        })
        .catch((err) => {
          alert("Ops... Algo deu errado :/");
        });
    };



  const mappedCandidates = tripDetail.candidates && tripDetail.candidates.map((element) => {
    return (
      <CandidatesCard
        name={element.name}
        occupation={element.profession}
        age={element.age}
        country={element.country}
        applicationText={element.applicationText}
        onClickApprove={() => approve(element.id, element.name)}
        onClickReprove={() => reprove(element.id)}
      />
    );
  })

  const approvedCandidates =
    tripDetail.approved &&
    tripDetail.approved.map((element) => {
      return (
        <ApprovedContainer>
          <div>
            <h5>Nome: </h5>
            <p>{element.name}</p>
          </div>
          <div>
            <h5>Profissão: </h5>
            <p>{element.profession}</p>
          </div>
          <div>
            <h5>Idade: </h5>
            <p>{element.age}</p>
          </div>
          <div>
            <h5>País: </h5>
            <p>{element.country}</p>
          </div>
        </ApprovedContainer>
      );
    });

  return (
    <>
      <DetailContainer>
        <div className="wrapper">
          <h1>Detalhes</h1>
          <div>
            <button onClick={goBack}>Voltar</button>
          </div>
          <h1>{tripDetail.name}</h1>
        </div>
        <div>{isLoading && "Carregando..."}</div>
        {!isLoading && tripDetail && (
          <Card
            name={tripDetail.name}
            planet={tripDetail.planet}
            description={tripDetail.description}
            date={tripDetail.date}
            days={tripDetail.durationInDays}
          />
        )}
        <div>
          <h1>Candidatos</h1>
          {!mappedCandidates && "Carregando..."}
        </div>
        {mappedCandidates}
        <div>
          <h1>Candidatos aprovados</h1>
          {approvedCandidates}
        </div>
      </DetailContainer>
    </>
  );
}

export default Details;
