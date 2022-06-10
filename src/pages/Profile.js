import React, { useState, useEffect } from "react";
import LangContext from "../context/languageContext";
import { FaUserCircle } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import ant from "../components/image/ant.png";

import { Text, Center, Flex, Box } from "@chakra-ui/react";
import theme from "../config/color";
import Header from "../components/Header";
import { FiPackage } from "react-icons/fi";
import { BiChat, BiHomeCircle } from "react-icons/bi";
import { useAuthState, useAuthDispatch } from "../context/authContext";
import { Link, useHistory } from "react-router-dom";

const Profile = (props) => {
  let createdAt;
  let home = "Home";
  let batch = "Batch";
  let guide = "Guide";
  let support = "Support";
  let consumer = "Consumer";

  const [date, setDate] = useState("");
  const { currentLangData } = React.useContext(LangContext);
  const { merchant } = useAuthState();
  const [merchnatImage, setMerchnatImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const history = useHistory();

  const dispatch = useAuthDispatch();
  useEffect(() => {
    let tempDate;
    createdAt = new Date(merchant?.createdAt * 1000);
    tempDate =
      createdAt.getDate() +
      "-" +
      (createdAt.getMonth() + 1) +
      "-" +
      createdAt.getFullYear();
    setDate(tempDate);
    console.log(date, "merchantmerchantmerchantmerchant=>>>", merchant);

    if (merchant?.remark) {
      let parseImage = JSON.parse(merchant?.remark);
      setMerchnatImage(parseImage);
    }

    setCurrentPage(tabs[0].tab);
    try {
      let tab = history.location.pathname.split("/")[1];
      if (tab) setCurrentPage(tab);
    } catch (e) {}
  }, []);

  const tabs = [
    {
      tab: "Home",
      path: "/",
      icon: <BiHomeCircle size={25} marginTop={1} />,
    },
    {
      tab: "Traceability as a service (Taas)",
      path: "/Taas",
      icon: <FaUserCircle size={25} marginTop={1} />,
    },
    {
      tab: "ANTCHAIN",
      path: "/AntChain",
      icon: <FiPackage size={25} marginTop={1} />,
    },
    {
      tab: "Food Safety",
      path: "/FoodSafety",
      icon: <BiDetail size={25} marginTop={1} />,
    },
    {
      tab: "Contact",
      path: "/Contact",
      icon: <BiChat size={25} marginTop={1} />,
    },
    {
      tab: "Register",
      path: "/Register",
      icon: <BiChat size={25} marginTop={1} />,
    },
    {
      tab: "Login",
      path: "/Login",
      icon: <BiChat size={25} marginTop={1} />,
    },
  ];

  const renderOnClickTabs = (index, tab, bool) => {
    console.log(bool, "BOol", index, "TAB==>", tab);

    let referenceOfPage = window.location.href;
    let pageName = referenceOfPage.split("/")[3];
    console.log(
      tab,
      "REF=>",
      referenceOfPage,
      "window.location.href==>",
      pageName
    );

    if (tab === home) {
      if (tab === pageName) {
        window?.location?.reload();
      }
      setCurrentPage(tab);
    } else if (tab === consumer) {
      if (tab === pageName) {
        window?.location?.reload();
      }
      setCurrentPage(tab);
    } else if (tab === batch) {
      if (tab === pageName) {
        window?.location?.reload();
      }
      setCurrentPage(tab);
    } else if (tab === guide) {
      if (tab === pageName) {
        window?.location?.reload();
      }
      setCurrentPage(tab);
    } else if (tab === support) {
      if (tab === pageName) {
        window?.location?.reload();
      }
      setCurrentPage(tab);
    }
  };

  const onLogout = async () => {
    await localStorage.removeItem("currentUser");
    await localStorage.removeItem("user");
    //localStorage.removeItem("mdgSession");
    dispatch("LOGOUT");
    history.replace("/Login");
    window?.location?.reload();
  };

  return (
    <>
      {/* <Header /> */}
      <Flex
        as={"nav"}
        // display={"flex"}
        // paddingX={12}
        // paddingY={2}
        // style={style.navbar}
        flex={1}
        backgroundColor={theme.customColors.common[700]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Box
          flex={2}
          paddingY={6}
          marginTop={1}
          backgroundColor={theme.customColors.common[100]}
        > */}
        {tabs.map((item, index) => {
          let selected = item.tab === currentPage;
          return (
            <Link to={item.path}>
              <Flex
                key={index}
                paddingY={5}
                paddingX={8}
                borderRightWidth={selected ? 6 : 0}
                borderRightColor={selected ? "red" : null}
                backgroundColor={selected ? "rgba(93, 188, 189, 0.5)" : null}
                onClick={() => renderOnClickTabs(index, item.tab, Boolean())}
                flexDirection={"row"}
              >
                {/* {item.icon} */}
                <Text
                  marginLeft={15}
                  fontSize={"sm"}
                  paddingX={3}
                  key={item.tab}
                >
                  {item.tab}
                </Text>
              </Flex>
            </Link>
          );
        })}
        <Center margin={8} borderWidth={1}></Center>
        {/* <Link onClick={() => onLogout()}>
              <Flex
                marginX={8}
                paddingBottom={50}
                marginTop={6}
                flexDirection={"row"}
              >
                <Image src={signout} size={25} marginTop={1} />
                <Text paddingY={1} marginLeft={15} fontSize={"sm"} paddingX={6}>
                  {currentLangData.app.signout}
                </Text>
              </Flex>
            </Link> */}
        {/* <Center marginTop={"20"}>
              <Text fontSize="xs" color="white">
                {currentLangData.app.poweredby}
              </Text>
              <Image marginX="5" objectFit="fix" height="30px" src={ant} />
              <Text
                fontSize="18px"
                fontWeight="bold"
                color="white"
                marginLeft={"-3"}
              >
                {currentLangData.app.antchain}
              </Text>
            </Center>

            <Center marginY={5} marginRight={2}>
              <Text
                // color={"white"}
                fontSize="xs"
                color="rgba(255, 255, 255, 0.6)"
                opacity={10}
              >
                {currentLangData.app.allRightsReserved}
              </Text>
            </Center> */}
        {/* </Box> */}
        {/* </Box> */}
        <Box flex={8} padding={2} backgroundColor={"#f6f6fa"}>
          {props.children}
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
