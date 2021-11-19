import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Queue from "./pages/Queue";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-queue" exact component={Queue} />
        <Route path="/setup-screen" exact component={Setup} />
        <Route path="/login" exact component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
