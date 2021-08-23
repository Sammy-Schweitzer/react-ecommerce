import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { LandingPage } from "./uis";
import { LandingPageTemplate } from "./components/templates/LandingPageTemplate";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/custom.scss";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPageTemplate} />
      </Switch>
    </Router>
  );
};

export default App;
