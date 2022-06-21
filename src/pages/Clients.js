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
import LangContext from "../context/languageContext";
import styles from "../components/ClientFromList/styles";
import { useSelector, useDispatch } from "react-redux";
import Clientlist from "../components/Client/ClientList";
import allActions from "../actions/allActions";
import { useAuthState, useAuthDispatch } from "../context/authContext";
import ApiManager from '../config/apiManager'
const ClientList = () => {
  const colors = useColorModeValue(
    ["white", "white", "white"],
    ["black", "green", "yellow.200"]
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const { currentLangData } = React.useContext(LangContext);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const dispatch=useAuthDispatch()
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const state = useSelector((state) => state);
  const dipatchMerchant = useDispatch();
  const [users, setFoundUsers] = React.useState(
    state?.merchantReducer?.merchants.docs
  );
  const [client, setClient] = React.useState([]);
  const [updateClientList, setUpdateClientList] = React.useState([]);
  const apiManager=ApiManager.getInstance()

  const approveAdmin = (email,status) => {
    let body={
      email:email,
      suspended:status === false ?true :false
    }
    apiManager
      .post('approveAdmin', body)
      .then((approveAdmin) => {
        console.log('body',body)
        if(approveAdmin.message === 6613){
           getAllClients()        
          // window.location.reload()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllClients = () => {
    apiManager
      .get(currentLangData.apis.getAllClients, {})
      .then((response) => {
        console.log("getAllClients", response);
        if (response.message === 6558) {
          setUpdateClientList(response.result.docs)
          dipatchMerchant(
            allActions.merchantsAction.setMerchants(response.result)
          )
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("itemList", state?.merchantReducer?.merchants.docs);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users.filter((user) => {
        return user.displayName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setClient(results);
    } else {
      setClient("");
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  console.log("users", state?.merchantReducer?.merchants);
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
          <Input
            onClick={(e) => setValue(e)}
            bg={"rgb(246,246,250)"}
            placeholder={"Search New Client"}
            width={"35%"}
          />
          <Button onClick={() => filter(value)} {...styles.btnSearch}>
            Search
          </Button>
        </Flex>
      </Flex>
    );
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
      <Clientlist
        clients={
          client.length > 0 ? client : updateClientList.lenght ?updateClientList: state?.merchantReducer?.merchants?.docs
        }
        onChangeStatus={(email,status)=>approveAdmin(email,status)}
      />
    </Flex>
    //     </Suspense>
  );
};
export default ClientList;

