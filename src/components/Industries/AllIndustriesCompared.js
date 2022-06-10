import React, { useRef } from "react";
import style from "./style";
import { YearMenu } from "../../components/Menu";
import ProgressBar from "@ramonak/react-progress-bar";
import LangContext from "../../context/languageContext";
import { CompanyComparison } from "../../constants/data";
import {
  Text,
  Flex,
  SimpleGrid,
  Button,
  Icon,
  Grid,
  Box,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import {useHistory} from 'react-router-dom'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function AllIndustriesCompare() {
  const history=useHistory()
  const ref=React.createRef(null)
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selectedYear, setSelectedYear] = React.useState("");
  const [selectedIndustry, setSelectedIndustry] = React.useState("");

  const handleOnMenuClick = (value) => {
    setSelectedYear(value);
  };

  const scrollItem = () => {
    document.getElementById("container").scrollLeft += 50;
  };

  const scrollItemRight = (scroll) => {
    document.getElementById("container").scrollLeft -= 200;
    document.getElementById("container").scrollTo({top:0,behavior:'smooth'})
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <SimpleGrid minW={['100%','100%','90%','100%']} alignSelf={'center'} {...style.allIndutriesMain}>
      <Flex {...style.allIndutriesInnerContainer}>
        <Flex>
          <Button onClick={goBack} {...style.backButton}>{currentLangData.app.back}</Button>
        </Flex>
        <Text {...style.comparedText}>
          {currentLangData.app.allHistoryCompare}
        </Text>
        <Flex {...style.yearMenuFlex}>
          <YearMenu
            value={selectedYear}
            handleOnMenuClick={(value) => handleOnMenuClick(value)}
          />
        </Flex>
      </Flex>
      <Flex>
        <Center>
          <MdKeyboardArrowLeft onClick={scrollItemRight} as={MdKeyboardArrowLeft} size={40} />
        </Center>
       
      
        <Flex
          {...style.scrollViewContainer}
          // style={{scrollBehavior:"smooth"}}
          flexDirection={isMobile ? "column" : "row"}
          id={"container"}
          width={!isMobile ? "900px" : "90%"}
          columns={5}
          spacing={6}
          ref={ref}
          alignSelf={'center'}
        >
          {CompanyComparison.map((item, index) => {
            let selectedItem = item.dep === selectedIndustry;
            return (
              <Flex
                paddingX={35}
                paddingY={10}
                onClick={() => setSelectedIndustry(item.dep)}
                borderWidth={2}
                borderColor={selectedItem ? "#459795" : "gray"}
                key={index}
                marginTop={3}
                {...style.agriCultralContainer}
              >
                <Text
                  {...style.depLabel}
                >
                  {item.dep}
                </Text>
                <Text {...style.valueLabel}>
                  ${item.value}
                  <span style={style.unitLabels}> {item.unit} </span>
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Center>
          {" "}
          <MdKeyboardArrowRight
            onClick={scrollItem}
            as={MdKeyboardArrowRight}
            size={40}
          />{" "}
        </Center>
      </Flex>

      <SimpleGrid {...style.progressContainer}>
        <Text {...style.industriesLabel}>{currentLangData.app.industries}</Text>
        <Text {...style.agriCultureLabel}>
          {currentLangData.app.agriCulture}
        </Text>
        {CompanyComparison.map((item, index) => {
          let itemLabel = item.dep + " " + " " + `($${item.value}${item.unit})`;
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
      </SimpleGrid>
    </SimpleGrid>
  );
}
