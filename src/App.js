
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Weather from "./containers/Weather";
import Nav from "./containers/Nav"

import 'bootstrap/dist/css/bootstrap.min.css';



const  App = () => {

  return(
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/weather" component={Weather} />
    <Route path="/nav" component={Nav} />
  </Switch>
  )
}

export default App;
