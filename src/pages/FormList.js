import React, { Component, Suspense } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import {Pagination}  from '../components/Pagination'
import {formList} from '../constants/data'
import theme from "../config/color";
import {useSelector} from 'react-redux'
import LangContext from "../context/languageContext";
import All from "../components/FormListComponent/All";
import styles from "../components/FormListComponent/styles";
import Publish from "../components/FormListComponent/Publish";
import Unpublish from "../components/FormListComponent/Unpublish";

const FormList = () => {
  const Tabs = ["All", "Publish", "Unpublish"];
  const colors = useColorModeValue(
    ["white", "white", "white"],
    ["black", "green", "yellow.200"]
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const { currentLangData } = React.useContext(LangContext);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bg = colors[tabIndex];
  const [selectedTab, setSelectedTab] = React.useState("All");
  const [name,setName]=React.useState('')
  const [value ,setValue]=React.useState('')
  const state= useSelector(state=>state)
  const [forms,setForms]=React.useState(state?.pageReducer?.forms)
console.log('state',state?.pageReducer?.forms)
  const filter = (e) => {
    const keyword = name.target.value;

    if (keyword !== '') {
      const results =formList.filter((user) => {
        return user.displayName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setForms(results);
    } else {
      setForms(formList);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  console.log('results',forms)

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
            Form List
          </Text>
          <Button
            title={"Add New Form"}
            marginLeft={"5"}
            color={"white"}
            height={"30px"}
            backgroundColor={theme.customColors.masterpanelColors[100]}
          >
            <Text fontSize={"xs"}>Add New Form</Text>
          </Button>
        </Flex>
        <Flex padding={5} alignItems={"center"}>
          <Input onClick={(e)=>setName(e)} placeholder={'search Form'} width={"35%"} />
          <Button
            color={"white"}
            marginLeft={"5"}
            height={"30px"}
            title={"Search"}
            onClick={()=>filter()}
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
      All: <All clients={forms} form={"12"} />,
      Publish: <Publish clients={forms} form={"12"} />,
      Unpublish: <Unpublish clients={forms} form={"12"} />,
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
    <Flex height={"100vh"} flexDirection={"column"} width={"100%"} padding={5}
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
    {/* <div style={{backgroundColor:"red"}} w={'100%'}>
    <Pagination
          pageSize={2}
          items={formList}
          onChangePage={()=>alert()}
        />
    </div> */}
</>
  );
};
export default FormList;
