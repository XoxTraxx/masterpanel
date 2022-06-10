import React from "react";
import style from "./style";
import Chart from "react-google-charts";
import { LineChartData, saledbasedoption } from "../../constants/data";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  CompanyComparison,
  pieChartData,
  PieChartOption3,
} from "../../constants/data";
import {useHistory} from  'react-router-dom'
import LangContext from "../../context/languageContext";
import { Flex, Text, SimpleGrid, Button, Box, Center } from "@chakra-ui/react";
const Performance=()=> {
  const history=useHistory()
  const { currentLangData } = React.useContext(LangContext);
  const saleBaseRevinew = (title) => {
    return (
      <Box  {...style.bottomContainer}>
        <Text {...style.title}>{title}</Text>
        {CompanyComparison.map((item, index) => {
          let itemLabel = `Prdouct # ${index + 1} ($${item.value})`;
          return (
            <>
              <Box key={index} {...style.progressInnerContainer}>
                <ProgressBar
                  {...style.progressBar}
                  bgColor={item.color}
                  customLabel={itemLabel}
                  completed={item.value}
                  animateOnRender
                ></ProgressBar>
              </Box>
            </>
          );
        })}
        <Center onClick={()=>history.push('/CompanySalesDetails')} cursor={"pointer"} {...style.midContainer}>
          {currentLangData.app.more}
        </Center>
      </Box>
    );
  };
  const saledByLocationandType = (title) => {
    return (
      <Box {...style.bottomContainer}>
        <Text {...style.title}>{title}</Text>
        <Chart
          {...style.industryPieChart}
          chartType="PieChart"
          data={pieChartData}
          
          options={PieChartOption3}
        />
        <Center onClick={()=>history.push('/CompanySalesDetails')} cursor={"pointer"} {...style.midContainer}>
          {currentLangData.app.more}
        </Center>
      </Box>
    );
  };
  return (
    <Flex {...style.chartDataContainer}>
      <SimpleGrid {...style.gridContainer}>
        <Chart
          {...style.lineChart}
          chartType="LineChart"
          data={LineChartData}
          options={{
            legend: "none",
          
          }}
        />
      </SimpleGrid>
      <SimpleGrid {...style.bottomGrid}>
        {saleBaseRevinew(currentLangData.app.salesByProduct)}
        {saledByLocationandType(currentLangData.app.salesByLocations)}
        {saleBaseRevinew(currentLangData.app.salesbyRevnue)}
        {saledByLocationandType(currentLangData.app.saleByType)}
      </SimpleGrid>
    </Flex>
  );
}

export default Performance;
