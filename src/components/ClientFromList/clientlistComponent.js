import React from "react";
import {
  Tab,
  Flex,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useMediaQuery,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import styles from "./styles";
import theme from "../../config/color";

export const RenderTabView = () => {
  const Tabs = ["All", "Publish", "Unpublish"];

  const colors = useColorModeValue(
    ["white", "white", "white"],
    ["black", "green", "yellow.200"]
  );

  const [shado, setShado] = React.useState("");
  const [tabIndex, setTabIndex] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bg = colors[tabIndex];
  const [selectedTab, setSelectedTab] = React.useState("All");

  return (
    <Flex
      flexDirection={isMobile ? "column" : "row"}
      {...styles.buttonContainer}
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
          >
            {item}
          </Button>
        );
      })}
    </Flex>
    // <Tabs
    //   variant={"enclosed-colored"}
    //   onChange={(index) => setTabIndex(index)}
    //   // color={"#3CB1AD"}
    //   bg={bg}
    //   // onMouseEnter={() => setShado("dark-lg")}
    //   // onMouseLeave={() => setShado("sm")}
    // >
    //   <TabList>
    //     {/* <Button>All</Button>
    //         <Button>Publish</Button>
    //         <Button>Unpublish</Button> */}
    //     <Tab
    //       style={styles.tab1Btn}
    //       fontSize={"sm"}
    //       // onMouseEnter={() => setShado("#3CB1AD")}
    //       // color={"white"}
    //       // bg={shado}
    //     >
    //       All
    //     </Tab>
    //     <Tab style={styles.tab2Btn}>Publish</Tab>
    //     <Tab style={styles.tab3Btn}>Unpublish</Tab>
    //   </TabList>
    //   <TabPanels p="2rem" height={"400px"}>
    //     <TabPanel>The Primary Colors</TabPanel>
    //     <TabPanel>Are 1, 2, 3</TabPanel>
    //     <TabPanel>Red, yellow and blue.</TabPanel>
    //   </TabPanels>
    // </Tabs>
  );
};
