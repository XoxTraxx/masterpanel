import React from "react";
import {
  ButtonGroup,
  Tab,
  Text,
  Flex,
  Box,
  Input,
  Menu,
  Button,
  Switch,
  MenuList,
  MenuItem,
  SimpleGrid,
  MenuButton,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { RenderTabView } from "../components/FormListComponent/fomlistComponet";
import theme from "../config/color";
import { useHistory } from "react-router-dom";
import SEO from "../components/formEditor/SEO";
import Meta from "../components/formEditor/Meta";
import styles from "../components/formEditor/styles";
import { useAuthState } from "../context/authContext";
import LangContext from "../context/languageContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { TagsInput } from "react-tag-input-component";
import { DateMenu } from "../components/Menu/index";
import Content from "../components/formEditor/Content";
import "bootstrap";
import ApiManager from "../config/apiManager";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import "../styles/nav.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";
// import reactElementor from "@betrue/react-elementor"

const ClientList = () => {
  let history = useHistory();
  const Tabs = ["Content", "Meta", "SEO"];
  const colors = useColorModeValue(
    ["white", "white", "white"],
    ["black", "green", "yellow.200"]
  );
  console.log("history", history.location?.data);
  const { merchant } = useAuthState();
  const [editor, setEditor] = React.useState(null);
  const [htmlContent, setHtmlContent] = React.useState(editor);
  const [tabIndex, setTabIndex] = React.useState(0);
  const bg = colors[tabIndex];
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selected, setSelected] = React.useState(["Home page"]);
  const [selectedTab, setSelectedTab] = React.useState("Content");
  const [selectedTabRight, setSelectedTabRight] = React.useState("Preview");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const apiManager = ApiManager.getInstance();

  React.useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage],
      pluginsOpts: { gjsPresetWebpage: {} },
      // container: "#editor",
      // storageManager: false,
      // blockManager: {
      //   appendTo: "#blocks",
      // },
      // storageManager: {
      //   type: "remote",
      //   stepsBeforeSave: 3,
      //   contentTypeJson: true,
      //   storeComponents: true,
      //   storeStyles: true,
      //   storeHtml: true,
      //   storeCss: true,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   id: "mycustom-",
      //   urlStore: `/pages/${location.pathname.split("/")[2]}/content`,
      //   urlLoad: `/pages/${location.pathname.split("/")[2]}/content`,
      // },
      // styleManager: {
      //   appendTo: "#styles-container",
      //   sectors: [
      //     {
      //       name: "Dimension",
      //       open: false,
      //       buildProps: ["width", "min-height", "padding"],
      //       properties: [
      //         {
      //           type: "integer",
      //           name: "The width",
      //           property: "width",
      //           units: ["px", "%"],
      //           defaults: "auto",
      //           min: 0,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // layerManager: {
      //   appendTo: "#layers-container",
      // },
      // traitManager: {
      //   appendTo: "#trait-container",
      // },
      // selectorManager: {
      //   appendTo: "#styles-container",
      // },
      // panels: {
      //   defaults: [
      //     {
      //       id: "basic-actions",
      //       el: ".panel__basic-actions",
      //       buttons: [
      //         {
      //           id: "visibility",
      //           active: true, // active by default
      //           className: "btn-toggle-borders",
      //           label: '<i class="fa fa-clone"></i>',
      //           command: "sw-visibility", // Built-in command
      //         },
      //       ],
      //     },
      //     {
      //       id: "panel-devices",
      //       el: ".panel__devices",
      //       buttons: [
      //         {
      //           id: "device-desktop",
      //           label: '<i class="fa fa-television"></i>',
      //           command: "set-device-desktop",
      //           active: true,
      //           togglable: false,
      //         },
      //         {
      //           id: "device-mobile",
      //           label: '<i class="fa fa-mobile"></i>',
      //           command: "set-device-mobile",
      //           togglable: false,
      //         },
      //       ],
      //     },
      //   ],
      // },
      // deviceManager: {
      //   devices: [
      //     {
      //       name: "Desktop",
      //       width: "",
      //     },
      //     {
      //       name: "Mobile",
      //       width: "320px",
      //       widthMedia: "480px",
      //     },
      //   ],
      // },
      // plugins: ["gjs-blocks-basic"],
      // pluginsOpts: {
      //   "gjs-blocks-basic": {},
      // },
    });
    setEditor(editor);
  }, []);

  React.useEffect(() => {
    if (editor) {
      editor.editor.on("change:changesCount", (e) => {
        const test = editor.editor.getHtml();
        setHtmlContent(test);
        console.log("change:changesCount=>", htmlContent);
      });
      editor.on("component:update", (e) => {
        // console.log("component:update==>", e);
      });
    }
  }, [editor]);

  const saveHtml = () => {
    editor.on("change:changesCount", (e) => {
      const test = editor.editor.getHtml();
      setHtmlContent(test);
      console.log(e, "Count=>", test);
    });
    console.log(htmlContent, "saveHtml", editor?.getHtml());
    let htmlOfEditor = editor.getHtml();
    let cssOfEditor = editor.getCss();
    history.push({
      data: htmlOfEditor,
      dataCss: cssOfEditor,
      pathname: `/CheckingHtml`,
    });
  };

  const addPage = () => {
    let htmlOfEditor = editor.getHtml();
    let cssOfEditor = editor.getCss();
    let body = {
      html: htmlOfEditor,
      css: cssOfEditor,
      publish: "global",
      parent:  history.location?.data?.parent,
      status: 1,
      javascript: "null",
      path:history.location?.data.name,
      // path:`{/${history.location?.data.pageName}}`,
      pageName: history.location?.data.name,
    };
    apiManager
      .post("addPage", body)
      .then((response) => {
        console.log(response, "addPage Response");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderSearchbarFlex = () => {
    return (
      <Flex
        {...styles.clientMainFlex}
        // padding={5}
      >
        <Flex {...styles.clientListHeadingList}>
          <Text {...styles.txtClientlist}>Pages / New Page</Text>
        </Flex>
        <Flex {...styles.searchFlex}>
          <Input width={"100%"} />
          <Button {...styles.btnSearch}>Search</Button>
        </Flex>
      </Flex>
    );
  };

  const renderTabsData = (selectedTab) => {
    return {
      Content: <Content />,
      Meta: <Meta />,
      SEO: <SEO />,
    }[selectedTab];
  };

  const renderTitle = (tab) => {
    return {
      Procress: currentLangData.app.procressProduction,
      Profile: "Clients Profile",
      Performance: "Total Sales 2022",
    }[tab];
  };

  const TagComponent = () => {
    return (
      <Box {...styles.tagContainer}>
        <Text {...styles.tagLabel}>{currentLangData.app.cataegoryTag}</Text>
        {/* <Input {...style.tagInput}></Input> */}
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="Tag"
          placeHolder="Enter Catagory"
        />
      </Box>
    );
  };

  const onChange = (title, date) => {
    return {
      "Post Date": setSelectedDate(date),
      "Post Time": setSelectedTime(date),
    }[title];
  };

  const renderDateandTime = (title) => {
    return (
      <Box {...styles.dateBox}>
        <Text {...styles.dateLabel}>{title}</Text>
        <DateMenu
          onChange={(date) => onChange(title, date)}
          bg={theme.customColors.gray[1001]}
          showTimeSelect={title === "Post Time" ? true : false}
          showDateSelect={title === "Post Time" ? false : true}
          selected={title === "Post Date" ? selectedDate : selectedTime}
        />
      </Box>
    );
  };

  const SwitchComponent = (title) => {
    return (
      <SimpleGrid {...styles.switcContainer}>
        <Text {...styles.switchLabel}>{title}</Text>
        <Flex>
          <Switch {...styles.switch} />
        </Flex>
      </SimpleGrid>
    );
  };

  const renderAuthor = () => {
    return (
      <Menu>
        <MenuButton
          {...styles.menuButton}
          as={Button}
          // rightIcon={<IoMdArrowDropdown />}
          onClick={() => setSelectedTab(currentLangData.app.save)}
        >
          <Text> {merchant?.name} </Text>
        </MenuButton>
        {/* <MenuList>
          <MenuItem>{currentLangData.app.save}</MenuItem>
        </MenuList> */}
      </Menu>
    );
  };

  return (
    <Box style={{ backgroundColor: "white" }}>
      <Flex>
        <ButtonGroup {...styles.btnGroup}>
          <Button
            background={theme.customColors.masterpanelColors[100]}
            onClick={() => addPage()}
          >
            Save
          </Button>
          <Button color={!"black" ? "white" : "black"}>Cancel</Button>
        </ButtonGroup>
      </Flex>
      <div className="App" flexDirection={"column"}>
        <div style={{ backgroundColor: "green" }} id={"editor"}></div>
        {/* <Flex {...styles.main} flexDirection={"row"}> */}
        {/* <Flex
        flexDirection={"column"}
        width={isMobile ? "100%" : "70%"}
        // width={"100%"}
      >
        {renderSearchbarFlex()}
        <Flex flexDirection={"column"}>
          <Flex
            flexDirection={isMobile ? "column" : "row"}
            {...styles.buttonContainer}
            // padding={3}
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
      </Flex>

      <Flex width={isMobile ? "100%" : "30%"} {...styles.rightContainer}>
        <Flex {...styles.menuContainer}>
          <Button
            {...styles.rnButton}
            isDisabled={"true"}
            onClick={() => setSelectedTabRight(currentLangData.app.preview)}
            bg={
              selectedTabRight === currentLangData.app.preview
                ? "#24b7b0"
                : theme.customColors.gray[1001]
            }
            color={
              selectedTabRight === "Preview"
                ? theme.customColors.white[100]
                : theme.customColors.black[100]
            }
          >
            {currentLangData.app.preview}
          </Button>
          <Menu>
            <MenuButton
              {...styles.saveMenu}
              as={Button}
              bg={
                selectedTabRight === currentLangData.app.save
                  ? "#24b7b0"
                  : theme.customColors.gray[1001]
              }
              color={
                selectedTabRight === "Save"
                  ? theme.customColors.white[100]
                  : theme.customColors.black[100]
              }
              rightIcon={<IoMdArrowDropdown />}
              onClick={() => setSelectedTabRight(currentLangData.app.save)}
            >
              {currentLangData.app.save}
            </MenuButton>
            <MenuList>
              <MenuItem>{currentLangData.app.save}</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex {...styles.autherContainer}>
          <Text>{currentLangData.app.auther}</Text>
          {renderAuthor()}
        </Flex>
        <Flex>
          {renderDateandTime("Post Date")} {renderDateandTime("Post Time")}{" "}
        </Flex>
        <Flex {...styles.commonFlex}>{TagComponent()}</Flex>
        <Flex {...styles.commonFlex}>
          {SwitchComponent("Publish Globally")}
        </Flex>
        <Flex {...styles.commonFlex}>
          {SwitchComponent("Published in Engilsh")}
          </Flex>
        </Flex> */}
      </div>
    </Box>
  );
};
export default ClientList;
