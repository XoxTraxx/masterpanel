import style from "./style";
import { YearMenu } from "../Menu";
import { useHistory } from "react-router-dom";
import React, { Component, useContext } from "react";
import LangContext from "../../context/languageContext";
import { TredingCompanies } from "../../constants/data";
import { Flex, Text, Box, SimpleGrid, Center,useMediaQuery } from "@chakra-ui/react";

const TopPerformingIndustries = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const ref = React.createRef();
  const { currentLangData } = useContext(LangContext);
  const [selectedYear, setSelectedYear] = React.useState("");
  const handleOnMenuClick = (value) => {
    setSelectedYear(value);
  };

  const history = useHistory();
  const gotoDeatilScreen = () => {
    history.push({
      pathname: "AllIndustriesCompare",
      from: "ProductyvityBase",
    });
  };

  const TrendingDetails = () => {
    return (
      <SimpleGrid columns={3} {...style.detailInnerContainer}>
        {TredingCompanies.map((item, index) => {
          return (
            <>
              <Center {...style.centerDetailContainer}>
                <Flex
                  {...style.circleContainer}
                  width={index === 1 ? "100px" : "80px"}
                  height={index === 1 ? "100px" : "80px"}
                  boxShadow={index === 1 ? "lg" : "none"}
                >
                  <Text {...style.unit}>
                    <span style={style.dollarLabel}>$</span>
                    <span style={style.priceLabe}>{item.value}</span>
                  </Text>
                  <Text {...style.amount}>{item.unit}</Text>
                </Flex>
                <Text {...style.depLabel2}>{item.dep}</Text>
              </Center>
            </>
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <Box overflowY={isMobile ?'scroll':'scroll'} {...style.mainContainer} display={{ md: "flex" }}>
      <Text {...style.heading}>{currentLangData.app.topPerformIndstries}</Text>
      <Box {...style.detailContainer}>
        <YearMenu
          value={selectedYear}
          handleOnMenuClick={(value) => handleOnMenuClick(value)}
        />
        <TrendingDetails />
      </Box>
      <Center {...style.midContainer}>
        <Text cursor={"pointer"} onClick={gotoDeatilScreen}>
          {currentLangData.app.more}
        </Text>
      </Center>
    </Box>
  );
};
const TopPerformingIndustriesRender = React.memo(TopPerformingIndustries);
export default TopPerformingIndustriesRender;
