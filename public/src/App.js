import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Queue from "./pages/Queue";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import ListaDeFilasAdm from "./pages/ListaDeFilasAdm";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-queue" exact component={Queue} />
        <Route path="/setup-screen" exact component={Setup} />
        <Route path="/ListaDeFilasAdm" exact component={ListaDeFilasAdm}/>
      </Switch>
    </Router>
  );
}

export default App;
