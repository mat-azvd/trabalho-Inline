import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import App from "../App";
import CriarFila from "./CriarFila";
import ListaDeFilasAdm from "./ListaDeFilasAdm";

const Routes = () => {

    return (

        <Router>
            <Switch>
                <Route path="/" exact component={ListaDeFilasAdm}/>
                <Route path="/CriarFila/" component={CriarFila}/>
            </Switch>
        </Router>

    )

}

export default Routes;