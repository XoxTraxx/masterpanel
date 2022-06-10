import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "../pages/SubAdmin/Home";
// import Profile from "../pages/SubAdmin/Profile";
// import Support from "../pages/Support";
// import Guide from "../pages/Guide";
// import Batch from "../pages/Batch";
// import Consumer from "../pages/Consumer";
// import ProductPhaseDetail from "../pages/ProductPhaseDetail";
// import UpdatePhase from "../pages/UpdatePhase";
// import ShowPhaseDetail from "../pages/ShowPhaseDetail";
// import ProfileDetails from "../pages/ProfileDetails";
// import UserAanalaysis from "../pages/UserAanalaysis";
export default function Auth() {
  return (
    <Router>
      {/* <Profile> */}
        <div>
          <Switch>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            {/* <Route path="/Batch">
              <Batch />
            </Route>
            <Route path="/Guide">
              <Guide />
            </Route>
            <Route path="/Support">
              <Support />
            </Route>
            <Route path="/Consumer">
              <Consumer />
            </Route>
            <Route path="/ProductPhaseDetail">
              <ProductPhaseDetail />
            </Route>
            <Route path="/UpdatePhase">
              <UpdatePhase />
            </Route>
            <Route path="/ShowPhaseDetail">
              <ShowPhaseDetail />
            </Route>
            <Route path="/ProfileDetails">
              <ProfileDetails />
            </Route>
            <Route path="/UserAanalaysis">
              <UserAanalaysis />
            </Route> */}
          </Switch>
        </div>
      {/* </Profile> */}
    </Router>
  );
}
