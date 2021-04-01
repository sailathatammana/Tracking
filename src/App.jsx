//NPM packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Project files
import Header from "./components/Header";
import Faq from "./components/Faq";
import HomePage from "./pages/Homepage";
import TrackingPage from "./pages/Trackingpage";
import "./style/style.css"

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Tracking" component={TrackingPage} />
          <Route path="/Faq" component={Faq} />
        </Switch>
      </div>
    </Router>
  );
}
