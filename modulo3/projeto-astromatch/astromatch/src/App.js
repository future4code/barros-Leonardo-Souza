import axios from "axios";
import React, { useEffect, useState } from "react";
import  Card  from "./Components/Card/Card";
import { GlobalStyle } from "./GlobalStyle";

function App() {

const [newPerson, setNewPerson] = useState({})
const [matches, setMatches] = useState([])
const [checkBoolean, setCheckBoolean] = useState(true)
const[getId, setGetId] = useState("oi")



console.log(newPerson);

useEffect(() => {
  getRandomProfile()
}, []);


// axios - get random unseen profile

const getRandomProfile = () => {

  axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/person')
    .then((response) => {
      setNewPerson(response.data.profile)
      console.log(newPerson);
    })
    .catch((err) => {
      console.log(err.response);
    })

}

const getIdAndBoolean = () => {

  let id = newPerson.id;
  console.log(id);
  let boolean = true
  console.log(boolean);

  axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/choose-person', 
    {
      'id': id,
      'choice': boolean
    })
    .then((response) => {
      getRandomProfile()
      console.log(response.data.isMatch);
      if (response.data.isMatch === true) {
        alert('You match!!')
        setMatches(newPerson)
        console.log(response.data);
      }
    })
    .catch((err) => {
      console.log(err.response);
    })
}

// teste

//axios reset 

const reset = () => {
  axios 
    .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-souza-barros/clear')
    .then((response) => {
      alert('Success!')
    })
    .catch((err) => {
      console.log(err.response);
    })

}






  return (
    <div className="App">
      <GlobalStyle/>
        <Card url={newPerson.photo} onClickReset={reset} onClickLike={getIdAndBoolean} name={newPerson.name} age={newPerson.age} bio={newPerson.bio} ></Card>

    </div>
  );
}

export default App;
