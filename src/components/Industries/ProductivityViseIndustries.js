import style from "./style";
import React, { useEffect, useRef } from "react";
import Chart from "react-google-charts";
import ReactApexChart from "react-apexcharts";
import { YearMenu } from "../../components/Menu";
import LangContext from "../../context/languageContext";
import { CompanyComparison } from "../../constants/data";
import {
  PieChartOption2,
  pieChartData,
  saledbasedoption,
  options,
  barchartData,
} from "../../constants/data";
import {
  Text,
  Flex,
  SimpleGrid,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AllIndustriesCompare() {
  const history = useHistory();
  const [industries, setIndustries] = React.useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selectedYear, setSelectedYear] = React.useState("");
  const { from } = history.location;
  const handleOnMenuClick = (value) => {
    setSelectedYear(value);
  };
  console.log("history", history);
  const handleonChange = (value, index) => {
    // industries[index] = value;
    setIndustries((_p) => ({ ..._p, [index]: value }));
  };

  const goBack = () => {
    history.goBack();
  };
  const RenderIndustries = ({ value, title }) => {
    return (
      <Flex {...style.industriesComparison}>
        <Text {...style.industryLabel}>
          {currentLangData.app.industry}#{value}
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            {...style.menuButton}
            rightIcon={<TiArrowSortedDown {...style.downButton} />}
          >
            {industries[value]
              ? industries[value]
              : currentLangData.app.selectedIndustry}
          </MenuButton>
          <MenuList>
            {CompanyComparison?.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  onClick={() => handleonChange(item.dep, value)}
                >
                  {item.dep}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>
    );
  };

  return (
    <SimpleGrid {...style.productyVisedIndustriesBox}>
      <Flex {...style.allIndutriesInnerContainer}>
        <Flex>
          <Button onClick={goBack} {...style.backButton}>
            {currentLangData.app.back}
          </Button>
        </Flex>
        <Text {...style.comparedText}>
        { from === 'SaleBased' ? currentLangData.app.saleBasedOnIndustry:currentLangData.app.overAllProductivityBased }
        </Text>
        <Flex {...style.yearMenuFlex}>
          <YearMenu
            value={selectedYear}
            handleOnMenuClick={(value) => handleOnMenuClick(value)}
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          {...style.scrollViewContainer2}
          flexDirection={isMobile ? "column" : "row"}
          id={"container"}
          width={!isMobile ? "1000px" : "90%"}
        >
          {[...Array(5)].map((elementInArray, index) => (
            <RenderIndustries value={index} />
          ))}
        </Flex>
      </Flex>
      <Flex {...style.bottomContainer}>
        <Flex {...style.bottomlabelContainer}>
          <Text>{selectedYear ? selectedYear : ""}</Text>
          <Text {...style.overAllIndustryLabel}>
            {from === "SaleBased"
              ? currentLangData.app.totalIndustrySalesPerformance
              : currentLangData.app.overAllIndustry}
          </Text>
        </Flex>

        {from !== "SaleBased" ? (
          <Chart
            {...style.industryPieChart}
            chartType="PieChart"
            data={pieChartData}
            options={PieChartOption2}
          />
        ) : (
          <ReactApexChart
            options={barchartData.options}
            series={barchartData.series}
            type="line"
            height={350}
          />
        )}
      </Flex>
    </SimpleGrid>
  );
}
