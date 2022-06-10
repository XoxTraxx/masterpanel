import style from "./style";
import React from "react";
import Procress from "./Procress";
import ClientInfo from "../Profile/ClientsProfile";
import Performance from "../Performance/Performance";
import { Tabs } from "../../constants/data";
import LangContext from "../../context/languageContext";
import {
  Flex,
  Text,
  SimpleGrid,
  Button,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../Notification/Notification";
const ClientsInfo = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selectedTab, setSelectedTab] = React.useState("Performance");
  const state = useSelector((state) => state);
  console.log("data", state?.notifictaionReducer?.notification);
  const renderTabsData = (selectedTab) => {
    return {
      Procress: <Procress />,
      Profile: <ClientInfo />,
      Performance: <Performance />,
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
    <Center
      alignItems={!isMobile ? "flex-start" : "center"}
      justifyContent={"flex-start"}
      flexDirection={isMobile ? "column" : "row"}
    >
      <SimpleGrid {...style.clientInfoMainContainer}>
        <Flex {...style.cinfoTopflex}>
          <Text>{currentLangData.app.client}</Text>
          <Text {...style.title}>{state?.merchantReducer?.merchant?.companyName}</Text>
        </Flex>

        <Flex
          flexDirection={isMobile ? "column" : "row"}
          {...style.buttonContainer}
        >
          {Tabs.map((item, index) => {
            let selected = item === selectedTab;
            return (
              <Button
                backgroundColor={selected ? "#60c9ca" : ""}
                onClick={() => setSelectedTab(item)}
                {...style.tabButton}
                key={index}
                color={selected ? "white" : "black"}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        {selectedTab != "Performance" ? (
          <Flex {...style.multiFlex}>
            <Text {...style.ppLabel}>{renderTitle(selectedTab)}</Text>
            <Button {...style.exportButton}>
              {currentLangData.app.export}
            </Button>
          </Flex>
        ) : (
          <Flex {...style.multiFlex}>
            <Text {...style.ppLabel}>{renderTitle(selectedTab)}</Text>
          </Flex>
        )}

        {renderTabsData(selectedTab)}
      </SimpleGrid>
      <Center>
        <Flex {...style.notificatinContainer}>
          <Notification notification={state?.notifictaionReducer?.notification} />
        </Flex>
      </Center>
    </Center>
  );
};

export default ClientsInfo;
