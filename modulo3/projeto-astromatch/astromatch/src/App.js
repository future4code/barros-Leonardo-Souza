import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Chat from "./Components/Chat/Chat";
import { GlobalStyle } from "./GlobalStyle";
import { List } from "./Components/List/List";
import Teste from "./Components/Teste/Teste";
import { CardContainer } from "./Components/Card/style";

function App() {
  const [newPerson, setNewPerson] = useState({});
  const [matches, setMatches] = useState([]);
  const [switchPages, setSwitchPages] = useState(true);

  console.log(matches);

  // console.log(newPerson);

  useEffect(() => {
    getRandomProfile();
  }, []);

  // axios - get random unseen profile

  const getRandomProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/person"
      )
      .then((response) => {
        setNewPerson(response.data.profile);
        // console.log(newPerson);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // axios like button

  const getIdAndBooleanTrue = () => {
    let id = newPerson.id;
    console.log(id);
    let boolean = true;
    console.log(boolean);

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/choose-person",
        {
          id: id,
          choice: boolean,
        }
      )
      .then((response) => {
        getRandomProfile();
        console.log(response.data.isMatch);
        if (response.data.isMatch === true) {
          alert("Its a match!!");
          const newMatch = [...matches, newPerson]
          setMatches(newMatch);
          // console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // axios pass button

  const getIdAndBooleanfalse = () => {
    let id = newPerson.id;
    let boolean = false;

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/choose-person",
        {
          id: id,
          choice: boolean,
        }
      )
      .then((response) => {
        getRandomProfile();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //axios reset

  const reset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/clear"
      )
      .then((response) => {
        alert("Success!");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // axios get matches

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
        console.log(matches);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [switchPages]);

  // switch pages
  const flipBooleans = () => {
    setSwitchPages(!switchPages);
  };

 if (switchPages === true) {
    return (
      <div className="App">
        <GlobalStyle />
        <Card
          url={newPerson.photo}
          onClickChat={flipBooleans}
          onClickPass={getIdAndBooleanfalse}
          onClickReset={reset}
          onClickLike={getIdAndBooleanTrue}
          name={newPerson.name}
          age={newPerson.age}
          bio={newPerson.bio}
        ></Card>
      </div>
    );
  } else {
    return (
      <div className="App">
        <GlobalStyle />
        <CardContainer>
        <Chat onClickReset={reset} onClickReturn={flipBooleans}>
        </Chat>
          <List arrayMatches={matches}/>
          </CardContainer>
      </div>
    );
 }
}

export default App;
