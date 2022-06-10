import React from "react";
import "../styles/nav.css";
import Styles from "../styles/navBar";

import { Navbar } from "react-bootstrap";
import TraxLink from "../components/traxLink";
import TraxLogo from "../components/traxLogo";
import { Flex, Spacer } from "@chakra-ui/react";

import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Antchain from "../pages/Antchain";
import FoodSafety from "../pages/FoodSafety";
import Subscription from "../pages/Subscription";
import { ReactPdf } from "../components/reactPdf";
import TopBar from "../components/common/navBar";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/RegisterForm/Register";
// import ForgotPassword from "../pages/ForgetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Taas from "../components/TracibilityasService/Taas";
import RegisterForm2 from "../pages/RegisterForm/RegisterForm2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreenLearnMoreButton from "../components/homeScreenLearnMore";

export default function Auth() {
  // const [style, setStyle] = React.useState({display: 'none'})
  return (
    <Router>
      <TopBar />
      {/* <Flex {...Styles.mainFlex} justifyContent={"center"}>
        <TraxLogo />
        <Spacer />
        <Navbar className={"navBar"}>
          <Navbar.Brand as={Link} className={"navBrand"} to="/">
            Home
          </Navbar.Brand>

          <Navbar.Brand as={Link} className={"navBrand"} to="/Taas">
            Traceability as a service (Taas)
          </Navbar.Brand>

          <Navbar.Brand as={Link} className={"navBrand"} to="/Antchain">
            ANTCHAIN
          </Navbar.Brand>

          <Navbar.Brand as={Link} className={"navBrand"} to="/FoodSafety">
            Food Safety
          </Navbar.Brand>

          <Navbar.Brand as={Link} className={"navBrand"} to="/Contact">
            Contact
          </Navbar.Brand>

          <Navbar.Brand as={Link} className={"navBrand"} to="/Register">
            Register
          </Navbar.Brand>

          <Navbar.Brand as={Link} className={"navBrand"} to="/Login">
            Login
          </Navbar.Brand>
        </Navbar>
        <Spacer />
        <TraxLink />
      </Flex> */}

      <Switch>
        <Route path="/" exact>
          <HomeScreenLearnMoreButton />
        </Route>
        <Route path="/Home" exact>
          <HomeScreenLearnMoreButton />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/RegisterForm2">
          <RegisterForm2 />
        </Route>
        <Route path="/Subscription">
          <Subscription />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/FoodSafety">
          <FoodSafety />
        </Route>
        <Route path="/Antchain">
          <Antchain />
        </Route>
        <Route path="/Taas">
          <Taas />
        </Route>
        <Route path="/ReactPdf">
          <ReactPdf />
        </Route>
        <Route path="/ForgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/ResetPassword">
          <ResetPassword />
        </Route>
      </Switch>
    </Router>
  );
}
