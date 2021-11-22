import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Queue from "./pages/Queue";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Login from "./pages/Login";
import BodyUserQ from "./pages/BodyUserQ";
import BodySign from "./pages/BodySign";
import ListaDeFilasAdm from "./pages/ListaDeFilasAdm";
import StoreRegister from "./pages/StoreRegister";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/queue/enter/:queueCode" exact component={Home} />
        <Route path="/create-queue" exact component={Queue} />
        <Route path="/setup-screen" exact component={Setup} />
        <Route path="/login" exact component={Login} />
        <Route path="/signin" exact component={BodySign} />
        <Route path="/signin/:storeId" exact component={BodySign} />
        <Route path="/user/queue/:queueId" exact component={BodyUserQ} />
        <Route path="/queue-manager" exact component={ListaDeFilasAdm} />
        <Route path="/store-register" exact component={StoreRegister} />

      </Switch>
    </Router>
  );
}

export default App;
