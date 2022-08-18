import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { DetailContainer } from "./style";

function Details() {
  const navigate = useNavigate();

  useProtectedPage()

  const goBack = () => {
    navigate(-1);
  };

  return (
    <DetailContainer>
      <div className="wrapper">
        <h1>Detalhes</h1>
        <div>
          <button onClick={goBack}>Voltar</button>
        </div>
      </div>
    </DetailContainer>
  );
}

export default Details;
