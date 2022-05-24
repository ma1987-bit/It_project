import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comparepage from "./component/Comparepage";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NavBar from "./component/navbar/navbar";
import Contact from "./component/contact/Contact";
import Searchgeschidenis from "./component/SearchHistory/SearchHistory";
import Searchhistorydetails from "./component/SearchHistory/SearchHistoryDetails";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <Router>
    <div>
    <NavBar/>
      <Switch>
        <Route path="/" exact>
        <Comparepage />
        </Route>
        <Route path="/Searchgeschidenis" exact>
        <Searchgeschidenis/>
        </Route>
        <Route path="/Searchhistorydetails/:titel" >
        <Searchhistorydetails/>
        </Route>
        <Route path="/Contact" >
        <Contact/>
        </Route>
      </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
