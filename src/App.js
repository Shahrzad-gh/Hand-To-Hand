import React from "react";
import "./App.css";
// import Landing from "./components/Landing";
// import { HashRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Profile/MyProfile";
// import UserProfile from "./components/Profile/UserProfile";
// import Message from "./components/Profile/Message";
// import PostDetails from "./components/Posts/PostDetails";
// import Setting from "./components/Setting/Setting";
function App() {
  return (
    <div>
      {/* <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/myProfile" component={MyProfile} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route path="/post/:id" component={PostDetails} />
        <Route exact path="/Message" component={Message} />
        <Route exact path="/Setting" component={Setting} />
      </Router> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/myProfile">
            <MyProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
