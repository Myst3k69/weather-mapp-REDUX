import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Weather from "./containers/Weather";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/weather" component={Weather} />
    </Switch>
  );
};

export default App;
