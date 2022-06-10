import React from "react";
import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import phone from "../../components/image/phone.svg";
import LangContext from "../../context/languageContext";
import style from "./style";
const RiskManagement = () => {
  const { currentLangData } = React.useContext(LangContext);
  return (
    <Box {...style.mainContainer}>
      <SimpleGrid {...style.gridContainer}>
        <Flex {...style.leftContainer}>
          <Text {...style.secureLabel}>{currentLangData.app.secureUnique}</Text>
          <Box {...style.divider}></Box>
          <Text {...style.solutionLabel}>
            {currentLangData.app.traxSolution}
          </Text>
        </Flex>
        <Flex>
          <Image {...style.phoneImage} src={phone} />
          <Flex {...style.rightContainer}>
            <Text {...style.secureLabel}>
              {currentLangData.app.riskManageMent}
            </Text>
            <Box {...style.divider}></Box>
            <Text {...style.solutionLabel}>
              {currentLangData.app.riskManagementDetail}
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default RiskManagement;
