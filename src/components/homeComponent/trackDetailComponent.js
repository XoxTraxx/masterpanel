import React from "react";
import { useHistory } from "react-router";
import theme from "../../config/color";
import LangContext from "../../context/languageContext";

import {
  Text,
  Flex,
  Image,
  Circle,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

export const TrackDetailComponent = ({ src, title, details }) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"sm"}
      width={"70%"}
      textAlign={"center"}
    >
      <Image
        src={src}
        marginX="5"
        objectFit="fix"
        height={["20px", "50px"]}
        width={["20px", "50px"]}
      />
      <Text
        marginTop={5}
        marginBottom={2}
        fontWeight={"bold"}
        fontSize={"14px"}
        color={"#E77477"}
      >
        {title}
      </Text>
      <Text marginX={2} fontWeight={"bold"}>
        {details}
      </Text>
    </Flex>
  );
};

export const DataCircle = ({
  image1,
  image2,
  image3,
  image4,
  textState,
  onMouseEnter1,
  onMouseEnter2,
  onMouseEnter3,
  onMouseEnter4,
  onMouseLeave1,
  onMouseLeave2,
  onMouseLeave3,
  onMouseLeave4,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex height={"600px"}>
      <Circle
        color="white"
        borderWidth={1}
        borderColor={"red"}
        size={isMobile ? "350px" : "450px"}
      >
        <Circle
          color="white"
          size={isMobile ? "240px" : "260px"}
          borderWidth={1}
          borderColor={"red"}
        >
          <Circle
            color="white"
            borderWidth={1}
            display={"fixed"}
            position={"relative"}
            borderColor={"#CBEAEB"}
            size={isMobile ? "300px" : "410px"}
          >
            <Text
              // zIndex={10}
              color={"black"}
              textAlign={"center"}
              position={"absolute"}
              alignItems={"center"}
              fontSize={isMobile ? 9 : 12}
              width={isMobile ? "150px" : "200px"}
            >
              {textState}
            </Text>

            <Circle
              // zIndex={1}
              right={"30px"}
              display={"fixed"}
              bottom={"120px"}
              position={"relative"}
              size={isMobile ? "80px" : "120px"}
              _hover={{
                background: "#73C5C7",
                color: "teal.500",
              }}
              onMouseEnter={() => {
                onMouseEnter1 && onMouseEnter1();
              }}
              onMouseLeave={() => {
                onMouseLeave1 && onMouseLeave1();
              }}
            >
              <Image src={image1} />
            </Circle>

            <Circle
              // zIndex={1}
              left={isMobile ? "160px" : "200px"}
              display={"fixed"}
              bottom={"120px"}
              position={"relative"}
              size={isMobile ? "80px" : "120px"}
              _hover={{
                background: "#73C5C7",
                color: "teal.500",
              }}
              onMouseEnter={() => {
                onMouseEnter2 && onMouseEnter2();
              }}
              onMouseLeave={() => {
                onMouseLeave2 && onMouseLeave2();
              }}
            >
              <Image src={image2} />
            </Circle>

            <Circle
              // zIndex={1}
              top={"120px"}
              display={"fixed"}
              position={"relative"}
              size={isMobile ? "80px" : "120px"}
              right={isMobile ? "190px" : "270px"}
              _hover={{
                background: "#73C5C7",
                color: "teal.500",
              }}
              onMouseEnter={() => {
                onMouseEnter3 && onMouseEnter3();
              }}
              onMouseLeave={() => {
                onMouseLeave3 && onMouseLeave3();
              }}
            >
              <Image src={image3} />
            </Circle>

            <Circle
              // zIndex={1}
              top={"120px"}
              display={"fixed"}
              position={"relative"}
              right={isMobile ? "0px" : "40px"}
              size={isMobile ? "80px" : "120px"}
              _hover={{
                background: "#73C5C7",
                color: "teal.500",
              }}
              onMouseEnter={() => {
                onMouseEnter4 && onMouseEnter4();
              }}
              onMouseLeave={() => {
                onMouseLeave4 && onMouseLeave4();
              }}
            >
              <Image src={image4} />
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Flex>
  );
};

export const LearnMoreButton = () => {
  let history = useHistory();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);

  return (
    <Flex
      marginTop={isMobile ? 0 : -20}
      flexDirection={"column"}
      marginStart={isMobile ? 5 : 20}
    >
      <Text
        color={"white"}
        fontWeight={"bold"}
        marginBottom={"3"}
        fontSize={isMobile ? "28px" : "26px"}
      >
        {currentLangData.app.increaseYourRevenue}
      </Text>
      <Text
        color={"white"}
        fontWeight={"extrabold"}
        fontSize={isMobile ? "28px" : "42px"}
      >
        {currentLangData.app.optimizeYour}
      </Text>
      <Flex flexDirection={"row"}>
        <Text
          color={"white"}
          fontWeight={"bold"}
          fontSize={isMobile ? "30px" : "42px"}
        >
          {currentLangData.app.supplyChain}
        </Text>
        <Text
          color={"red"}
          marginLeft={1}
          fontWeight={"bold"}
          fontSize={isMobile ? "32px" : "44px"}
        >
          {currentLangData.app.trax}
        </Text>
      </Flex>
      <Text color={"transparent"}>-</Text>
      <Text color={"transparent"}>-</Text>
      <Flex width={isMobile ? "60%" : "100%"}>
        <Flex
          fontSize={isMobile ? "16px" : "18px"}
          flexDirection={isMobile ? "column" : "row"}
        >
          <Text color={"white"} fontWeight={"bold"}>
            {currentLangData.app.wantsToTrack}
          </Text>

          {isMobile ? null : <Text color={"transparent"}>-</Text>}
          <Text color={"red"}>{currentLangData.app.supplyChainSeamlessly}</Text>
        </Flex>
      </Flex>

      <Flex>
        <Button
          paddingY={2}
          marginTop={5}
          paddingX={isMobile ? 12 : 14}
          paddingY={isMobile ? 4 : 8}
          fontSize={isMobile ? "12px" : "16px"}
          onClick={() => history.push(`/FoodSafety`)}
          color={theme.customColors.common[100]}
          backgroundColor={theme.customColors.defaultColors.accent}
        >
        {currentLangData.app.learnMore}
        </Button>
      </Flex>
    </Flex>
  );
};

export const MissionNVision = ({ title, details }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      width={isMobile ? "350px" : "500px"}
      height={isMobile ? "400px" : null}
      justifyContent={"center"}
      flexDirection={"column"}
      marginTop={isMobile ? 10 : 0}
      marginStart={isMobile ? 5 : 0}
      // alignItems={"center"}
    >
      <Text fontWeight={"bold"} fontSize={isMobile ? "x-large" : "xx-large"}>
        {title}
      </Text>
      <Flex
        borderWidth={2}
        marginTop={2}
        width={"100px"}
        borderColor={"red"}
      ></Flex>
      <Text
        marginY={5}
        height={isMobile ? "100%" : null}
        width={isMobile ? "100%" : null}
      >
        {details}
      </Text>
    </Flex>
  );
};

export const renderText = ({ text, title }) => {
  return (
    <Flex flexDirection={"column"}>
      <Text fontWeight={"bold"}>{title}</Text>
      <Text>{text}</Text>
    </Flex>
  );
};
