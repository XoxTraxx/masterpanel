import React from "react";
import theme from "../../config/color";
import { AiOutlineUpload } from "react-icons/ai";
import LangContext from "../../context/languageContext";
import styles from "../../components/registerComponent/styles";
import SelectCountries from "../../components/selectCountries/selectCountries";

import {
  Box,
  Text,
  Flex,
  Input,
  Select,
  Spacer,
  SimpleGrid,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

export const handleChangeStatus = ({ meta,file }, status) => {
  console.log('fil is',file);
};

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

export const renderDropdown = ({
  title,
  subTitle,
  onChange,
  placeholder,
  industryValue,
  onChangeSub,
  multiMapping,
  placeholderSub,
  addSubIndustry,
  subIndustryValue,
  subMultiMapping,
}) => {
  return (
    <Box {...styles.firstGrid}>
      <Flex>
        <Text {...styles.txtIndustry} marginBottom={4}>
          {title}
        </Text>
        <Spacer />
        {addSubIndustry ? (
          <SimpleGrid columns={2} spacing={6}>
            <Text {...styles.txtIndustry} marginBottom={4}>
              {subTitle}
            </Text>
            <Text {...styles.txtIndustry} marginBottom={4}></Text>
          </SimpleGrid>
        ) : null}
      </Flex>
      <Flex flexDirection="row">
        <Select
          d="flex"
          size="xs"
          height={10}
          marginRight={1}
          variant={"filled"}
          borderRadius={"5"}
          value={industryValue}
          onChange={onChange}
          placeholder={placeholder}
          focusBorderColor={theme.customColors.masterpanelColors[100]}
        >
          {multiMapping &&
            multiMapping?.map((value, index) => {
              // console.log("value.industry", value);
              return (
                <option color={"black"} value={value}>
                  {value}
                </option>
              );
            })}
        </Select>
        <Spacer />
        {addSubIndustry ? (
          <Select
            d="flex"
            size="xs"
            height={10}
            marginLeft={1}
            variant={"filled"}
            borderRadius={"5"}
            value={subIndustryValue}
            onChange={onChangeSub}
            placeholder={placeholderSub}
            focusBorderColor={theme.customColors.masterpanelColors[100]}
          >
            {subMultiMapping &&
              subMultiMapping?.map((value, index) => {
                // console.log("value.industry", value);
                return (
                  <option color={"black"} value={value}>
                    {value}
                  </option>
                );
              })}
          </Select>
        ) : null}
      </Flex>
    </Box>
  );
};

export const renderFields = ({
  type,
  title,
  value,
  onBlur,
  onChange,
  mandatory,
  isInvalid,
  isDisabled,
  maxLength,
  placeholder,
  defaultValue,
  countryCode,
  valueNumber,
  selectCountry,
  show,
  readOnlyInput,
  defaultValueNumber,
  showSelectCountries,
}) => {
  return (
    <Box {...styles.firstGrid}>
      <Flex>
        {mandatory ? (
          <Text
            color={"red"}
            paddingRight={2}
            fontWeight={"700"}
            fontSize={"large"}
          >
            *
          </Text>
        ) : null}
        {showSelectCountries ? (
          <Flex alignItems={"center"} flex={1}>
            <Text {...styles.txtName} marginTop={0}>
              {title}
            </Text>
            <Spacer />
            {mandatory ? (
              <Text
                color={"red"}
                paddingRight={2}
                fontWeight={"700"}
                fontSize={"large"}
              >
                *
              </Text>
            ) : null}
            <SelectCountries
              id={"country"}
              width={"50%"}
              fontSize={"sm"}
              variant={"filled"}
              onChange={selectCountry}
              defaultValue={countryCode}
              focusBorderColor={theme.customColors.masterpanelColors[100]}
            />
          </Flex>
        ) : (
          <Text {...styles.txtName}>{title}</Text>
        )}
      </Flex>
      {showSelectCountries ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text
            {...styles.txtName}
            marginTop={2}
            marginRight={2}
            fontSize={"18px"}
            fontWeight={"normal"}
          >
            +{countryCode}
          </Text>
          <NumberInput
            width={"100%"}
            variant={"filled"}
              value={valueNumber}
              isInvalid={isInvalid}
            focusBorderColor={theme.customColors.masterpanelColors[100]}
          >
            <NumberInputField
              // value={valueNumber}
              marginTop={2}
              fontSize={"sm"}
              {...styles.txtName}
              // inputMode={"tel"}
              isDisabled={isDisabled}
              placeholder={placeholder}
              errorBorderColor="red.300"
              defaultValue={defaultValueNumber}
              onBlur={(e) => onBlur && onBlur(e)}
              onChange={(evt) => onChange && onChange(evt)}
            />
          </NumberInput>
          {/* <Input
            // type={type}
            inputMode={"tel"}
            value={value}
            marginTop={2}
            fontSize={"sm"}
            variant={"filled"}
            {...styles.txtName}
            max={maxLength}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            placeholder={placeholder}
            errorBorderColor="red.300"
            onBlur={(e) => onBlur && onBlur(e)}
            onChange={(evt) => onChange && onChange(evt)}
          /> */}
        </Flex>
      ) : (
        <Input
          type={type}
          value={value}
          marginTop={0}
          fontSize={"sm"}
          width={"100%"}
          variant={"filled"}
          {...styles.txtName}
          max={maxLength}
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          maxLength={maxLength}
          placeholder={placeholder}
          readOnly={readOnlyInput}
          defaultValue={defaultValue}
          onBlur={(e) => onBlur && onBlur(e)}
          onChange={(evt) => onChange && onChange(evt)}
          focusBorderColor={theme.customColors.masterpanelColors[100]}
        />
      )}
    </Box>
  );
};

