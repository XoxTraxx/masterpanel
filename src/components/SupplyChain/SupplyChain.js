import React from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import product from "../../components/image/product.svg";
import blockChain from "../../components/image/bcT.svg";
import { blockChainData } from "../../constants/data";
const SupplyChain = () => {
  return (
    <Box  paddingY={20} bg={"rgb(250,250,250)"}>
      <Center>
        <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>
          WHY ARE SUPPLY CHAIN TRACEABILITY TOOLS NEEDED?
        </Text>
      </Center>
      <Center>
        <Box marginY={2} backgroundColor={"red"} paddingX={20} height={1}></Box>
      </Center>
      <Center>
        <Image marginTop={20} src={product} />
      </Center>
      <Center>
        <Text
          color={"black"}
          textAlign={"center"}
          fontSize={14}
          marginTop={10}
          w={"60%"}
        >
          Other than that, using technology to facilitate traceability can
          provide an immense data storage that can be used for other
          <br /> purposes to help improve your business and operational
          processes. In addition, having access to this real time data can help
          you to improve and streamline your operation and business processes.
        </Text>
      </Center>
      <Center>
        <Text
          h={"40px"}
          style={{
            fontSize: 25,
            color: "black",
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          BLOCKCHAIN TRACEABILITY
        </Text>
      </Center>
      <Center>
        <Box marginY={2} backgroundColor={"red"} paddingX={20} height={1}></Box>
      </Center>
      <Center>
        <Image marginTop={20} src={blockChain} />
      </Center>
      <Center>
        <Flex marginTop={30}>
          {blockChainData.map((item, index) => {
            return (
              <Flex borderColor={"red"} borderLeftWidth={index === 0 ? 0 : 1}>
                {" "}
                <Text
                  marginX={4}
                  color={"black"}
                  w={"200px"}
                  style={{ fontSize: 12 }}
                  key={index}
                >
                  {item}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Center>
    </Box>
  );
};

export default SupplyChain;
