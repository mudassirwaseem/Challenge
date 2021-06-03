import Home from "../Components/Home";
import Series from "../Components/Series1";
import Movies from "../Components/Movies1";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Task2() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Series" component={Series} />
          <Route exact path="/Movies" component={Movies} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Task2;
