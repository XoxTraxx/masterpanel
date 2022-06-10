import React, { Component } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Box,
  Link,
  Center,
} from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Antchain from "../components/image/Frame.svg";
import Underconstruction from "../components/image/AntPage.png";
import CoreAdvantages from "../components/Advantages/CoreAdvantages";
import LangContext from "../context/languageContext";

const FoodSafety = () => {
  const { currentLangData } = React.useContext(LangContext);

  const HomeContent = () => {
    return (
      <Flex {...style.topContainer}>
        <Heading {...style.stratgicPartnerLabel}>
          {currentLangData.app.stratgicPartner}
        </Heading>
        <Flex>
          <Image src={Antchain} {...style.antChainImage} />
        </Flex>
        <Heading {...style.globalLabel}>
          {currentLangData.app.globalChain}
        </Heading>
        <Link href={"https://www.antchain.net/pressroom/1000"} isExternal>
          <Button {...style.pressReleaseButton}>
            <Text {...style.pressReleaseLabel}>
              {currentLangData.app.pressRelease}
            </Text>
            <AiOutlineArrowRight />
          </Button>
        </Link>
      </Flex>
    );
  };

  const renderSecondGrid = () => {
    return (
      <Flex {...style.anChainContainer}>
        <Flex {...style.imageContainer}>
          <Center>
            <Image {...style.image} src={Antchain}></Image>
          </Center>
        </Flex>
        <Flex {...style.descriptionContainer}>
          <Text {...style.des}>{currentLangData.app.antchainFoundDes}</Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <>
      <Flex {...style.mainContainer}>{HomeContent()}</Flex>
      <div>{renderSecondGrid()}</div>
      <div>
        <CoreAdvantages />
      </div>
      <Footer />
    </>
  );
};
export default FoodSafety;

const style = {
  mainContainer: {
    padding: [10,10,40],
    height: "100vh",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Underconstruction})`,
  },
  stratgicPartnerLabel: {
    p: 2,
    marginY: 3,
    fontSize: "25px",
    fontWeight: "bold",
    color: "rgb(61,57,58)",
  },
  antChainImage: {
    marginY: 3,
  },
  globalLabel: {
    p: 2,
    fontSize: "40px",
    color: "rgb(61,57,58)",
  },
  topContainer: {
    padding: [5,5,10],
    flexDirection: "column",
  },
  pressReleaseButton: {
    marginY: 3,
    color: "white",
    width: "200px",
    backgroundColor: "rgb(82,125,228)",
  },
  anChainContainer: {
    paddingY:[5,5,0],
    backgroundColor: "white",
    height: ['auto' ,'auto',"50vh"],
    alignItems:['center','center',''],
    flexDirection: ['column','column',"row"],
    justifyContent: ['center','center', "space-around",]
  },
  pressReleaseLabel: {
    paddingRight: 5,
  },
  imageContainer: {
    w: "50%",
    justifyContent: "center",
  },
  image: {
    w: "200px",
    h: "200px",
  },
  des: {
    w: "75%",
    fontSize: "12",
    fontWeight: "bold",
  },
  descriptionContainer: {
    w: "50%",
    alignItems: "center",
  },
};
