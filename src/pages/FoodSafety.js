import React, { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import LangContext from "../context/languageContext";
import Underconstruction from "../components/image/farm.svg";
import BuildingBrand from "../components/Brand/BuildingBrand";
import Contact from "../components/Contact/Contact";
import { Flex, Text, Input, Button, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import BeveragesSupplyChain from "../components/SupplyChain/BeveragesSupplyChain";
import SupplyChainTracibility from "../components/SupplyChain/SupplyChainTracibility";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const FoodSafety = () => {
  const { currentLangData } = React.useContext(LangContext);

  const renderContent = () => {
    return (
      <Flex {...style.topContainer}>
        <Text {...style.globalLabel}> {currentLangData.app.tracibilityTO}</Text>
        <Heading {...style.h1}>{currentLangData.app.meetglobal}</Heading>
        <Text>{currentLangData.app.supplyChain}</Text>
        <Link to="Beverages" spy={true} smooth={true} duration={500}>
          <Flex {...style.arrowDownCirle}>
            <AiOutlineArrowDown {...style.arrowButton} />
          </Flex>
        </Link>
      </Flex>
    );
  };

  return (
    <React.Fragment>
      <Flex {...style.mainContainer}>{renderContent()}</Flex>
      <BeveragesSupplyChain />
      <SupplyChainTracibility />
      <BuildingBrand />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};
export default FoodSafety;
const style = {
  arrowDownCirle: {
    mt: 5,
    w: "60px",
    h: "60px",
    borderRadius: "50%",
    alignItems: "center",
    bg: "rgb(56,116,243)",
    justifyContent: "center",
  },
  mainContainer: {
    padding: [10, 10, 40],
    height: "100vh",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Underconstruction})`,
  },
  topContainer: {
    color: "white",
    flexDirection: "column",
  },
  globalLabel: {
    fontSize: 25,
    fontWeight: "bold",
  },
  h1: {
    my: 3,
    fontSize: 40,
  },
  arrowButton: {
    size: 30,
    color: "white",
  },
};
