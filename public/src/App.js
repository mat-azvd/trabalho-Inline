//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import ListaDeFilasAdm from "./pages/ListaDeFilasAdm"


function App() {
  return (
      <Router>
        <ListaDeFilasAdm teste="ola"/>
      </Router>
  );
}

export default App;
