import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import style from "./style";
import tracibilityImages from '../../components/image/tracibilityImages.svg'
import LangContext from "../../context/languageContext";
const SupplyChainTracibility = () => {
  const { currentLangData } = React.useContext(LangContext);
  return (
    <Flex id={'food'}  {...style.tracibilityContainer}>
   <Image {...style.tracibilityImage} src={tracibilityImages} />
    </Flex>
  );
};

export default SupplyChainTracibility;
