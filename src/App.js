import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";
import "./styles.css";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Route
            path="/result"
            component={(history) => (
              <Result history={history.history} location={history.location} />
            )}
          />
          <Route
            path="/"
            component={(history) => (
              <Home history={history.history} location={history.location} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}
