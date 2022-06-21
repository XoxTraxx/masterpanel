import {
  Flex,
  Menu,
  Box,
  Text,
  Input,
  Button,
  MenuList,
  MenuItem,
  Switch,
  Stack,
  Textarea,
  MenuButton,
  SimpleGrid,
  useMediaQuery,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import style from "./style";
import TextEditor from "./TextEdtor";
import theme from "../../config/color";
import React, { Suspense } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "../../context/authContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { TagsInput } from "react-tag-input-component";
import { DateMenu } from "../../components/Menu/index";
import LangContext from "../../context/languageContext";

const Editor = ({ displayName }) => {
  const history = useHistory();
  const { merchant } = useAuthState();
  const [parent, setParent] = React.useState("jjohih");
  const [publish, setPublish] = React.useState("");
  const [pageName, setPageName] = React.useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selected, setSelected] = React.useState(["Home page"]);
  const [selectedTab, setSelectedTab] = React.useState("Preview");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [tempName, setTempName] = React.useState("");
  const [tempDesc, setTempDesc] = React.useState("");
  const [seoName, setSeoName] = React.useState("");
  const [seoDesc, setSeoDesc] = React.useState("");
  const [seoValue, setSeoValue] = React.useState(
    `<meta name="Keywords" content="Description of your page" />`
  );
  const [metaValue, setMetaValue] = React.useState(
    `<meta name="" content="Description of your page" />`
  );
  const renderAuthor = () => {
    return (
      <Menu>
        <MenuButton
          {...style.menuButton}
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
  const rederLanguageDropDown = () => {
    return (
      <Menu>
        <MenuButton
          rightIcon={<IoMdArrowDropdown />}
          {...style.languageDropDown}
          as={Button}
        >
          English
        </MenuButton>
        <MenuList>
          <MenuItem>English</MenuItem>
        </MenuList>
      </Menu>
    );
  };

  const onChange = (title, date) => {
    if (title === "Post Date") {
      setSelectedDate(date);
    } else {
      setSelectedTime(date);
    }
    // return {
    //   "Post Date": setSelectedDate(date),
    //   "Post Time": setSelectedTime(date),
    // }[title];
  };

  const TagComponent = () => {
    return (
      <Box {...style.tagContainer}>
        <Text {...style.tagLabel}>{currentLangData.app.cataegoryTag}</Text>
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

  const handleMetaValues = (event, flag) => {
    setMetaValue(
      `<meta name="${
        flag === "name" ? event.target.value : tempName
      }" content="${flag === "content" ? event.target.value : tempDesc}" />`
    );
  };

  const handleSeoValues = (event, flag) => {
    setSeoValue(
      `<meta name="${
        flag === "name" ? event.target.value : seoName
      }" content="${flag === "content" ? event.target.value : seoDesc}" />`
    );
  };

  const renderMetaData = () => {
    return (
      <>
        <Input
          onChange={(e) => {
            setTempName(e.target.value);
            handleMetaValues(e, "name");
          }}
          placeholder={"value"}
          mt={2}
        ></Input>
        <Textarea
          onChange={(e) => {
            setTempDesc(e.target.value);
            handleMetaValues(e, "content");
          }}
          placeholder={"description"}
          mt={2}
        ></Textarea>
        <Input
          mt={2}
          isDisabled={true}
          value={metaValue}
          onChange={(e) => setMetaValue(e.target.value)}
        ></Input>
      </>
    );
  };

  const renderSeoData = () => {
    return (
      <>
        <Input
          onChange={(e) => {
            setSeoName(e.target.value);
            handleSeoValues(e, "name");
          }}
          placeholder={"value"}
          mt={2}
        ></Input>
        <Textarea
          onChange={(e) => {
            setSeoDesc(e.target.value);
            handleSeoValues(e, "content");
          }}
          placeholder={"description"}
          mt={2}
        ></Textarea>
        <Input
          mt={2}
          value={seoValue}
          isDisabled={true}
          onChange={(e) => setMetaValue(e.target.value, "content")}
        ></Input>
      </>
    );
  };
  const renderTabs = () => {
    console.log("meta-tag: ", metaValue);
    return (
      <Tabs variant="unstyled">
        <TabList>
          <Tab m={2} as={Button} _selected={{ color: "white", bg: "#24b7b0" }}>
            content
          </Tab>
          <Tab m={2} as={Button} _selected={{ color: "white", bg: "#24b7b0" }}>
            Meta
          </Tab>
          <Tab m={2} as={Button} _selected={{ color: "white", bg: "#24b7b0" }}>
            Seo
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex flexDirection={"column"}>
              <Input
                onChange={(event) => {
                  setParent(event.target.value);
                }}
                {...style.topInput}
                placeholder="Parent"
              ></Input>
              <Textarea placeholder={"Description"} {...style.topInput} />
              <Button
                isDisabled={pageName === "" ? true : false}
                onClick={goToAddContent}
                {...style.addParagraphButton}
              >
                {currentLangData.app.addContent}
              </Button>
            </Flex>
          </TabPanel>
          <TabPanel>{renderMetaData()}</TabPanel>
          <TabPanel>{renderSeoData()}</TabPanel>
        </TabPanels>
      </Tabs>
    );
  };
  const goToAddContent = () => {
    if (history.location.state?.displayName === "Add New Form") {
      history.push({
        pathname: "FormEditor",
        data: {
          publish: publish,
          name: pageName,
          postDate: selectedDate,
          postTime: selectedTime,
          parent: parent,
          meta: {
            name: tempName,
            description: tempDesc,
          },
          seo: {
            name: seoName,
            description: seoDesc,
          },
          displayName: displayName,
        },
      });
    } else {
      history.push({
        pathname: "FormEditor",
        data: {
          publish: publish,
          name: pageName,
          postDate: selectedDate,
          postTime: selectedTime,
          parent: parent,
          meta: {
            name: tempName,
            description: tempDesc,
          },
          seo: {
            name: seoName,
            description: seoDesc,
          },
          displayName: displayName,
        },
      });
    }
  };

  const renderDateandTime = (title) => {
    return (
      <Box {...style.dateBox}>
        <Text {...style.dateLabel}>{title}</Text>
        <DateMenu
          onChange={(date) => onChange(title, date)}
          bg={theme.customColors.gray[1001]}
          showTimeSelect={title === "Post Time" ? true : false}
          showTimeSelectOnly={title === "Post Time" ? true : false}
          showDateSelect={title === "Post Time" ? false : true}
          selected={title === "Post Date" ? selectedDate : selectedTime}
        />
      </Box>
    );
  };
  const SwitchComponent = (title) => {
    return (
      <SimpleGrid {...style.switcContainer}>
        <Text {...style.switchLabel}>{title}</Text>
        <Flex>
          <Switch {...style.switch} />
        </Flex>
      </SimpleGrid>
    );
  };

  return (
    <Suspense>
      <SimpleGrid {...style.mainContainer}>
        <Flex
          flexDirection={isMobile ? "column" : "row"}
          {...style.upperConatiner}
        >
          <Flex width={isMobile ? "100%" : "70%"} {...style.leftContainer}>
            <Text style={{ fontWeight: "bold" }}>Add Page Infromation</Text>
            <Flex>
              <Input
                id={"test"}
                onChange={(event) => {
                  setPageName(event.target.value);
                  console.log(
                    "Value is",
                    document.getElementById("test").value
                  );
                }}
                {...style.topInput}
                placeholder={
                  displayName === "Add New Page" ? "Enter  Name" : "Enter  Name"
                }
              ></Input>

              {rederLanguageDropDown()}
            </Flex>
            {renderTabs()}
          </Flex>
          <Flex width={isMobile ? "100%" : "30%"} {...style.rightContainer}>
            {/* <Flex {...style.menuContainer}>
              <Button
                {...style.rnButton}
                isDisabled={"true"}
                onClick={() => setSelectedTab(currentLangData.app.preview)}
                bg={
                  selectedTab === currentLangData.app.preview
                    ? "#24b7b0"
                    : theme.customColors.gray[1001]
                }
                color={
                  selectedTab === "Preview"
                    ? theme.customColors.white[100]
                    : theme.customColors.black[100]
                }
              >
                {currentLangData.app.preview}
              </Button>
              <Menu>
                <MenuButton
                  {...style.saveMenu}
                  as={Button}
                  bg={
                    selectedTab === currentLangData.app.save
                      ? "#24b7b0"
                      : theme.customColors.gray[1001]
                  }
                  color={
                    selectedTab === "Save"
                      ? theme.customColors.white[100]
                      : theme.customColors.black[100]
                  }
                  rightIcon={<IoMdArrowDropdown />}
                  onClick={() => setSelectedTab(currentLangData.app.save)}
                >
                  {currentLangData.app.save}
                </MenuButton>
                <MenuList>
                  <MenuItem>{currentLangData.app.save}</MenuItem>
                </MenuList>
              </Menu>
            </Flex> */}
            <Flex {...style.autherContainer}>
              <Text>{currentLangData.app.auther}</Text>
              {renderAuthor()}
            </Flex>
            <Flex>
              {renderDateandTime("Post Date")} {renderDateandTime("Post Time")}{" "}
            </Flex>
            <Flex {...style.commonFlex}>{TagComponent()}</Flex>
            <Flex {...style.commonFlex}>
              {SwitchComponent("Publish Globally")}
            </Flex>
            <Flex {...style.commonFlex}>
              {SwitchComponent("Published in English")}
            </Flex>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Suspense>
  );
};

export default Editor;
