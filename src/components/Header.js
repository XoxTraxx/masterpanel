import React from "react";
// import ant from "../components/image/ant.png";
// import traxlogo from "../components/image/logo.png";
import LangContext from "../context/languageContext";
import { useContext } from "react";
// import SideBar from "./common/sidebar";
// import Taas from "../components/TracibilityasService/Taas";
import { Link, withRouter } from "react-router-dom";
import {
  // Box,
  Flex,
  // Text,
  // Spacer,
  // Image,
  // Button,
  // extendTheme,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
} from "@chakra-ui/react";
// import TraxLink from "./traxLink";
// import Login from "../pages/Login";
// import theme from "../config/color";
// import x from "../components/image/x.png";
// import ApiManager from "../config/apiManager";
// import { createBreakpoints } from "@chakra-ui/theme-tools";
// import HomeScreenLearnMoreButton from "./homeScreenLearnMore";
import TraxImage from "../components/image/Trax-background-06.png";
// import SlideBar from "../components/common/sidebar";
const Header = (props) => {
  // let initialFields = {
  //   searchPhrase: "",
  // };
  // let initValue = {
  //   productName: "",
  //   productImage: "",
  // };

  // const history = useHistory();
  // const [noUser, setNoUser] = useState("");
  // let apiManager = ApiManager.getInstance();
  // const [value, setValue] = React.useState(initValue);
  // const [productList, setProductList] = useState([]);
  // const [searchLoading, setSearchLoading] = useState(false);
  // const [fields, setFields] = React.useState(initialFields);
  const { currentLangData } = useContext(LangContext);
  // const [whenTyped, setWhenTyped] = useState(false);

  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [isPopOpen, setIsPopOpen] = useState(false);
  // const mouseOver = (type) => {
  //   type ? setIsPopupOpen(true) : setIsPopOpen(true);
  // };

  // const mouseLeave = (type) => {
  //   type ? setIsPopupOpen(false) : setIsPopOpen(false);
  // };

  // const goToSettings = () => {
  //   history.push("/SettingsScreen");
  //   setIsPopOpen(false);
  //   setIsPopupOpen(false);
  // };

  // const onLogout = async () => {
  //   await localStorage.removeItem("currentUser");
  //   await localStorage.removeItem("user");
  //   //localStorage.removeItem("mdgSession");
  //   dispatch("LOGOUT");
  //   history.replace("/Login");
  //   window?.location?.reload();
  // };

  // const openModal = () => {
  //   history.push("/SettingsScreen");
  // };

  // const handleOnChange = (e) => {
  //   setWhenTyped(true);
  //   if (e.target.value === "") {
  //     setWhenTyped(false);
  //   }
  // };

  // const handleonChange = (evt, key) => {
  //   evt.defaultPrevented = true;
  //   setWhenTyped(true);
  //   if (evt.target.value === "") {
  //     setWhenTyped(false);
  //     setValue(initValue);
  //   }
  //   console.log(evt.target.value);
  //   const ev = evt.target.value;
  //   setFields({
  //     ...fields,
  //     [key]: ev,
  //   });
  // };

  // const searchUserDataFunction = () => {
  //   setSearchLoading(true);
  //   let body = {
  //     searchPhrase: fields.searchPhrase,
  //   };

  //   console.log("bodyOfAddPhase=>", body);

  //   apiManager
  //     .post("searchProducts", body)
  //     .then((response) => {
  //       console.log("searchUserData res=>", response);
  //       setSearchLoading(false);
  //       if (response.message === 5026) {
  //         setProductList(response.result.docs);
  //         setValue({
  //           productName: response.result.docs[0]?.name,
  //           productImage: response.result.docs[0]?.image,
  //         });
  //         setSearchLoading(false);
  //         // let ifEmpty = response.result.docs;
  //         console.log(response.result.docs, "ifEmpty");
  //         if (response.result.docs.length === 0) {
  //           setNoUser("Nothing Matching!");
  //           setTimeout(() => {
  //             setNoUser(false);
  //           }, 2000);
  //           setValue(initValue);
  //         }
  //       }
  //       if (response.message === 5001) {
  //         setSearchLoading(false);
  //         setNoUser(response.errors[0].msg);
  //         setTimeout(() => {
  //           setNoUser(false);
  //         }, 2000);
  //         setValue(initValue);
  //       }
  //       // if (response.message === 5026) {
  //       //   setSearchLoading(false);
  //       //   setNoUser("Nothing Matching!");
  //       //   setTimeout(() => {
  //       //     setNoUser(false);
  //       //   }, 2000);
  //       //   setValue(initValue);
  //       // }
  //     })
  //     .catch((error) => {
  //       setSearchLoading(false);
  //       console.log("error", error);
  //       // setLoading(false);
  //       setValue(initValue);
  //       // setNoUser(false);
  //     });
  // };

  const tabs = [
    {
      tabName: "Home",
    },
    {
      tabName: "Traceability as a service (Taas)",
    },
    {
      tabName: "ANTCHAIN",
    },
    {
      tabName: "Food Safety",
    },
    {
      tabName: "Contact",
    },
    {
      tabName: "Register",
    },
    {
      tabName: "Login",
    },
  ];

  return (
    <Flex
      width={["200%", "100%", "100%"]}
      height={[
        "100%", // 0-30em
        "100%", // 30em-48em
        "100%", // 48em-62em
        "130vh", // 62em+
      ]}
      style={{
        display: "flex",
        padding: "12px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${TraxImage})`,
        // backgroundColor: "red",
      }}
    ></Flex>
  );
};
export default withRouter(Header);

const style = {
  feature: {
    padding: 10,
    paddingLeft: 30,
    fontSize: 14,
    fontWeight: "bold",
  },

  // navbar: {
  //   borderBottomWidth: 2,
  //   borderBottomColor: theme.customColors.gray[100],
  // },

  colorSwitcher: {
    marginTop: 15,
    paddingLeft: 2,
    marginRight: 3,
  },
};
