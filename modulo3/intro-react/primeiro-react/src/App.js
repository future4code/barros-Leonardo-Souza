import logo from './logo.svg';
import './App.css';
import foto from './minha-foto.jpg'

const mensagem = () => {return alert(`Boa noite!`)}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, eu sou Leonardo!</h1>
        <img src={foto} className="App-logo" alt="foto"/>
        <p>
          Esse é meu primeiro projeto React
        </p>
        <button onClick={mensagem}>
          Aperte este botão
        </button>
      </header>
    </div>
  );
}

export default App;
