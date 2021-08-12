import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./uis";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
