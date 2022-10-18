import './App.css';
import Home from "./Components/Home";
import Inicio from "./Pages/Inicio";
import { Section, Main, Header } from './StyledGlobal/Style';

function App() {
  return (


    <div className="App">

      <Header >
        <Home />
      </Header>

      <Main>
        <Inicio />
      </Main>


      <Section></Section>






    </div>


  );
}

export default App;
