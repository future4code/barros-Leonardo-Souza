import logo from './logo-labenu.jpg';
import {Header} from "./style.js";
import {imgLogo} from "./style.js";
import HeaderComponent from './components/ComponentHeader';
import MainContent from './components/MainComponent';
import Footer from './components/footer.js'



function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainContent/>
      <Footer></Footer>
    </div>
  );
}

export default App;