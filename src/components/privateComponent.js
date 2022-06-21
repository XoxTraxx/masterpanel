import React,{useRef} from "react";
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
  Button,
  InputGroup,
  InputRightElement,
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
  phaseNumber,
  handleItemChange,
  onChangeAddFields,
  onChangedaynamicFields,
  fields,
  phaseName,
  onRemoveField,
  ref,
  disable,
  isDisable
}) => {
  console.log('fields',fields)
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
       <Flex >
         <>
          <Input 
            type="text" 
            onkeydown="return /[a-z]/i.test(event.key)" 
            ref={ref}    
            placeholder={'Add Field'} 
            {...styles.phaseInputs} 
            onChange={(e)=>{
            handleItemChange(e.target.value,)}
            }  
            bg={'white'} />
           <Button isDisabled={disable} h={'30px'} onClick={()=>onChangeAddFields()}  color={'white'} bg={'#53b1ad'} fontSize={10} padding={3} ml={2}> Add Fields</Button>
          </>
        </Flex>    
        {fields? fields.map((item,index)=>{
            return <Flex
                      bg={'#efefef'}  
                      borderRadius={2} 
                      borderWidth={1} padding={1} >
                     <InputGroup> 
                        <Input placeholder={item.name} onChange ={(event) => onChangedaynamicFields &&onChangedaynamicFields(event.target.value,index,item.name)}   bg={'white'} />
                        <InputRightElement>
                          <Button onClick={()=>onRemoveField(item.name,index)}  color={'white'} h={'30px'} bg={"#53b1ad"}  size='sm' >
                            X
                          </Button>
                       </InputRightElement>
                     </InputGroup>
                  </Flex>
                  })
             :null}
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
