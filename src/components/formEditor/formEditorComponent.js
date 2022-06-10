import React from "react";
import styles from "./styles";
import Dropzone from "react-dropzone-uploader";
import { AiOutlineUpload } from "react-icons/ai";
import LangContext from "../../context/languageContext";
import {
  Box,
  Flex,
  Text,
  Stack,
  Radio,
  RadioGroup,
  useMediaQuery,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export const renderInsideDropzone = () => {
  return (
    <Flex flexDirection={"column"} padding={5} alignItems={"center"}>
      <Text {...styles.txtName} fontSize={"12px"}>
        Upload File
      </Text>
      <AiOutlineUpload {...styles.iconStyle} />
      <Text {...styles.txtName} fontSize={"12px"}>
        Drag & Drop
      </Text>
    </Flex>
  );
};

export const RenderDropzone = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);

  return (
    <Flex {...styles.inner2}>
      <Text {...styles.txtText}>{currentLangData.app.image}</Text>
      <Box {...styles.dropZoneContainer} width={isMobile ? "100%" : "100%"}>
        <Dropzone
          inputContent={renderInsideDropzone()}
          styles={{
            dropzone: {
              // padding: "10px",
              minWidth: "60px",
              maxWidth: "150px",
              minHeight: "120px",
              maxHeight: "150px",
              borderRadius: "20px",
              borderColor: "transparent",
              scrollbarColor: "#03eded",
            },
          }}
        ></Dropzone>
      </Box>
    </Flex>
  );
};

export const RenderDropContent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      {...styles.dropZoneContainer}
      width={isMobile ? "100%" : "100%"}
      width={"100%"}
    >
      <Dropzone
        inputContent={renderInsideDropzone()}
        styles={{
          dropzone: {
            // padding: "10px",
            minWidth: "200px",
            maxWidth: "400px",
            minHeight: "120px",
            maxHeight: "150px",
            borderRadius: "20px",
            borderColor: "transparent",
            scrollbarColor: "#03eded",
          },
        }}
      ></Dropzone>
    </Flex>
  );
};

export const RenderRadioButtons = ({
  title,
  first,
  second,
  third,
  minusThird = false,
}) => {
  const [value, setValue] = React.useState("1");
  return (
    <Flex width={"100%"} flexDirection={"column"}>
      <Text fontSize={"xs"} marginY={2}>
        {title}
      </Text>

      <RadioGroup width={"100%"} onChange={setValue} value={value} size={"sm"}>
        <Stack direction="row">
          <Radio value="1">{first}</Radio>
          <Radio value="2">{second}</Radio>
          {!minusThird ? <Radio value="3">{third}</Radio> : null}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export const RenderMarginPadding = ({ title, pixel }) => {
  return (
    <Flex marginX={2}>
      <Text fontSize={"xs"}>{title}</Text>
      <NumberInput min={10} max={20} size={"xs"} defaultValue={15} marginX={2}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text fontSize={"xs"}>{pixel}</Text>
    </Flex>
  );
};

export const RenderMarginPaddingFlex = () => {
  return (
    <Flex
      padding={3}
      // boxSize={"xs"}
      flex={1}
      width={"100%"}
      borderWidth={2}
      backgroundColor={"blackAlpha.100"}
    >
      <Flex flexDirection={"column"}>
        <Flex padding={3} backgroundColor={"#FFF08F"}>
          <Flex boxSize={"100px"} backgroundColor={"#DBDBDB"}></Flex>
        </Flex>
      </Flex>

      <Flex
        flexDirection={"column"}
        flex={1}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"space-evenly"}
        // padding={3}
      >
        {RenderMarginPadding({
          title: "Top",
          pixel: "px",
        })}
        {RenderMarginPadding({
          title: "Bottom",
          pixel: "px",
        })}
        {RenderMarginPadding({
          title: "Left",
          pixel: "px",
        })}
        {RenderMarginPadding({
          title: "Right",
          pixel: "px",
        })}
      </Flex>
    </Flex>
  );
};
