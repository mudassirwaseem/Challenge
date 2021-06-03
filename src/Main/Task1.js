import Home from "../Components/Hometask1";
import Series from "../Components/Series";
import Movies from "../Components/Movies";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Task1() {
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

export default Task1;
