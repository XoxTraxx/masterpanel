import React, { Component, Suspense, useEffect } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import {useHistory} from 'react-router-dom'
import theme from "../config/color";
import ApiManager from "../config/apiManager";
import LangContext from "../context/languageContext";
import All from "../components/FormListComponent/All";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../components/Pagination";
import styles from "../components/FormListComponent/styles";
import Publish from "../components/FormListComponent/Publish";
import Unpublish from "../components/FormListComponent/Unpublish";
import allActions from "../actions/allActions";
const PagesList = () => {
  const apiManager = ApiManager.getInstance();
  const dispatch = useDispatch();
  const Tabs = ["All", "Publish", "Unpublish"];
  const colors = useColorModeValue(
    ["white", "white", "white"],
    ["black", "green", "yellow.200"]
  );
  const [filterArray, setFilterArray] = React.useState([]);
  const state = useSelector((state) => state);
  const [allpages, setAllPages] = React.useState(null);
  const [tabIndex, setTabIndex] = React.useState(0);
  const { currentLangData } = React.useContext(LangContext);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedTab, setSelectedTab] = React.useState("All");
  const [name, setName] = React.useState("");
   const history=useHistory()
  const filter = () => {
    let keyword = name;
    if (keyword !== "") {
      const results =  allpages.filter((user) => {
        return user.pageName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFilterArray(results);
    } else {
      // If the text field is empty, show all users
      setFilterArray("");
    }

    setName(keyword);
  };

  const getAllPages = () => {
    apiManager
      .get("getAllPages")
      .then((response) => {
        if (response.message === 6575) {
          setAllPages(response.result.docs);
          dispatch(allActions.pageAction.setAllPages(response.result.docs))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePageStatus = (pageId, status) => {
    console.log("pageId", status);
    let _pageId = {
      pageId: pageId,
      status: status,
    };
    apiManager
      .post("updatePageStatus", _pageId)
      .then((response) => {
        if (response.message === 6575) {
          getAllPages();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    console.log("state?.pageReducer?.allpages",state?.pageReducer.allPages);
    getAllPages();
    setAllPages(state?.pageReducer?.allpages)

  },[]);

  const renderSearchbarFlex = () => {
    return (
      <Flex
        width={"100%"}
        height={"20vh"}
        flexDirection={"column"}
        justifyContent={"center"}
        borderBottomWidth={4}
        backgroundColor={"white"}
        // padding={5}
      >
        <Flex alignItems={"center"} padding={5}>
          <Text fontWeight={"bold"} fontSize={"20px"}>
            Page List
          </Text>
          {/* <Button
            title={"Add New Form"}
            marginLeft={"5"}
            color={"white"}
            height={"30px"}
            onClick={()=>history.push('AddPageInformation')}
            backgroundColor={theme.customColors.masterpanelColors[100]}
          >
            <Text fontSize={"xs"}>Add New Page</Text>
          </Button> */}
        </Flex>
        <Flex padding={5} alignItems={"center"}>
          <Input
            width={"35%"}
            placeholder={"search Form"}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            color={"white"}
            marginLeft={"5"}
            height={"30px"}
            title={"Search"}
            isDisabled={allpages ? false :true}
            onClick={() => filter()}
            backgroundColor={theme.customColors.masterpanelColors[100]}
          >
            Search
          </Button>
        </Flex>
      </Flex>
    );
  };
  

  const renderTabsData = (selectedTab) => {
    return {
      All: (
        <All
          page={"12"}
          clients={filterArray.length > 0 ? filterArray : allpages}
          onPublishClick={(pageId, status) => updatePageStatus(pageId, status)}
        />
      ),
      Publish: (
        <Publish
          page={"12"}
          clients={filterArray.length > 0 ? filterArray : allpages}
          onPublishClick={(pageId, status) => updatePageStatus(pageId, status)}
        />
      ),
      Unpublish: (
        <Unpublish
          page={"12"}
          clients={filterArray.length > 0 ? filterArray : allpages}
          onPublishClick={(pageId, status) => updatePageStatus(pageId, status)}
        />
      ),
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
    <>
      <Flex
        height={"100vh"}
        flexDirection={"column"}
        width={"100%"}
        padding={5}
        backgroundColor={"white"}
      >
        {renderSearchbarFlex()}
        {/* {RenderTabView()} */}

        <Flex
          flexDirection={isMobile ? "column" : "row"}
          {...styles.buttonContainer}
          padding={3}
        >
          {Tabs.map((item, index) => {
            let selected = item === selectedTab;
            return (
              <Button
                backgroundColor={selected ? "#60c9ca" : ""}
                onClick={() => setSelectedTab(item)}
                {...styles.tabButton}
                key={index}
                color={selected ? "white" : "black"}
                fontSize={"10px"}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        {selectedTab != "All" ? (
          <Flex {...styles.multiFlex}>
            <Text {...styles.ppLabel}>{renderTitle(selectedTab)}</Text>
          </Flex>
        ) : (
          <Flex {...styles.multiFlex}>
            <Text {...styles.ppLabel}>{renderTitle(selectedTab)}</Text>
          </Flex>
        )}

        {renderTabsData(selectedTab)}
      </Flex>
    </>
  );
};
export default PagesList;
