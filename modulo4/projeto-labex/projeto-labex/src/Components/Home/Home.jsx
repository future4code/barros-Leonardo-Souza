import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeDiv } from "./style";

function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const goToTripsList = () => {
    navigate("/trips");
  };

  const goToAdminLogin = () => {
    navigate("login");
  };

  const goToAdminHome = () => {
    navigate("/login/admin");
  };

  if (token) {
    return (
      <HomeDiv>
        <div>
          <h1>Labex</h1>
          <div>
            <button onClick={goToTripsList}>Ver Viagens</button>
            <button onClick={goToAdminHome}>Área de Admin</button>
          </div>
        </div>
      </HomeDiv>
    );
  } else {
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
}

export default Home;
