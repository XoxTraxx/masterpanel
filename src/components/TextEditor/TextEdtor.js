import React from "react";
import style from "./style";
import { EditorState } from "draft-js";
import DraftEditor from "./draftEditor";
import Dropzone from "react-dropzone-uploader";
import { IoMdArrowDropdown } from "react-icons/io";
import LangContext from "../../context/languageContext";
import ReactNotifications from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import {
  Flex,
  Menu,
  Box,
  Text,
  Icon,
  Input,
  Button,
  useMediaQuery,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiTwotoneDelete,
} from "react-icons/ai";
const icon = [
  { icon: <AiOutlineArrowDown {...style.button} /> },
  { icon: <AiOutlineArrowUp {...style.button} /> },
  { icon: <AiOutlinePlus {...style.button} /> },
  { icon: <AiTwotoneDelete {...style.button} /> },
];
const TextEdtor = () => {
  const [pageName, setPageName] = React.useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [selectedOption, setSelectedOption] = React.useState("Content");
  const notificationSystem = React.useRef();

  // const onEditorStateChange = (editorState) => {
  //   console.log("editorStateeditorState", editorState);
  // };

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

  const settingWidth = () => {
    return !isMobile ? "100%" : "300px";
  };

  return (
    <Flex
      {...style.editorContainer}
      width={"100%"}
      alignItems={isMobile ? "center" : null}
    >
      <Text>Add Page Infromation</Text>
      <Flex>
        <Input  onChange={(event)=>setPageName(event.target.value)} {...style.topInput} placeholder="Enter Page Name"></Input>
        {rederLanguageDropDown()}
      </Flex>
      {/* <Box {...style.editorBoxx} maxWidth={settingWidth()}>
        <DraftEditor />
      </Box> */}
      {/* <Box {...style.innnerBox}> */}
        {/* <Flex {...style.inner2}>
          <Text {...style.imageLabel}>{currentLangData.app.image}</Text>
          <Flex>
            {icon.map((item, index) => {
              return (
                <Flex key={index} {...style.buttonFlex}>
                  {item.icon}
                </Flex>
              );
            })}
          </Flex>
        </Flex> */}
        {/* <Box {...style.dropZoneContainer} width={isMobile ? "100%" : "40%"}>
          <Dropzone accept="image/*,audio/*,video/*"></Dropzone>
        </Box> */}
        {/* <Box >
          <Input
            {...style.captionInput}
            w={isMobile?"100%":"50%"}
            placeholder={currentLangData.app.caption}
          />
        </Box>
      </Box> */}

      <Button {...style.addParagraphButton}>
        {currentLangData.app.addContent}
      </Button>
    </Flex>
  );
};
export default TextEdtor;
