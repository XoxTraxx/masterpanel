import React from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  Icon,
  Heading,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaTruckMoving,
  FaNutritionix,
  FaArrowDown,
} from "react-icons/fa";
import { useState } from "react";
// -----------------------------------
import Footer from "../Footer/Footer";
import TraxImage from "../image/cubes.svg";
import AboutImage from "../image/about.png";
import { ImStatsDots } from "react-icons/im";
import { RiTempHotLine } from "react-icons/ri";
import arrowDown from "../image/arrowDown.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import SupplyChain from "../SupplyChain/SupplyChain";
import Contact from "../../components/Contact/Contact";
import LangContext from "../../context/languageContext";
import RiskManagement from "../ManageMent/RiskManagement";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdLocationPin, MdAnalytics } from "react-icons/md";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// ----------------------------------
import Location from "../image/location.png";
import RedLocation from "../image/RedLocation.png";
import ingredients from "../image/ingredient.png";
import redproduct from "../image/RedIngredient.png";
import Calender from "../image/calender.png";
import RedCalender from "../image/RedCalender.png";
import Data from "../image/DataAnalytics.png";
import RedData from "../image/RedData.png";
import Nutrition from "../image/nutrition.png";
import RedNutrition from "../image/RedNutrition.png";
import Safety from "../image/tick.png";
import RedSafety from "../image/RedTick.png";
import Temp from "../image/temprature.png";
import RedTemp from "../image/RedTemprature.png";
import Truck from "../image/truck.png";
import RedTruck from "../image/RedTruck.png";

// .....................................
// import { MdLocationPin, MdRotate90DegreesCcw } from "react-icons/md";
// import { RiTempHotLine } from "react-icons/ri";
// import { AiOutlineSafetyCertificate } from "react-icons/ai";
// import { ImStatsDots } from "react-icons/im";
// import TraxImage from "../image/Trax-background-06.png";

const Taas = () => {
  const { currentLangData } = React.useContext(LangContext);
  const [changeImage, setChangeImage] = React.useState(false);
  const [changeImage1, setChangeImage1] = React.useState(false);
  const [changeImage2, setChangeImage2] = React.useState(false);
  const [changeImage3, setChangeImage3] = React.useState(false);
  const [changeImage4, setChangeImage4] = React.useState(false);
  const [changeImage5, setChangeImage5] = React.useState(false);
  const [changeImage6, setChangeImage6] = React.useState(false);
  const [changeImage7, setChangeImage7] = React.useState(false);

  const taastabs=[
    {
      title: "PRODUCT ORIGIN",
      active: false,
      content:
        "For cold type products like vaccines or food, which need to be shipped at certain temperatures.",
      ref: React.createRef(),
      textRef: React.createRef(),
      id: 1,
      icon: (
        <Image
          src={changeImage ? RedLocation : Location}
          boxSize="50px"
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "DATES OF PROCESSING",
      active: false,
      id: 1,
      textRef: React.createRef(),
      content: "Date of the  product being manufactured,processed and packaged",
      ref: React.createRef(),
      icon: (
        <Image
          src={changeImage1 ? RedCalender : Calender}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "PRODUCT INGREDIENTS",
      active: false,
      textRef: React.createRef(),
      ref: React.createRef(),
      content: "Product ingredient details or specifications.",
      icon: (
        <Image
          src={changeImage2 ? redproduct : ingredients}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "NUTRITIONAL INFORMATION",
      active: false,
      textRef: React.createRef(),
      content: "For foods, nutritional contents will be stated.",
      ref: React.createRef(),
      icon: (
        <Image
          src={changeImage3 ? RedNutrition : Nutrition}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "PRODUCT SAFETY",
      active: false,
      textRef: React.createRef(),
      ref: React.createRef(),
      content:
        "Product additional info for safety standards and requirements. For example,facemask safety standards.",
      icon: (
        <Image
          src={changeImage4 ? RedSafety : Safety}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "TEMPERATURE SENSITIVE HANDLING",
      active: false,
      textRef: React.createRef(),
      ref: React.createRef(),
      content:
        "For cold type products like vaccines or food, which need to be shipped at certain temperatures.",
      icon: (
        <Image
          src={changeImage5 ? RedTemp : Temp}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "PRODUCT JOURNEY",
      textRef: React.createRef(),
      ref: React.createRef(),
      content:
        "Product’s end to  end traceability  from its origin,  logistic and seller",
      icon: (
        <Image
          src={changeImage6 ? RedTruck : Truck}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
    {
      title: "DATA ANALYTICS",
      ref: React.createRef(),
      textRef: React.createRef(),
      content:
        "Users can check on their supply chains and gather data at each part of the product journey to the consumers.",
      icon: (
        <Image
          src={changeImage7 ? RedData : Data}
          boxSize={"50px"}
          objectFit="contain"
        ></Image>
      ),
    },
  ];
  const [productimage, Setproductimage] = useState(() => {});

  const onMouseEnter = (ref, iref, index) => {
    if (index == 0) {
      setChangeImage(true);
    }
    if (index == 1) {
      setChangeImage1(true);
    }
    if (index == 2) {
      setChangeImage2(true);
    }
    if (index == 3) {
      setChangeImage3(true);
    }
    if (index == 4) {
      setChangeImage4(true);
    }
    if (index == 5) {
      setChangeImage5(true);
    }
    if (index == 6) {
      setChangeImage6(true);
    }
    if (index == 7) {
      setChangeImage7(true);
    }
    console.log("ref", ref);
    iref.current.style.opacity = 1;
    ref.current.style.color = "red";
  };
  const onMouseLeave = (ref, iref) => {
    setChangeImage(false);
    setChangeImage1(false);
    setChangeImage2(false);
    setChangeImage3(false);
    setChangeImage4(false);
    setChangeImage5(false);
    setChangeImage6(false);
    setChangeImage7(false);
    ref.current.style.color = "gray";
    iref.current.style.opacity = 0;
  };
  return (
    <Flex
      // backgroundImage={TraxImage}
      // backgroundColor={"black"}
      // paddingY={10}
      // height={"100vh"}
      flexDirection={"column"}
    >
      <Flex {...style.mainFlex}>
        <Text {...style.taasLabel}>{currentLangData.app.taas}</Text>
        <Text {...style.tassServicesLabel}>
          {currentLangData.app.taasAsServices}
        </Text>
        <Flex src={arrowDown} {...style.circle}>
          <Link to="CONNECT" spy={true} smooth={true} duration={500}>
            <AiOutlineArrowDown {...style.arrowDownButton} />
          </Link>
        </Flex>
      </Flex>
      <Box {...style.mainContainer}>
        <Center>
          <Text color={"black"} paddingY={5} fontSize={25}>
            CONNECT YOUR SUPPLY CHAINS IN A WHOLE NEW WAY
          </Text>
        </Center>
        <Center>
          <Box
            marginY={2}
            backgroundColor={"red"}
            paddingX={20}
            height={1}
          ></Box>
        </Center>
        {
          <Center {...style.mainmenuflex}>
            <Flex maxW={window.innerWidth} {...style.menuflex}>
              {taastabs.map((item, index) => {
                return (
                  <>
                    <Flex {...style.innerBox}>
                      <Flex
                        onMouseEnter={() =>
                          onMouseEnter(item.ref, item.textRef, index)
                        }
                        onMouseLeave={() =>
                          onMouseLeave(item.ref, item.textRef)
                        }
                        style={{ flexDirection: "column" }}
                      >
                        <Text {...style.tabLabel}>{item.title} </Text>

                        <Box ref={item.ref} {...style.iconContainer}>
                          {item.icon}
                        </Box>
                      </Flex>
                    </Flex>
                    <Flex {...style.noindex}>
                      <Text>{index + 1}</Text>
                    </Flex>
                  </>
                );
              })}
              {taastabs.map((item, index) => {
                return (
                  <Center>
                    <Flex {...style.arrow}>
                      <Text {...style.arrowtext}>{index + 1}</Text>
                    </Flex>
                  </Center>
                );
              })}
            </Flex>

            <Flex maxW={window.innerWidth} {...style.contentflex}>
              {taastabs.map((item, index) => {
                return (
                  <Flex
                    // key={index}
                    // padding={4}
                    {...style.textBox}
                    onMouseEnter={() => onMouseEnter(item.ref, item.textRef)}
                    onMouseLeave={() => onMouseLeave(item.ref, item.textRef)}
                  >
                    <Center>
                      <Box ref={item.textRef} {...style.bottomntainer}>
                        <Text {...style.textcontent}>{item.content}</Text>
                      </Box>
                    </Center>
                  </Flex>
                );
              })}
            </Flex>
          </Center>
        }
      </Box>
      <>
        {/* <RenderMenu /> */}
        <SupplyChain />
        <RiskManagement />
        <Contact />
        <Footer />
      </>
    </Flex>
  );
};

const style = {
  circle: {
    mt: 5,
    bg: "red",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    // height: "70vh",
    width: "100%",
    paddingY: 20,
    backgroundColor: "white",
  },
  innerBox: {
    backgroundColor: "black",
    // flexDirection: "row",
    padding: 3,
    width: "90%",
  },
  menuflex: {
    padding: 3,
    width: "80%",
    flexDirection: ["column", "column", "row"],
  },
  tabContainer: {
    fontSize: 15,
    minW: "100px",
    flexDirection: "column",
    borderBottomWidth: 0,
  },
  tabLabel: {
    height: "90px",
    paddingY: 4,
    noOfLines: 3,
    color: "white",
    fontWeight: "bold",
  },
  tabIndex: {
    color: "gray",
    paddingLeft: 12,
    backgroundColor: "red",
    rotate: "90deg",
  },
  iconContainer: {
    color: "gray",
  },
  bottomntainer: {
    opacity: 0,
    fontSize: 12,
    noOfLines: 5,
    color: "black",
  },
  bottomConatiner2: {},
  globalChain: {
    paddingY: 5,
    fontSize: 25,
    color: "black",
  },
  divider: {
    height: 1,
    marginY: 2,
    paddingX: 20,
    backgroundColor: "red",
  },
  mainFlex: {
    paddingY: 10,
    paddingX: 20,
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${TraxImage})`,
  },
  taasLabel: {
    color: "white",
    fontSize: [, 15, 15, "30"],
    fontWeight: "900",
  },
  tassServicesLabel: {
    color: "white",
    fontSize: [20, 20, "45"],
    fontWeight: "bold",
  },
  circle: {
    mt: 5,
    bg: "red",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowDownButton: {
    size: 30,
    color: "white",
  },
  // ---------------
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "open sans,sans serif",
    height: "80vh",
    width: "100%",
    backgroundColor: "#ffffff",
    textAlign: "centre",
    justifyContent: "center",
  },
  mainmenuflex: {
    display: "flex",
    flexDirection: "column",
  },
  menuflex: {
    width: "38vh",
    height: "38vh",
    justifyContent: "center",
  },
  contentflex: {
    display: "flex",
    width: "80%",
    columnCount: "8",
  },
  innerBox: {
    display: "flex",
    flexDirection: "inherit",
    position: "relative",
    backgroundColor: "#000000",
    padding: 3,
    width: "60%",
    margin: "15px 0px 15px 0px",
    columnCount: "8",
  },
  arrow: {
    position: "absolute",
    backgroundColor: "black",
    height: "22px",
    width: "22px",
    transform: "rotate(45deg)",
    overFlowY: "hidden",
    color: "gray",
    zIndex: 9,
  },
  arrowtext: {
    textAlign: "right",
    transform: "rotate(-45deg)",
    marginRight: "0px",
  },
  tabLabel: {
    height: "90px",
    alignSelf: "center",
    padding: "15px 10px 10px 10px",
    noOfLines: 3,
    color: "white",
    textAlign: "center",
  },
  iconContainer: {
    display: "flex",
    color: "gray",
    alignItems: "center",
    alignSelf: "center",
    margin: "35px 0px 5px 0px",
  },
  noindex: {
    position: "relative",
    color: "gray",
    alignItems: "center",
    backgroundColor: "black",
    margin: "15px 0px 15px 0px",
    fontWeight: "lighter",
  },
  textBox: {
    flexDirection: "column",
    width: "25vh",
    justifyContent: "center",
  },
  tabContainer: {
    fontSize: 15,
    minW: "100px",
    flexDirection: "column",
    backgroundColor: "red",
  },
  bottomntainer: {
    noOfLines: 5,
    opacity: 0,
    color: "black",
    fontSize: "10",
    textAlign: "center",
    padding: "0px",
  },
  textcontent: {},
};

export default Taas;
