import style from "./style";
import { YearMenu } from "../Menu";
import Chart from "react-google-charts";
import { useHistory } from "react-router-dom";
import React, { Component, useContext } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import LangContext from "../../context/languageContext";
import { PieChartOption, pieChartData } from "../../constants/data";
const ProductivityBasedIndustreis = () => {
  const { currentLangData } = useContext(LangContext);
  const [selectedYear, setSelectedYear] = React.useState("");

  const handleOnMenuClick = (value) => {
    setSelectedYear(value);
  };
  const history = useHistory();

  const gotoDeatilScreen = () => {
    history.push({
      pathname: "ProductivityBasedIndustries",
      from: "ProductyvityBase",
    });
  };

  return (
    <Box {...style.mainContainerBottom} display={{ md: "flex" }}>
      <Text {...style.heading}>
        {currentLangData.app.overAllProductivityBased}
      </Text>
      <Box {...style.pieChartContainer}>
        <YearMenu
          value={selectedYear}
          handleOnMenuClick={(value) => handleOnMenuClick(value)}
        />
        <Chart
          {...style.pieChart}
          chartType="PieChart"
          data={pieChartData}
          options={PieChartOption}
        />
      </Box>
      <Center {...style.midContainer}>
        <Text onClick={gotoDeatilScreen} cursor={"pointer"}> {currentLangData.app.more} </Text>
      </Center>
    </Box>
  );
};
let ProductivityBasedIndustry = React.memo(ProductivityBasedIndustreis);
export default ProductivityBasedIndustry;
