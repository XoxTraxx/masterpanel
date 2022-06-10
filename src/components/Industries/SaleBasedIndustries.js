import React, { Component, useContext, } from "react";
import style from "./style";
import { YearMenu } from "../Menu";
import Chart from "react-google-charts";
import { useHistory } from "react-router-dom";
import { LineChartData } from "../../constants/data";
import { Box, Center, Text,useMediaQuery } from "@chakra-ui/react";
import LangContext from "../../context/languageContext";
const SaleBasedIndustries = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = useContext(LangContext);
  const [selectedYear, setSelectedYear] = React.useState("");
  const history = useHistory();
  const gotoDeatilScreen = () => {
    history.push({
      pathname:'ProductivityBasedIndustries',
      from:'SaleBased'
    })
  };

  const handleOnMenuClick = (value) => {
    setSelectedYear(value);
  };

  return (
    <Box over overflowY={isMobile?'scroll':'scroll'} {...style.mainContainer} display={{ md: "flex" }}>
      <Text {...style.heading}>{currentLangData.app.overAllSale}</Text>
      <Box {...style.detailContainer}>
        <YearMenu
          value={selectedYear}
          handleOnMenuClick={(value) => handleOnMenuClick(value)}
        />
        <Chart
          {...style.chart}
          chartType="LineChart"
          data={LineChartData}
          options={{
            legend: "none",
          }}
        />
      </Box>
      <Center {...style.midContainer}>
        <Text cursor={"pointer"} onClick={gotoDeatilScreen}> {currentLangData.app.more} </Text>
      </Center>
    </Box>
  );
};
let SaleBasedIndustriesRender = React.memo(SaleBasedIndustries);
export default SaleBasedIndustriesRender;
