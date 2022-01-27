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
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/myProfile">
            <MyProfile />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/user/:id">
            <UserProfile />
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="/Message">
            <Message />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
