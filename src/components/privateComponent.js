import React from "react";
import theme from "../config/color";
import styles from "./registerComponent/styles2";
import {
  Box,
  Text,
  Flex,
  Radio,
  Stack,
  Input,
  Spacer,
  SimpleGrid,
  RadioGroup,
} from "@chakra-ui/react";

import LangContext from "../context/languageContext";

export const RenderFields = ({
  type,
  title,
  color,
  value,
  onChange,
  mandatory,
  maxLength,
  isDisabled,
  placeholder,
  readOnlyInput,
  showSelectCountries,
  // setValueRadio,
  // valueRadio,
}) => {
  const { currentLangData } = React.useContext(LangContext);

  const [valueRadio, setValueRadio] = React.useState("1");

  return (
    <Box {...styles.firstGrid}>
      <Flex>
        {mandatory ? <Text {...styles.mandatoryStar}>*</Text> : null}
        {showSelectCountries ? (
          <Flex {...styles.centerdFields}>
            <Text {...styles.txtName} marginTop={0}>
              {title}
            </Text>
          </Flex>
        ) : (
          <Text {...styles.txtName}>{title}</Text>
        )}
      </Flex>
      {showSelectCountries ? (
        <RadioGroup onChange={setValueRadio} value={valueRadio} size="10px">
          <Stack {...styles.stackRadioBtn}>
            <Flex>
              <Radio {...styles.radioBtn} value="1" />
              <Text>{currentLangData.app.batch}</Text>
            </Flex>
            <Flex>
              <Radio {...styles.radioBtn} value="2" />
              <Text> {currentLangData.app.individualProduct}</Text>
            </Flex>
          </Stack>
        </RadioGroup>
      ) : (
        <Input
          size="md"
          type={type}
          // color={color}
          value={value}
          marginTop={1}
          variant={"filled"}
          max={maxLength}
          readOnly={readOnlyInput}
          maxLength={maxLength}
          isDisabled={isDisabled}
          placeholder={placeholder}
          {...styles.inputFieldsOfMany}
          focusBorderColor={theme.customColors.masterpanelColors[100]}
          onChange={(evt) => onChange && onChange(evt)}
        />
      )}
    </Box>
  );
};

export const renderPhaseQuestions = ({
  firstPlaceholer,
  secondPlaceholder,
  thirdPlaceholder,
  forthPlaceholder,
  firstonChange,
  secondonChange,
  thirdonChange,
  forthonChange,
  mandatory,
  value1,
  value2,
  value3,
  value4,
}) => {
  return (
    <Flex backgroundColor="#f6f5fa" flex={1} padding={5}>
      <SimpleGrid {...styles.simpleGridFlex} width={"100%"}>
        <Flex>
          {mandatory ? <Text {...styles.mandatoryStar}>*</Text> : null}
          <Input
            {...styles.phaseInputs}
            value={value1}
            placeholder={firstPlaceholer}
            onChange={(evt) => firstonChange && firstonChange(evt)}
          ></Input>
        </Flex>

        <Input
          {...styles.phaseInputs}
          value={value2}
          placeholder={secondPlaceholder}
          onChange={(evt) => secondonChange && secondonChange(evt)}
        ></Input>

        <Text></Text>

        <Input
          value={value3}
          {...styles.phaseInputs}
          placeholder={thirdPlaceholder}
          onChange={(evt) => thirdonChange && thirdonChange(evt)}
        ></Input>

        <Text></Text>

        <Input
          {...styles.phaseInputs}
          value={value4}
          placeholder={forthPlaceholder}
          onChange={(evt) => forthonChange && forthonChange(evt)}
        ></Input>
      </SimpleGrid>
    </Flex>
  );
};

export const renderSuperFields = ({
  onBlur,
  onChange,
  isInvalid,
  placeholder,
  value,readOnlyInput,
  mandatory,
}) => {
  return (
    <Flex>
      {mandatory ? <Text {...styles.mandatoryStar}>*</Text> : null}

      <Input
        size={"sm"}
        value={value}
        variant={"filled"}
        isInvalid={isInvalid}
        readOnly={readOnlyInput}
        placeholder={placeholder}
        onBlur={() => onBlur && onBlur()}
        onChange={(k) => onChange && onChange(k)}
        focusBorderColor={theme.customColors.masterpanelColors[100]}
      />
    </Flex>
  );
};

export const RenderPhaseHeading = () => {
  const { currentLangData } = React.useContext(LangContext);
  return (
    <>
      <Text {...styles.txtName} marginBottom={2}>
        {currentLangData.app.requiredInPhase}
      </Text>
      <Flex>
        <SimpleGrid {...styles.phaseQuestion}>
          <Text>{currentLangData.app.phase}</Text>
          <Text>{currentLangData.app.questionToAsk}</Text>
        </SimpleGrid>
      </Flex>
    </>
  );
};
