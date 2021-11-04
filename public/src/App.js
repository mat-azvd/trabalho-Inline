import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CreateQueue from "./components/CreateQueue/CreateQueue";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-queue" exact component={CreateQueue} />
      </Switch>
    </Router>
  );
}

export default App;
