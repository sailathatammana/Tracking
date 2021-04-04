//NPM packages
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Project files
import Header from "./components/Header";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import TrackingPage from "./pages/Trackingpage";
import CustomerPage from "./pages/CustomerPage";
// import information from "./data/userInfo.json"
import "./css/style.css";

export default function App() {
      const [information, setInformation] = useState([]);
  const endPoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {  
    getData();
  },[]);

  const getData = async () => {  
  try{
    const response = await fetch(endPoint,{mode:"cors"});  
      const data = await response.json();     
      setInformation(data); 
      console.log(information);
  }catch{
    console.log("Error while fetching API");
  }
};


return (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Customer/:parameter"
          render={({ match }) => (
            <CustomerPage parameter={match.params.parameter} information={information} />
          )}
        />
        <Route path="/Result/:parameter"
          render={({ match }) => (
            <TrackingPage parameter={match.params.parameter} information={information} />
          )}
        />
        <Route path="/Faq" component={Faq} />
      </Switch>
      <Footer/>
    </div>
  </Router>
);
}