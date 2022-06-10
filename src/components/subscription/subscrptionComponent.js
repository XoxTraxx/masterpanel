import React, { useState, useContext, useEffect } from "react";
import styles from "../subscription/subscriptionStyles";
import { CheckIcon } from "@chakra-ui/icons";

import {
  Text,
  Flex,
  Circle,
  Spacer,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export const Subscriptions = ({
  // const Subscription = ({
  color,
  title1,
  title3,
  color3,
  onClick,
  mapping,
  mainTitle,
  mapping1,
  backgroundColor1,
  backgroundColor3,
  colorTitle,
}) => {
  const [shado, setShado] = React.useState("");
  return (
    <Flex
      marginY={1}
      width={"20%"}
      alignItems={"center"}
      flexDirection={"column"}
      onMouseEnter={() => setShado("dark-lg")}
      onMouseLeave={() => setShado("sm")}
    >
      <Flex
        padding={5}
        // color={color}
        width={"250px"}
        height={"400px"}
        // width={"100px"}

        borderRadius={"10"}
        flexDirection={"column"}
        backgroundColor={"white"}
        boxShadow={"lg"}
        borderRightWidth={1}
        borderLeftWidth={1}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "black",
            borderRadius: "24px",
          },
        }}
        boxShadow={shado}
      >
        <Flex {...styles.centeredNColumned}>
          <Text
            {...styles.ourEco}
            fontSize={"x-large"}
            fontWeight={"normal"}
            color={colorTitle}
          >
            {mainTitle}
          </Text>
          <Flex {...styles.redLine} borderColor={colorTitle}></Flex>
        </Flex>
        <Flex flexDirection={"column"}>
          {mapping?.map((value, key) => {
            //     console.log(key,"valueMapping",value),
            return (
              <Text fontSize={"12px"} key={key}>
                {value}
              </Text>
            );
          })}
        </Flex>
        <Flex flexDirection={"column"} marginTop={4}>
          <Text fontSize={"12px"} fontWeight={"bold"} marginY={1}>
            Benefits
          </Text>
          <Flex flexDirection={"column"}>
            {mapping1?.map((value, key) => {
              //     console.log(key,"valueMapping",value),
              return (
                <Text fontSize={"12px"} key={key}>
                  {value}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as={"button"}
        color={color3}
        marginTop={5}
        height={"50px"}
        width={"200px"}
        cursor={"pointer"}
        fontSize={"14px"}
        borderRadius={"5"}
        textAlign={"center"}
        fontWeight={"bold"}
        alignItems={"center"}
        boxShadow={"dark-lg"}
        justifyContent={"center"}
        backgroundColor={backgroundColor3}
        onClick={() => onClick && onClick()}
      >
        Select
      </Flex>
    </Flex>
  );
};

export const RenderSubDetails = ({ mainTitle, subTitle }) => {
  return (
    <Flex {...styles.centeredFlex}>
      <Flex
        {...styles.centeredNColumned}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          {...styles.ourEco}
          fontWeight={"normal"}
          fontSize={["large", "large", "x-large"]}
        >
          {mainTitle}
        </Text>
        <Text
          {...styles.ourEco}
          marginTop={0}
          fontWeight={"normal"}
          fontSize={["large", "large", "x-large"]}
        >
          {subTitle}
        </Text>
        <Flex {...styles.redLine}></Flex>
      </Flex>
      {/* <Flex {...styles.headFlex}>
        <Flex {...styles.header}>
          <Flex {...styles.package}>
            <Flex {...styles.packageMain}>PACKAGE</Flex>
            <Flex {...styles.centeredFlex}>DETAILS</Flex>
          </Flex>
          <Spacer />
          <Flex paddingX={1}></Flex>
          <Flex {...styles.choiceFlex}>CHOICE</Flex>
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export const SuccessBox = ({ title }) => {
  return (
    // <Flex flex={1} marginY={1} flexDirection={"column"} alignItems={"center"}>
    //   <Flex width={"65%"} color={"white"} marginLeft={20}>
    <Flex
      flex={1}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* <Flex
            flex={2.9}
            // boxSize={"180px"}
            borderRadius={"10"}
            boxShadow={"dark-lg"}
            // backgroundColor={backgroundColor1}
            paddingY={2}
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"blue.200"}
          > */}
      <Circle size="40px" bg="green.400" color="white">
        <CheckIcon w={7} h={9} color={"white"} />
      </Circle>
      <Flex marginX={2}></Flex>
      <Text
        color="black"
        fontSize={"24px"}
        textAlign="center"
        fontWeight={"bold"}
      >
        {title}
      </Text>
      {/* </Flex> */}
    </Flex>
  );
};
// export default Subscription
