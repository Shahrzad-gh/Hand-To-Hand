import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Profile/MyProfile";
import UserProfile from "./components/Profile/UserProfile";
import Message from "./components/Profile/Message";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/MyProfile" component={MyProfile} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/Message" component={Message} />
      </Router>
    </div>
  );
}

export default App;
