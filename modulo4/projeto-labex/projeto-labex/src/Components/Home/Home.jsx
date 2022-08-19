import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeDiv } from "./style";



function Home() {
  const navigate = useNavigate();
  const [ token, setToken ] = useState("")

  // useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       setToken(token);
  //       };
  //     }
  // }[])

  const goToTripsList = () => {
    navigate("/trips");
  };

  const goToAdminLogin = () => {
    navigate("login");
  };

  return (
    <HomeDiv>
      <div>
        <h1>Labex</h1>
        <div>
          <button onClick={goToTripsList}>Ver Viagens</button>
          <button onClick={goToAdminLogin}>Área de Admin</button>
        </div>
      </div>
    </HomeDiv>
  );
}

export default Home;
