import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Profile/MyProfile";
import UserProfile from "./components/Profile/UserProfile";
import Message from "./components/Profile/Message";
import PostDetails from "./components/Posts/PostDetails";
import Setting from "./components/Setting/Setting";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/myProfile" component={MyProfile} />
          <Route path="/setting" component={Setting} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/Message" component={Message} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
