import { useState } from "react";
import "./App.css"
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";
import { MainButton } from "./Style";

function App() {
  
  const [etapa,setEtapa] = useState(1)
  let nextStep;


  switch (etapa) {
    case 1:
      console.log('entrei no passo 1');
      nextStep = <Etapa1></Etapa1>
      break;
    case 2: 
      nextStep = <Etapa2></Etapa2>
       break;
    case 3:
      nextStep = <Etapa3></Etapa3>
      break;
    default:
      <Final></Final>
    }    
  

  function proximaEtapa() {
    setEtapa(etapa + 1)
  }

  return (
    <div className="App">
      {nextStep}
      <MainButton onClick={proximaEtapa}>Próxima etapa</MainButton>
    </div>
  );
}

export default App;
