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

const AddBlock = ({ isOpens, onCloses }) => {
  let bg = ["linear(to-t, Red, orange, yellow, green, blue, indigo, violet)"];
  const finalRef = React.useRef();
  const [color, setColor] = React.useState("#FFFFFF");
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  return (
    <>
      <Modal
        isOpen={isOpens}
        onClose={onCloses}
        {...styles.modalMain}
        finalFocusRef={finalRef}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Block</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex {...styles.columnFlexOne}>
              <Flex {...styles.flexOne}>
                <Flex {...styles.flexColumn}>
                  <Flex
                    padding={3}
                    borderWidth={1}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Flex {...styles.flexModalBody}>
                      <Box
                        {...styles.boxWidth}
                        backgroundColor={
                          theme.customColors.masterpanelColors[200]
                        }
                      ></Box>
                    </Flex>
                    <Text fontSize={"xs"}>Full Width</Text>
                  </Flex>
                </Flex>

                <Flex {...styles.containerFlex}>
                  <Flex {...styles.grayFlex}>
                    <Flex {...styles.flexForPadding}>
                      <Box {...styles.boxYellow}></Box>
                    </Flex>
                    <Text fontSize={"xs"}>Container</Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex {...styles.mainBackgroundFlex}>
                <Flex {...styles.backgroundImageFlex}>
                  <Text {...styles.txtBackgroundImage}>Background Image</Text>
                  <Flex {...styles.flexRadioGroup}>
                    <Flex flexDirection={"column"} width={"100%"}>
                      {RenderRadioButtons({
                        first: "Add Image",
                        // title: "Position",
                        // third: "Smooth",
                        minusThird: true,
                        second: "None",
                      })}
                      {/* <RadioGroup defaultValue="1">
                        <Stack spacing={5} direction="row" fontSize={"xs"}>
                          <Radio {...styles.radioCircle} value="1">
                            <Text fontSize={"xs"}>Add Image</Text>
                          </Radio>
                          <Radio {...styles.radioCircle2} value="2">
                            <Text fontSize={"xs"}>None</Text>
                          </Radio>
                        </Stack>
                      </RadioGroup> */}
                      {RenderDropContent()}

                      <Flex flexDirection={"column"} width={"100%"}>
                        {RenderRadioButtons({
                          first: "Default",
                          title: "Position",
                          third: "Smooth",
                          second: "Fixed",
                        })}
                        {RenderRadioButtons({
                          title: "Size",
                          first: "Cover",
                          third: "Stretch",
                          second: "Contain",
                        })}
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex {...styles.mainBackgroundColorFlex}>
                  <Flex {...styles.flexBackColor}>
                    <Text {...styles.txtBackgroundColorTxt}>
                      Background Color
                    </Text>
                  </Flex>
                  <Flex {...styles.showColorFlex}>
                    <Flex {...styles.centeredAlign}>
                      <Text
                        {...styles.txtColorInput}
                        color={color === "#FFFFFF" ? "black" : "white"}
                        backgroundColor={color}
                      >
                        {color}
                      </Text>
                      <Circle
                        onClick={() =>
                          setShowColorPicker(
                            (showColorPicker) => !showColorPicker
                          )
                        }
                        {...styles.circleI}
                        bgGradient={bg}
                      ></Circle>
                      <Text
                        {...styles.txtTransparent}
                        color={theme.customColors.masterpanelColors[100]}
                        onClick={() =>
                          setShowColorPicker(
                            (showColorPicker) => !showColorPicker
                          )
                        }
                      >
                        {showColorPicker ? "Close Picker" : "Transparent"}
                      </Text>
                    </Flex>

                    {showColorPicker && (
                      <Flex {...styles.centeredJustify}>
                        <ChromePicker
                          color={color}
                          onChange={(update) => setColor(update?.hex)}
                        />
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </Flex>

              <Flex {...styles.flexJustify}>
                <Flex {...styles.flexMargin}>
                  <Text {...styles.txtMargin}>Margin</Text>
                  {RenderMarginPaddingFlex()}
                </Flex>

                <Flex {...styles.paddingMainFlex}>
                  <Flex {...styles.flexTxtForPadding}>
                    <Text {...styles.txtPaddingHeading}>Padding</Text>
                  </Flex>
                  {RenderMarginPaddingFlex()}
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onCloses}>
              Close
            </Button>
            <Button {...styles.btnAddBlock}>Add Block</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBlock;
