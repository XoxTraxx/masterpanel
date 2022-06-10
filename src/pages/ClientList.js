import React, { Component, Suspense } from "react";
import {
  Tab,
  Tabs,
  Text,
  Flex,
  Input,
  Button,
  TabList,
  TabPanel,
  TabPanels,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { RenderTabView } from "../components/FormListComponent/fomlistComponet";
import theme from "../config/color";
import LangContext from "../context/languageContext";
import styles from "../components/ClientFromList/styles";
import All from "../components/FormListComponent/All";
import Publish from "../components/FormListComponent/Publish";
import Unpublish from "../components/FormListComponent/Unpublish";
import { useSelector, useDispatch } from "react-redux";

const ClientList = () => {
  const Tabs = ["All", "Publish", "Unpublish"];
  const colors = useColorModeValue(
    ["white", "white", "white"],
    ["black", "green", "yellow.200"]
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const { currentLangData } = React.useContext(LangContext);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bg = colors[tabIndex];
  const [name,setName]=React.useState('')
  const [value ,setValue]=React.useState('')
  const [selectedTab, setSelectedTab] = React.useState("All");
  const state = useSelector((state) => state);
  const [users,setFoundUsers]=React.useState(state?.merchantReducer?.merchants)

   console.log('clients',)
   const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = state?.merchantReducer?.merchants.filter((user) => {
        return user.displayName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(state?.merchantReducer?.merchants);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  console.log('users',state?.merchantReducer?.merchants)
  const renderSearchbarFlex = () => {
    return (
      <Flex
        {...styles.clientMainFlex}
        // padding={5}
      >
        <Flex {...styles.clientListHeadingList}>
          <Text {...styles.txtClientlist}>Client List</Text>
          {/* <Button {...styles.btnAddForm}>
            <Text fontSize={"xs"}>Add New Form</Text>
          </Button> */}
        </Flex>
        <Flex {...styles.searchFlex}>
          <Input onClick={(e)=>setValue(e)} bg={'rgb(246,246,250)'} placeholder={'Search New Client'} width={"35%"} />
          <Button  onClick={()=>filter(value)} {...styles.btnSearch}>Search</Button>
        </Flex>
      </Flex>
    );
  };

  const renderTabsData = (selectedTab) => {
    return {
      All: <All client={'111'} clients={users} />,
      Publish: <Publish clients={users}/>,
      Unpublish: <Unpublish clients={users} />,
    }[selectedTab];
  };
  const renderTitle = (tab) => {
    return {
      Procress: currentLangData.app.procressProduction,
      Profile: "Clients Profile",
      Performance: "Total Sales 2022",
    }[tab];
  };

  return (
    //     <Suspense>
    <Flex {...styles.main}>
      {renderSearchbarFlex()}
      {/* {RenderTabView()} */}

      <Flex
        flexDirection={isMobile ? "column" : "row"}
        {...styles.buttonContainer}
        padding={3}
      >
        {/* {Tabs.map((item, index) => {
          let selected = item === selectedTab;
          return (
            <Button
              backgroundColor={selected ? "#60c9ca" : ""}
              onClick={() => setSelectedTab(item)}
              {...styles.tabButton}
              key={index}
              color={selected ? "white" : "black"}
            >
              {item}
            </Button>
          );
        })} */}
      </Flex>
      {/* {selectedTab != "All" ? (
        <Flex {...styles.multiFlex}>
          <Text {...styles.ppLabel}>{renderTitle(selectedTab)}</Text>
        </Flex>
      ) : (
        <Flex {...styles.multiFlex}>
          <Text {...styles.ppLabel}>{renderTitle(selectedTab)}</Text>
        </Flex>
      )} */}
      
      {renderTabsData(selectedTab)}
    </Flex>
    //     </Suspense>
  );
};
export default ClientList;
