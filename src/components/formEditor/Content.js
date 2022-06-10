import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Stack,
  Radio,
  Circle,
  Button,
  Textarea,
  RadioGroup,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  AiFillSetting,
  AiTwotoneDelete,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import styles from "./styles";
import { SketchPicker, ChromePicker } from "react-color";
import { AddIcon } from "@chakra-ui/icons";
import Dropzone from "react-dropzone-uploader";
import LangContext from "../../context/languageContext";
import theme from "../../config/color";
import {
  RenderDropzone,
  RenderDropContent,
  RenderRadioButtons,
  RenderMarginPadding,
  RenderMarginPaddingFlex,
} from "./formEditorComponent";
// import { Modal } from "../Modal/index";
import AddBlock from "./AddBlock";
import AddItem from "./AddItem";

const Content = () => {
  let bg = [
    // "linear(to-t, blue.200, green.500)",
    // "linear(to-l, #ffffff, #000000)",
    "linear(to-t, Red, orange, yellow, green, blue, indigo, violet)",
    // "linear(to-l, red, purple.300,#ffffff,#000000,green.500,gray.300, yellow.400,teal.300,blue.200)",
  ];
  const icon = [
    { icon: <AiFillSetting {...styles.button} /> },
    { icon: <AiOutlineArrowUp {...styles.button} /> },
    { icon: <AiOutlineArrowDown {...styles.button} /> },
    { icon: <AiTwotoneDelete {...styles.button} /> },
  ];

  const modalAssign = React.useRef(null);
  const [color, setColor] = useState("#ffffff");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [openItem, setOpenItem] = useState(false);
  const { currentLangData } = React.useContext(LangContext);

  // Event generated funtions //
  const addBlockClickEvent = () => {
    // onOpen();
    // modalAssign.current({
    //   visible: true,
    //   body: (
    //     <Flex>
    //       {/* <BiMailSend size={"50px"} color={"#72C6C8"} /> */}
    //       <Text marginLeft={"20px"} size={"sm"}>
    //         Add Block to do
    //       </Text>
    //     </Flex>
    //   ),
    //   title: "Add Block",
    //   titleOpen: "OPEN ADD BLOCK",
    //   cancel: "Cancel",
    // });
  };

  // const AddItem = ({ isOpens, closes }) => {
  //   const finalRef = React.useRef();

  //   return (
  //     <Modal
  //       isOpen={isOpens}
  //       onClose={closes}
  //       {...styles.modalMain}
  //       finalFocusRef={finalRef}
  //       motionPreset="slideInBottom"
  //     >
  //       <ModalOverlay />
  //       <ModalContent>
  //         <ModalHeader marginStart={16} marginY={2}>
  //           Add Item
  //         </ModalHeader>
  //         <ModalCloseButton />
  //         <ModalBody>
  //           <Flex {...styles.columnFlexOne}>
  //             <Flex {...styles.flexOne} justifyContent={"center"}>
  //               <Flex {...styles.flexColumn}>
  //                 <Flex
  //                   padding={3}
  //                   borderWidth={1}
  //                   alignItems={"center"}
  //                   flexDirection={"column"}
  //                 >
  //                   <Flex {...styles.flexModalBody}>
  //                     <Box
  //                       {...styles.boxWidth}
  //                       backgroundColor={
  //                         theme.customColors.masterpanelColors[200]
  //                       }
  //                     ></Box>
  //                   </Flex>
  //                   <Text fontSize={"xs"}>Columns</Text>
  //                 </Flex>
  //               </Flex>

  //               <Flex {...styles.containerFlex}>
  //                 <Flex {...styles.grayFlex}>
  //                   <Flex {...styles.flexForPadding}>
  //                     <Box {...styles.boxYellow}></Box>
  //                   </Flex>
  //                   <Text fontSize={"xs"}>Text</Text>
  //                 </Flex>
  //               </Flex>

  //               <Flex {...styles.containerFlex}>
  //                 <Flex {...styles.grayFlex}>
  //                   <Flex {...styles.flexForPadding}>
  //                     <Box {...styles.boxYellow}></Box>
  //                   </Flex>
  //                   <Text fontSize={"xs"}>Media</Text>
  //                 </Flex>
  //               </Flex>
  //             </Flex>

  //             <Flex {...styles.flexOne} marginY={5} justifyContent={"center"}>
  //               <Flex {...styles.flexColumn}>
  //                 <Flex
  //                   padding={3}
  //                   borderWidth={1}
  //                   alignItems={"center"}
  //                   flexDirection={"column"}
  //                 >
  //                   <Flex {...styles.flexModalBody}>
  //                     <Box
  //                       {...styles.boxWidth}
  //                       backgroundColor={
  //                         theme.customColors.masterpanelColors[200]
  //                       }
  //                     ></Box>
  //                   </Flex>
  //                   <Text fontSize={"xs"}>Form</Text>
  //                 </Flex>
  //               </Flex>

  //               <Flex {...styles.containerFlex}>
  //                 <Flex {...styles.grayFlex}>
  //                   <Flex {...styles.flexForPadding}>
  //                     <Box {...styles.boxYellow}></Box>
  //                   </Flex>
  //                   <Text fontSize={"xs"}>Documents</Text>
  //                 </Flex>
  //               </Flex>

  //               <Flex {...styles.containerFlex}>
  //                 <Flex {...styles.grayFlex}>
  //                   <Flex {...styles.flexForPadding}>
  //                     <Box {...styles.boxYellow}></Box>
  //                   </Flex>
  //                   <Text fontSize={"xs"}>Social Post/Article</Text>
  //                 </Flex>
  //               </Flex>
  //             </Flex>

  //             <Flex
  //               // {...styles.mainBackgroundFlex}
  //               marginY={10}
  //               width={"100%"}
  //               height={"100%"}
  //               borderTopWidth={2}
  //               flexDirection={"column"}
  //               justifyContent={"space-between"}
  //             >
  //               <Flex
  //                 // flex={1}
  //                 marginTop={5}
  //                 // background={"darkred"}
  //                 flexDirection={"column"}
  //               >
  //                 <Text marginStart={14} marginY={2}>
  //                   Container
  //                 </Text>
  //                 <Flex {...styles.flexOne} justifyContent={"center"}>
  //                   <Flex {...styles.flexColumn}>
  //                     <Flex
  //                       padding={3}
  //                       borderWidth={1}
  //                       flexDirection={"column"}
  //                       alignItems={"center"}
  //                     >
  //                       <Flex {...styles.flexModalBody} padding={2}>
  //                         <Box
  //                           {...styles.boxWidth}
  //                           backgroundColor={
  //                             theme.customColors.masterpanelColors[200]
  //                           }
  //                         ></Box>
  //                       </Flex>
  //                       <Text fontSize={"xs"}>Full Width</Text>
  //                     </Flex>
  //                   </Flex>

  //                   <Flex {...styles.containerFlex}>
  //                     <Flex {...styles.grayFlex}>
  //                       <Flex {...styles.flexForPadding}>
  //                         <Box
  //                           {...styles.boxYellow}
  //                           width={"65px"}
  //                           height={"70px"}
  //                           marginRight={0.5}
  //                         ></Box>
  //                         <Box
  //                           {...styles.boxYellow}
  //                           width={"65px"}
  //                           height={"70px"}
  //                           marginLeft={0.5}
  //                         ></Box>
  //                       </Flex>
  //                       <Text fontSize={"xs"}>Container</Text>
  //                     </Flex>
  //                   </Flex>

  //                   <Flex {...styles.containerFlex}>
  //                     <Flex {...styles.grayFlex}>
  //                       <Flex {...styles.flexForPadding}>
  //                         <Box
  //                           {...styles.boxYellow}
  //                           width={"40px"}
  //                           height={"70px"}
  //                           marginRight={0.5}
  //                         ></Box>
  //                         <Box
  //                           {...styles.boxYellow}
  //                           width={"40px"}
  //                           height={"70px"}
  //                           marginLeft={0.5}
  //                           marginRight={0.5}
  //                         ></Box>
  //                         <Box
  //                           {...styles.boxYellow}
  //                           width={"40px"}
  //                           height={"70px"}
  //                           marginLeft={0.5}
  //                         ></Box>
  //                       </Flex>
  //                       <Text fontSize={"xs"}>3 Columns</Text>
  //                     </Flex>
  //                   </Flex>
  //                 </Flex>
  //               </Flex>

  //               <Flex {...styles.flexOne} marginY={5} justifyContent={"center"}>
  //                 <Flex {...styles.flexColumn}>
  //                   <Flex
  //                     padding={3}
  //                     borderWidth={1}
  //                     flexDirection={"column"}
  //                     alignItems={"center"}
  //                   >
  //                     <Flex {...styles.flexModalBody}>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"36px"}
  //                         height={"70px"}
  //                         marginLeft={0.5}
  //                         // marginRight={0.5}
  //                       ></Box>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"34px"}
  //                         height={"70px"}
  //                         marginLeft={0.5}
  //                         // marginRight={0.5}
  //                       ></Box>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"33px"}
  //                         height={"70px"}
  //                         marginLeft={0.5}
  //                       ></Box>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"35px"}
  //                         height={"70px"}
  //                         marginLeft={0.5}
  //                       ></Box>
  //                     </Flex>
  //                     <Text fontSize={"xs"}>4 columns</Text>
  //                   </Flex>
  //                 </Flex>

  //                 <Flex {...styles.containerFlex}>
  //                   <Flex {...styles.grayFlex}>
  //                     <Flex {...styles.flexForPadding}>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"80px"}
  //                         height={"64px"}
  //                         marginRight={0.5}
  //                       ></Box>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"48px"}
  //                         height={"64px"}
  //                         marginLeft={0.5}
  //                       ></Box>
  //                     </Flex>
  //                     <Text fontSize={"xs"}>2:1 columns</Text>
  //                   </Flex>
  //                 </Flex>

  //                 <Flex {...styles.containerFlex}>
  //                   <Flex {...styles.grayFlex}>
  //                     <Flex {...styles.flexForPadding}>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"65px"}
  //                         height={"64px"}
  //                       ></Box>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"32px"}
  //                         height={"64px"}
  //                         marginLeft={0.5}
  //                       ></Box>
  //                       <Box
  //                         {...styles.boxYellow}
  //                         width={"30px"}
  //                         height={"64px"}
  //                         marginLeft={0.5}
  //                       ></Box>
  //                     </Flex>
  //                     <Text fontSize={"xs"}>2:1 1 Column</Text>
  //                   </Flex>
  //                 </Flex>
  //               </Flex>
  //             </Flex>
  //           </Flex>
  //         </ModalBody>

  //         <ModalFooter>
  //           <Button variant="ghost" mr={3} onClick={closes}>
  //             Close
  //           </Button>
  //           <Button {...styles.btnAddBlock}>Add Block</Button>
  //         </ModalFooter>
  //       </ModalContent>
  //     </Modal>
  //   );
  // };

  return (
    <Flex {...styles.mainFlex}>
      <Flex {...styles.firstMainFlex}>
        <Text {...styles.txtBlock}>Block</Text>
        <Flex {...styles.blockFlex}>
          <Flex justifyContent={"space-between"}>
            <Text {...styles.txtText}>Text</Text>
            <Flex>
              {icon.map((item, index) => {
                return (
                  <Flex key={index} {...styles.buttonFlex}>
                    {item.icon}
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
          <Textarea height={"200px"} />
        </Flex>
        <Button {...styles.btnAddItem} onClick={() => setOpenItem(true)}>
          <Text fontSize={"sm"}>Add Item</Text>
        </Button>
      </Flex>

      <Flex {...styles.secondMainFlex}>
        <Flex justifyContent={"space-between"}>
          <Text {...styles.txtBlock}>Block</Text>
          <Flex>
            {icon.map((item, index) => {
              return (
                <Flex key={index} {...styles.buttonFlex}>
                  {item.icon}
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        <Flex flexDirection={"column"}>
          <Flex {...styles.blockFlex} flexDirection={"row"}>
            {RenderDropzone()}

            <Flex {...styles.inner2}>
              <Flex justifyContent={"space-between"}>
                <Text {...styles.txtText}>{currentLangData.app.text}</Text>
                <Flex>
                  {icon.map((item, index) => {
                    return (
                      <Flex key={index} {...styles.buttonFlex}>
                        {item.icon}
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
              <Flex
                // {...styles.dropZoneContainer}
                width={isMobile ? "100%" : "100%"}
                height={"100%"}
              >
                <Textarea height={"100%"} />
              </Flex>
            </Flex>

            <Flex {...styles.inner2}>
              <Text color={"transparent"}>-</Text>
              <Flex
                {...styles.dropZoneContainer}
                width={isMobile ? "100%" : "100%"}
              >
                <AddIcon w={6} h={6} />
                <Text {...styles.txtAddItem}>Add Item</Text>
              </Flex>
            </Flex>
          </Flex>

          <Button {...styles.btnAddItem}>
            <Text fontSize={"sm"}>Add Item</Text>
          </Button>
        </Flex>
      </Flex>

      <Flex {...styles.thirdMainFlex}>
        <Text {...styles.txtBlock}>Block</Text>
        <Flex {...styles.blockFlex}>
          <Flex justifyContent={"space-between"}>
            <Text {...styles.txtText}>Form</Text>
            <Flex>
              {icon.map((item, index) => {
                return (
                  <Flex key={index} {...styles.buttonFlex}>
                    {item.icon}
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
          <Flex flexDirection={"column"}>
            <Text>Form code</Text>
            <Input />
          </Flex>
        </Flex>
        <Button {...styles.btnAddItem}>
          <Text fontSize={"sm"}>Add Item</Text>
        </Button>
      </Flex>

      <Button {...styles.btnAddItem} onClick={onOpen}>
        <Text fontSize={"sm"}>Add Block</Text>
      </Button>
      {AddBlock({ onCloses: onClose, isOpens: isOpen })}

      {AddItem({ closes: () => setOpenItem(!openItem), isOpens: openItem })}
    </Flex>
  );
};

export default Content;
