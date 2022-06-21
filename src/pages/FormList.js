import React, { Component, Suspense } from "react";
import {
  Text,
  Flex,
  Input,
  Button,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Pagination } from "../components/Pagination";
import { formList } from "../constants/data";
import theme from "../config/color";
import { useSelector } from "react-redux";
import LangContext from "../context/languageContext";
import All from "../components/FormListComponent/All";
import styles from "../components/FormListComponent/styles";
import Publish from "../components/FormListComponent/Publish";
import Unpublish from "../components/FormListComponent/Unpublish";
import ApiManager from "../config/apiManager";
import { useDispatch } from "react-redux";
import allActions from "../actions/allActions";
import { CgLayoutGrid } from "react-icons/cg";
const FormList = () => {
  const dispatch = useDispatch();
  const apiManager = ApiManager.getInstance();
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
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const state = useSelector((state) => state);
  const [forms, setForms] = React.useState([]);
  const [allForm, setallform] = React.useState();
  const [formName, setFormName] = React.useState("");
  const filter = (e) => {
    const keyword = formName;
    if (keyword !== "") {
      const results = allForm.filter((user) => {
        return user.formName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setForms(results);
    } else {
      setForms("");
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  const getAllForms = () => {
    apiManager
      .get("getAllForms")
      .then((response) => {
        if (response.message === 6579) {
          setallform(response.result.docs);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updatePageStatus = (formId, status) => {
    let _pageId = {
      formId: formId,
      status: status,
    };
    apiManager
      .post("updateFormStatus", _pageId)
      .then((response) => {
        console.log("updateFormStatus", _pageId);
        if (response.message === 6575) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getAllForms();
  }, []);

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
          {/* <Button
            title={"Add New Form"}
            marginLeft={"5"}
            color={"white"}
            height={"30px"}
            backgroundColor={theme.customColors.masterpanelColors[100]}
          >
            <Text fontSize={"xs"}>Add New Form</Text>
          </Button> */}
        </Flex>
        <Flex padding={5} alignItems={"center"}>
          <Input
            onClick={(e) => setFormName(e.target.value)}
            placeholder={"search Form"}
            width={"35%"}
          />
          <Button
            color={"white"}
            marginLeft={"5"}
            height={"30px"}
            title={"Search"}
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
          onPublishClick={(pageId, status) => updatePageStatus(pageId, status)}
          clients={forms.lenght > 0 ? forms : allForm}
          form={"12"}
        />
      ),
      Publish: (
        <Publish
          onPublishClick={(pageId, status) => updatePageStatus(pageId, status)}
          clients={forms.lenght > 0 ? forms : allForm}
          form={"12"}
        />
      ),
      Unpublish: (
        <Unpublish
          onPublishClick={(pageId, status) => updatePageStatus(pageId, status)}
          clients={forms.lenght > 0 ? forms : allForm}
          form={"12"}
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
export default FormList;
