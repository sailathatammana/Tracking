//NPM packages
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Project files
import Header from "./components/Header";
import Faq from "./components/Faq";
import HomePage from "./pages/Homepage";
import TrackingPage from "./pages/Trackingpage";
import Result from "./components/Result";
import "./css/style.css";

export default function App() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://my.api.mockaroo.com/orders.json?key=e49e6840`
    );
    const data = await response.json();
    console.log(data);
  };
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
