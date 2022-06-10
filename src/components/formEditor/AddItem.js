import React from "react";
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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";
import styles from "./styles";
import { ChromePicker } from "react-color";
import LangContext from "../../context/languageContext";
import theme from "../../config/color";
import {
  RenderDropContent,
  RenderRadioButtons,
  RenderMarginPaddingFlex,
} from "./formEditorComponent";

const AddItem = ({ isOpens, closes }) => {
  let bg = ["linear(to-t, Red, orange, yellow, green, blue, indigo, violet)"];
  const finalRef = React.useRef();
  const [color, setColor] = React.useState("#FFFFFF");
  //   const { onClose } = useDisclosure();
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  return (
    <>
      <Modal
        isOpen={isOpens}
        onClose={closes}
        {...styles.modalMain}
        finalFocusRef={finalRef}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader marginStart={16} marginY={2}>
            Add Item
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex {...styles.columnFlexOne}>
              <Flex {...styles.flexOne} justifyContent={"center"}>
                <Flex {...styles.flexColumn}>
                  <Flex
                    padding={3}
                    borderWidth={1}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Flex {...styles.flexModalBody}>
                      <Box
                        {...styles.boxWidth}
                        backgroundColor={
                          theme.customColors.masterpanelColors[200]
                        }
                      ></Box>
                    </Flex>
                    <Text {...styles.txtExtraSmall}>Columns</Text>
                  </Flex>
                </Flex>

                <Flex {...styles.containerFlex}>
                  <Flex {...styles.grayFlex}>
                    <Flex {...styles.flexForPadding}>
                      <Box {...styles.boxYellow}></Box>
                    </Flex>
                    <Text {...styles.txtExtraSmall}>Text</Text>
                  </Flex>
                </Flex>

                <Flex {...styles.containerFlex}>
                  <Flex {...styles.grayFlex}>
                    <Flex {...styles.flexForPadding}>
                      <Box {...styles.boxYellow}></Box>
                    </Flex>
                    <Text {...styles.txtExtraSmall}>Media</Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex {...styles.flexOne} {...styles.marginCentered}>
                <Flex {...styles.flexColumn}>
                  <Flex {...styles.formMainFlex}>
                    <Flex {...styles.flexModalBody}>
                      <Box {...styles.boxWidthBack}></Box>
                    </Flex>
                    <Text {...styles.txtExtraSmall}>Form</Text>
                  </Flex>
                </Flex>

                <Flex {...styles.containerFlex}>
                  <Flex {...styles.grayFlex}>
                    <Flex {...styles.flexForPadding}>
                      <Box {...styles.boxYellow}></Box>
                    </Flex>
                    <Text {...styles.txtExtraSmall}>Documents</Text>
                  </Flex>
                </Flex>

                <Flex {...styles.containerFlex}>
                  <Flex {...styles.grayFlex}>
                    <Flex {...styles.flexForPadding}>
                      <Box {...styles.boxYellow}></Box>
                    </Flex>
                    <Text {...styles.txtExtraSmall}>Social Post/Article</Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex {...styles.mainFlexContainer}>
                <Flex {...styles.boxPadding}>
                  <Text {...styles.txtContainer}>Container</Text>
                  <Flex {...styles.flexOne} justifyContent={"center"}>
                    <Flex {...styles.flexColumn}>
                      <Flex {...styles.flexForGap}>
                        <Flex {...styles.flexModalBody} padding={2}>
                          <Box {...styles.boxWidthBack}></Box>
                        </Flex>
                        <Text {...styles.txtExtraSmall}>Full Column</Text>
                      </Flex>
                    </Flex>

                    <Flex {...styles.containerFlex}>
                      <Flex {...styles.grayFlex}>
                        <Flex {...styles.flexForPadding}>
                          <Box
                            {...styles.boxYellowContainer}
                            {...styles.marginRightLeft}
                          ></Box>
                          <Box
                            {...styles.boxYellowContainer}
                            {...styles.marginingLeft}
                          ></Box>
                        </Flex>
                        <Text {...styles.txtExtraSmall}>2 Columns</Text>
                      </Flex>
                    </Flex>

                    <Flex {...styles.containerFlex}>
                      <Flex {...styles.grayFlex}>
                        <Flex {...styles.flexForPadding}>
                          <Box
                            {...styles.boxYellow3Columns}
                            {...styles.marginingRight}
                          ></Box>
                          <Box
                            {...styles.boxYellow3Columns}
                            {...styles.marginRightLeft}
                          ></Box>
                          <Box
                            {...styles.boxYellow3Columns}
                            {...styles.marginingLeft}
                          ></Box>
                        </Flex>
                        <Text {...styles.txtExtraSmall}>3 Columns</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex {...styles.flexOne} marginY={5} justifyContent={"center"}>
                  <Flex {...styles.flexColumn}>
                    <Flex {...styles.mainFlexOf4Columns}>
                      <Flex {...styles.flexModalBody}>
                        <Box
                          {...styles.boxYellow4Columns}
                          marginRight={0.5}
                        ></Box>
                        <Box
                          {...styles.boxYellow4Columns}
                          marginLeft={0.5}
                          marginRight={0.5}
                        ></Box>
                        <Box
                          {...styles.boxYellow4Columns}
                          marginLeft={0.5}
                          marginRight={0.5}
                        ></Box>
                        <Box
                          {...styles.boxYellow4Columns}
                          marginLeft={0.5}
                        ></Box>
                      </Flex>
                      <Text {...styles.txtExtraSmall}>4 columns</Text>
                    </Flex>
                  </Flex>

                  <Flex {...styles.containerFlex}>
                    <Flex {...styles.grayFlex}>
                      <Flex {...styles.flexForPadding}>
                        <Box {...styles.twoRatioOne}></Box>
                        <Box {...styles.oneRatioTwo}></Box>
                      </Flex>
                      <Text {...styles.txtExtraSmall}>2:1 columns</Text>
                    </Flex>
                  </Flex>

                  <Flex {...styles.containerFlex}>
                    <Flex {...styles.grayFlex}>
                      <Flex {...styles.flexForPadding}>
                        <Box {...styles.twoRatioOneOne}></Box>
                        <Box {...styles.oneRatioTwoOne}></Box>
                        <Box {...styles.oneRatioTwoOne}></Box>
                      </Flex>
                      <Text {...styles.txtExtraSmall}>2:1 1 Column</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={closes}>
              Close
            </Button>
            <Button {...styles.btnAddBlock}>Add Block</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddItem;
