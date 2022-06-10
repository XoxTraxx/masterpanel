import React from "react";
import style from "./style";
import theme from "../../config/color";
import Chart from "react-google-charts";
import { DateMenu } from "../../components/Menu";
import "react-datepicker/dist/react-datepicker.css";
import LangContext from "../../context/languageContext";
import { salesType, LineChartData, saleData } from "../../constants/data";
import {
  SimpleGrid,
  Button,
  Flex,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import {useHistory} from  'react-router-dom'

const AllSalesDetails = () => {
  const history=useHistory()
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndtDate] = React.useState(new Date());
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selectedSalesType, setSelectedSalesType] = React.useState("Products");
  return (
    <Flex justifyContent={isMobile ? "center" : "start"}>
      <SimpleGrid {...style.mainConatiner}>
        <Flex>
          <Button onClick={()=>history.goBack()} {...style.backButton}>{currentLangData.app.back}</Button>
        </Flex>{" "}
        <Text>{currentLangData.app.sales}</Text>
        <Text {...style.companyNameLabel}>
          {currentLangData.app.overSeaMoonCake}
        </Text>
        <Flex>
          <Box {...style.dateMenuContainer}>
            <Text {...style.dateLabel}>{currentLangData.app.startDate}</Text>
            <DateMenu
              onChange={(date) => setStartDate(date)}
              selected={startDate}
              endDate={endDate}
              startDate={startDate}
            />
          </Box>
          <Box {...style.dateMenuContainer}>
            <Text {...style.dateLabel}>{currentLangData.app.endDate}</Text>
            <DateMenu
              onChange={(date) => setEndtDate(date)}
              selected={endDate}
              minDate={startDate}
              endDate={endDate}
            />
          </Box>
          <Box {...style.dateMenuContainer}>
            <Button {...style.searchButton}>{currentLangData.app.search}</Button>
          </Box>
        </Flex>
        <Chart
          style={{ height: "300px", width: isMobile ? "300px" : "100%" }}
          chartType="LineChart"
          data={LineChartData}
          options={{
            legend: "none",
          }}
        />
        <Flex
          flexDirection={isMobile ? "column" : "row"}
          {...style.buttonContainer}
        >
          {salesType.map((item, index) => {
            let selected = item === selectedSalesType;
            return (
              <Button
                color={
                  selected
                    ? theme.customColors.white[100]
                    : theme.customColors.black[100]
                }
                bg={selected ? "#5a9391" : "rgb(247,247,247)"}
                onClick={() => setSelectedSalesType(item)}
                {...style.typeButton}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Text {...style.salesLabel}>
          {currentLangData.app.salesByAllRevenue}
          {selectedSalesType}
        </Text>
        <Flex {...style.typeConatiner}>
          <Text>{selectedSalesType}</Text>
          <Text>{currentLangData.app.sales}</Text>
          <Text>{currentLangData.app.unitSold}</Text>
        </Flex>
        <Box {...style.typMapParentContaner}>
          {saleData.map((item, index) => {
            return (
              <Flex {...style.salesInnerContainer}>
                {selectedSalesType === "Type" ? (
                  <Text>online</Text>
                ) : (
                  <>
                    <Flex>
                      <Box
                        display={
                          selectedSalesType === "Products" ||
                          selectedSalesType === "Revenue"
                            ? "block"
                            : "none"
                        }
                        {...style.emptyBox}
                      ></Box>
                      <Text {...style.typeTitle}>
                        {selectedSalesType}#{index + 1}
                      </Text>
                    </Flex>
                  </>
                )}
                <Text>{item.sales}</Text>
                <Text>{item.unitSold}</Text>
              </Flex>
            );
          })}
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default AllSalesDetails;
