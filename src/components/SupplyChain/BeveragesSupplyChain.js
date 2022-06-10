import React from "react";
import { Box, Flex, Text, Center } from "@chakra-ui/react";
import style from "./style";
import LangContext from "../../context/languageContext";
const BeveragesSupplyChain = () => {
  const { currentLangData } = React.useContext(LangContext);
  return (
    <Flex id={"Beverages"} {...style.beveragesMainDiv}>
      <Center>
        <Text {...style.foodLabel}>{currentLangData.app.foodandbeverages}</Text>
      </Center>
      <Center>
        <Box {...style.divider}></Box>
      </Center>
      <Center>
        <Text {...style.beveragesDes}>
          {currentLangData.app.foodBebverages}
        </Text>
      </Center>
      <Center>
        <Text {...style.frameWorkLabel}>{currentLangData.app.frameWork}</Text>
      </Center>
      <Center>
        <Box {...style.divider}></Box>
      </Center>
    </Flex>
  );
};

const BeveragesSupplyChainComponet = React.memo(BeveragesSupplyChain);
export default BeveragesSupplyChainComponet;
