import React, { useState, useEffect, useContext } from "react";
import LangContext from "../../context/languageContext";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import {
  Text,
  Avatar,
  Center,
  Button,
  Flex,
  Box,
  Image,
  SimpleGrid,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";
import style from "./style";
import Header from "./Header";

import { AiOutlinePlus } from "react-icons/ai";
import { HomeMenu,FormMenu,ClientMenu } from "../../constants/data";
import { CgProfile } from "react-icons/cg";
import signout from "../image/signout.png";
import allActions from "../../actions/allActions";
import ApiManager from "../../config/apiManager";
import { BiChat, BiHomeCircle } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState, useAuthDispatch } from "../../context/authContext";
const Profile = (props) => {
  let createdAt;
  let home = "Pages";
  let batch = "Batch";
  let guide = "Guide";
  let support = "Support";
  let consumer = "Consumer";
  let Clients = "Clients";
  let Forms = "Form";

  const state = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const [date, setDate] = useState("");
  const { currentLangData } = React.useContext(LangContext);
  const { merchant } = useAuthState();
  const [index, setIndex] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [selectedRights, setSelectedRights] = useState([]);
  const [merchnatImage, setMerchnatImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const history = useHistory();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  console.log("useMediaQuery", isMobile);
  const [onpen, setOpen] = React.useState(false);
  const dispatch = useAuthDispatch();
  const dipatchMerchant = useDispatch();
  const apimanager = ApiManager.getInstance();
  const getAllClients = () => {
    apimanager
      .get(currentLangData.apis.getAllClients, {})
      .then((response) => {
        console.log("getAllClients", response);
        if (response.message === 6558) {
          dipatchMerchant(
            allActions.merchantsAction.setMerchants(response.result)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {});

  useEffect(() => {
    getAllClients();

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
      tab: "Pages",
      path: "/",
      subMenu: HomeMenu,
      // icon: <BiHomeCircle size={26} marginTop={1} />,
    },
    {
      tab: "Form",
      path: "/Clients",
      subMenu:FormMenu,
      // subMenu: state.merchantReducer.merchants,
      // icon: <CgProfile size={26} marginTop={1} />,
    },
    {
      tab: "Clients",
      path: "/Clients",
      subMenu:ClientMenu
      // subMenu: state.merchantReducer.merchants,
      // icon: <CgProfile size={26} marginTop={1} />,
    },
  ];

  const renderOnClickTabs = (index, tab, bool) => {
    console.log(bool, "BOol", index, "TAB==>", tab);
    let referenceOfPage = window.location.href;
    let pageName = referenceOfPage.split("/")[3];
    if (tab === home ) {
      if (tab === pageName) {
        window?.location?.reload();
      }
      setCurrentPage(tab);
    } else if (tab === Clients) {
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
    else if (tab === Forms) {
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
  const SubMenu = ({ i, subeItem, currentPage }) => {
    return (
      <>
        <Box {...style.mainContainer}>
          {subeItem
            ? subeItem.map((item, itemIndex) => {
                let selected =
                  item.displayName === selectedSubMenu ? true : false;

                return (
                  <Link
                    onClick={() => {
                      setSelectedSubMenu(item.displayName);
                      setCurrentPage(null);
                      dipatchMerchant(
                        allActions.merchantsAction.setSingleMerchant(item)
                      );
                    }}
                    key={itemIndex}
                    to={{
                      pathname:
                        currentPage === "Clients" ? item.path : item.path,
                      state: item,
                    }}
                  >
                    <Flex
                      backgroundColor={
                        selected ? "rgba(93, 188, 189, 0.5)" : null
                      }
                      {...style.subMenuFlex}
                    >
                      {/* <BsFillRecordCircleFill /> */}
                      <Text {...style.subTabMenu} key={item.menu}>
                        {item.companyName ? item.companyName : item.displayName}
                      </Text>
                      {/* <BiMinusCircle /> */}
                    </Flex>
                  </Link>
                );
              })
            : null}
        </Box>
      </>
    );
  };

  const SideBar = () => {
    return (
      <>
        <Box display={isMobile ? "block" : "block"} {...style.innerContainer}>
          <Box
            {...style.switchButtonConatiner}
            onClick={onClose}
            display={isMobile ? "block" : "none"}
          >
            <Text>{}</Text>
            <Box {...isMobile.buttonInnerCOntainer}>
              <ImCross
                color={"white"}
                onClick={() => setOpen(false)}
                size={12}
              />
            </Box>
          </Box>
          <Box
            flexBasis={{ base: "100%", md: "auto" }}
            {...style.tabsContainer}
          >
            {tabs.map((item, index) => {
              let selected = item.tab === currentPage;
              return (
                <Box
                  {...style.backgroundColorContianer}
                  backgroundColor={selected ? "rgba(93, 188, 189, 0.5)" : null}
                >
                  <Link to={item.path}>
                    <Flex
                      key={index}
                      backgroundColor={
                        selected ? "rgba(93, 188, 189, 0.5)" : null
                      }
                      {...style.tabContainer}
                      onClick={() => {
                        renderOnClickTabs(index, item.tab, Boolean());
                        setSelectedSubMenu(null);
                        setOpen(false);
                      }}
                    >
                      {item.icon}
                      <Text {...style.tabText} key={item.tab}>
                        {item.tab}
                      </Text>
                      <Flex {...style.iconContainer}>
                    {/* { index === 0 ?<Link to={'/FormEditor'}> <AiOutlinePlus size={22} color={'white'} /> </Link>:null } */}

                        <RiArrowDownSLine size={25} />
                      </Flex>
                    </Flex>
                  </Link>
                  <SubMenu
                    index={index}
                    subeItem={item.subMenu}
                    currentPage={item.tab}
                  />
                </Box>
              );
            })}
            <Box {...style.logoutTopContainer}>
              <Center {...style.emptyMidContainer}></Center>
              <Link onClick={() => onLogout()}>
                <Flex {...style.sigoutContainer}>
                  {/* <Image src={signout} {...style.signoutButton} /> */}
                  <Text {...style.signOutLabel}>
                    {currentLangData?.app.signOut}
                  </Text>
                </Flex>
              </Link>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  const MobileSideBar = () => {
    return (
      <>
        <Drawer
          {...style.drwawer}
          placement={"top"}
          onClose={() => setOpen(false)}
          isOpen={onpen}
        >
          <DrawerContent>
            <SideBar />
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  return (
    <>
      <Header isMobile={isMobile} isShow={() => setOpen(!onpen)} />
      <Flex as={"nav"} {...style.mainFlex}>
        {!isMobile ? <SideBar /> : <MobileSideBar />}
        <Box {...style.bottomFlex}>{props.children}</Box>
      </Flex>
    </>
  );
};

export default Profile;
