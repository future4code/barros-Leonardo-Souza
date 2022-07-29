import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myList, setMyList] = useState([]);
  const [deleteItemName, setDeleteItemName] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const [switchPages, setSwitchPages] = useState(false);

  console.log(myList);

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputDelete = (e) => {
    setDeleteItemName(e.target.value);
  };

  // Axios
  const myHeaders = {
    headers: {
      Authorization: "leonardo-souza-barros",
    },
  };

  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const body = {
    name: name,
    email: email,
  };

  // Post

  const createUser = (e) => {
    e.preventDefault();

    axios
      .post(url, body, myHeaders)
      .then(() => {
        alert("Usuário adicionado com sucesso!");
        getAllUsers();
        setName("")
        setEmail("")
      })
      .catch((err) => {
        alert("Ops! Algo deu errado! Tente novamente mais tarde.");
        console.log(err.response);
      });
  };

  // Get

  const getAllUsers = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
        setMyList(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // Delete

  const deleteItemList = (e) => {
    e.preventDefault();

    const deleteItemFilter = myList.filter((element) => {
      return element.name === deleteItemName;
    });
    console.log(deleteItemFilter);

    axios
      .delete(url + "/" + deleteItemFilter[0].id, myHeaders)
      .then((response) => {
        alert("Usuario deletado com sucesso");
        getAllUsers();
        setDeleteItemName("")
      })
      .catch((err) => {
        alert(
          "Ops, algo deu errado, Certifique que o nome está escrito corretamente."
        );
        console.log(err.response);
      });
  };

  const callbackMap = (element) => {
    return (
      <>
        <li key={element.id}>{element.name}</li>
      </>
    );
  };

  const myListMapped = myList.map(callbackMap);

  const flipBoolean = () => {
    return setSwitchPages(!switchPages);
  };

  console.log(switchPages);

  if (switchPages === false) {
    return (
      <div className="App">
        <button onClick={flipBoolean}>Trocar de tela</button>
        <br></br>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleInputName}
        ></input>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={handleInputEmail}
        ></input>
        <button onClick={createUser}>Criar Usuário</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button onClick={flipBoolean}>Trocar de tela</button>
        <ul>{myListMapped}</ul>
        <hr></hr>
        <h4>Deletar usuário</h4>
        <input
          type="text"
          placeholder="Nome exato do usuário"
          value={deleteItemName}
          onChange={handleInputDelete}
        ></input>
        <button onClick={deleteItemList}>Deletar</button>
      </div>
    );
  }
}

export default App;
