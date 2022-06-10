import React from "react";
import ReactDOM from "react-dom";
import { renderFields } from "../components/registerComponent/renderFunction";
import Pdf from "react-to-pdf";
import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Radio,
  Select,
  Button,
  Spacer,
  SimpleGrid,
  RadioGroup,
} from "@chakra-ui/react";
// import "./styles.css";
import {
  RenderFields,
  renderSuperFields,
  renderPhaseQuestions,
} from "../components/privateComponent";
import ApiManager from "../config/apiManager";

import {
  renderDropdown,
  handleChangeStatus,
  renderInsideDropzone,
} from "../components/registerComponent/renderFunction";

import { useHistory, useLocation } from "react-router-dom";
import LangContext from "../context/languageContext";
import TraxImage from "../components/image/Trax-background-06.png";

import styles from "../components/registerComponent/styles2";
const options = {
  orientation: "portrait",
  unit: "in",
  format: [20, 11],
};

export const ReactPdf = (props) => {
  const { currentLangData } = React.useContext(LangContext);

  const options = {
    orientation: "portrait",
    unit: "in",
    format: [20, 12],
  };

  let history = useHistory();
  const apimanager = ApiManager.getInstance();
  let location = useLocation();
  const ref = React.createRef();
  console.log("LocationData", location?.state?.data);
  let data = location?.state?.data;
  let previewData = data;
  console.log("const ReactPdf", props, ref);

  const takingBack = (e) => {
    e.preventDefault();
    // history.goBack();
    // console.log("Data previewData=>",previewData)
    history.push({
      pathname: `/RegisterForm2`,
      state: { data: previewData },
    });
  };

  const submitContinue = () => {
    apimanager
      .post("registerClient", data)
      .then((res) => {
        if (res.message === 6422) {
          // setMessage("Successfully Registered");
        }
        console.log(data, "RESPONSE OF registerStaff", res);
        if (res.message === 6212) {
          // setMessage("Error in Super Admin Register!");
        }
      })
      .catch((error) => {
        // setLoading(false);
        // setDisabledSubmit(false);
        console.log("Error Of registerMaster", error);
      });
  };

  return (
    <Flex
      {...styles.mainContainer}
      style={{
        // height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${TraxImage})`,
      }}
    >
      <>
        <Flex {...styles.formFlex}>
          <Button
            {...styles.btnBack}
            //     isLoading={loading}
            // isDisabled={disabledSubmit}
            onClick={(e) => takingBack(e)}
          >
            <Text {...styles.backTxt}>Back</Text>
          </Button>
          <Text {...styles.txtRegistered}>
            {/* {currentLangData.app.registerationHeading2} */}
            Register Preview
          </Text>
          <Flex {...styles.flexTextBold}>
            <Flex ref={ref} {...styles.mainFormFlex}>
              {renderFields({
                mandatory: true,
                  readOnlyInput: true,
                  value: data?.name,
                title: "Name",
                //     onChange: (evt) => {
                //       handleonChange(evt, "name");
                //     },
              })}
              <SimpleGrid {...styles.simpleGridFlex}>
                {renderFields({
                  title: "Company Name",
                  value: data?.companyName,
                  readOnlyInput: true,
                })}

                {renderFields({
                  value: data?.companyRegistrationNumber,
                  // type: "number",
                  title: "Company Registration no.",
                  readOnlyInput: true,
                })}

                {renderFields({
                  // type: "tel",
                  maxLength: 13,
                  mandatory: true,
                  value:
                    "+" + data?.companyCountryCode + data?.companyPhoneNumber,
                  title: "Company Phone",
                  showSelectCountries: false,
                  readOnlyInput: true,
                  //     countryCode: countryCodeValue,
                  // isInvalid: phoneTurnRed,
                  // selectCountry: selectCountryHandler,
                })}

                {renderFields({
                  value: data?.companyFullAddress,
                  title: "Company Address",
                  readOnlyInput: true,
                })}

                <Box {...styles.firstGrid}>
                  <Flex>
                    <Text {...styles.txtIndustry}>Insdustry</Text>
                    <Spacer />
                    {true ? (
                      <SimpleGrid columns={2} spacing={6}>
                        <Text {...styles.txtIndustry}>SubIndustry</Text>
                        <Text {...styles.txtIndustry}></Text>
                      </SimpleGrid>
                    ) : null}
                  </Flex>
                  <Flex flexDirection="row">
                    <Select {...styles.industrySelect}>
                      <option color={"black"}>{data?.industry}</option>
                    </Select>
                    <Spacer />
                    {true ? (
                      <Select {...styles.industrySelect}>
                        <option color={"black"}>{data?.subIndustry}</option>
                      </Select>
                    ) : null}
                  </Flex>
                </Box>

                {renderFields({
                  title: "Others (Please specify)",
                  readOnlyInput: true,
                  value: data?.others,
                })}

                {renderFields({
                  title: "Username",
                  readOnlyInput: true,
                  value: data?.name,
                })}

                {renderFields({
                  value: data?.companyWebsite,
                  readOnlyInput: true,
                  title: "URL",
                })}

                {renderFields({
                  title: "Email",
                  readOnlyInput: true,
                  value: data?.email,
                })}

                <Box {...styles.firstGrid}>
                  <Flex>
                    <Text {...styles.txtIndustry}>Product | Service</Text>
                    <Spacer />
                  </Flex>
                  <Flex flexDirection="row">
                    <Select {...styles.industrySelect}>
                      <option color={"black"}>{data?.product}</option>
                    </Select>
                    <Spacer />
                  </Flex>
                </Box>

                <Flex {...styles.firstGrid} flex={1} flexDirection={"column"}>
                  <Flex>
                    <Text {...styles.mandatoryStar}>*</Text>
                    <Text {...styles.txtName}>
                      {currentLangData.app.password}
                    </Text>
                  </Flex>

                  <Input
                    variant="filled"
                    fontSize={"sm"}
                    width={"100%"}
                    value={data?.password}
                    readOnly={true}
                    //   type={show ? "text" : "password"}
                    //   onChange={(evt) => handleonChange(evt, "password")}
                  ></Input>
                </Flex>

                {renderFields({
                  value: data?.companyPosition,
                  readOnlyInput: true,
                  title: "Your Position",
                })}

                {renderFields({
                  type: "tel",
                  title: "Phone",
                  value: "+" + data?.countryCode + data?.phone,
                  maxLength: 11,
                  mandatory: true,
                  readOnlyInput: true,
                  showSelectCountries: false,
                  //     countryCode: phoneCountryCode,
                  //     isInvalid: phoneTurnRed,
                  //     selectCountry: phoneCountryHandler,
                })}
                {/* {renderDropdown({
                    title: currentLangData.app.whatToTrack,
                    placeholder: "",
                    multiMapping: track ? track : <Text>No Data</Text>,
                    onChange: (k) => {
                      setValue((prev) => ({
                        ...prev,
                        track: k.target.value,
                      }));
                      console.log("=track=", value["track"]);
                    },
                  })} */}

                {RenderFields({
                  value: data?.others,
                  title: currentLangData.app.others,
                  color: "black",
                  readOnlyInput: true,
                })}

                {/* {renderDropdown({
                    title: currentLangData.app.howManyStage,
                    // placeholder: "Select Process",
                    multiMapping: processNumbers,
                    onChange: (k) => {
                      handleOnchangeOfProcess(k);
                      handleonChange(k, "");
                    },
                  })} */}
                <Text></Text>
              </SimpleGrid>
              <Flex {...styles.firstGrid}>
                <RadioGroup
                  //   onChange={setValueRadio}
                  value={data?.trackingBased}
                  size="10px"
                >
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
              </Flex>

              {/* {RenderFields({
              title: currentLangData.app.trackBase,
              showSelectCountries: true,
              onChange: (evt) => {
                handleonChange(evt, "trackBase");
              },
            })} */}

              {RenderFields({
                mandatory: true,
                value: data?.phaseByPhaseProcess,
                readOnlyInput: true,
                title: currentLangData.app.phaseByPhase,
                // onChange: (evt) => {
                //   handleonChange(evt, "phaseByPhaseProcess");
                // },
              })}

              {RenderFields({
                mandatory: true,
                value: data?.phaseElaboration,
                readOnlyInput: true,
                title: currentLangData.app.canElaborateMore,
                // onChange: (evt) => {
                //   handleonChange(evt, "phaseElaboration");
                // },
              })}

              <Text {...styles.txtName} marginBottom={2}>
                {currentLangData.app.chooseToSuperadmin}
              </Text>

              <SimpleGrid {...styles.simpleGridFlex}>
                {renderSuperFields({
                  placeholder: "Name",
                  value: data?.superAdminName,
                  readOnlyInput: true,
                  //   isInvalid: turnNameRed,
                  //   onChange: (k) => handleonChange(k, "name"),
                  //   onBlur: () => checkValidationFields(),
                })}

                {renderSuperFields({
                  placeholder: "Email",
                  readOnlyInput: true,
                  value: data?.superAdminEmail,
                  //   isInvalid: turnNameRed,
                  //   onBlur: () => checkValidationFields(),
                  //   onChange: (k) => handleonChange(k, "email"),
                })}

                {renderSuperFields({
                  value: data?.department,
                  placeholder: "Department",
                  readOnlyInput: true,
                  //   onChange: (k) => handleonChange(k, "department"),
                })}

                {renderSuperFields({
                  value: data?.AdminCompanyPosition,
                  placeholder: "Position",
                  readOnlyInput: true,
                  //   onChange: (k) => handleonChange(k, "position"),
                })}
              </SimpleGrid>

              <Text {...styles.txtName} marginBottom={2}>
                {currentLangData.app.requiredInPhase}
              </Text>
              <Flex>
                {/* <SimpleGrid {...styles.phaseQuestion}>
                  <Text>{currentLangData.app.phase}</Text>
                  <Text>{currentLangData.app.questionToAsk}</Text>
                </SimpleGrid> */}
              </Flex>
              <Flex fontWeight={"bold"} alignSelf={"flex-end"}>
                {/* <Button
                {...styles.iconAdd}
                onClick={() => {
                  // addAnotherView();
                  submitPhase();
                }}
              >
                Add Phase
              </Button> */}
                {/* <Spacer marginX={"2"} />
              <CloseIcon {...styles.iconClose} onClick={() => closeView()} /> */}
              </Flex>

              {/* {processNumbers &&
                  processNumbers
                    .slice(-processLimit, undefined, processNumbers)
                    .map((data, value) => {

                      return (
                        <> */}
              <Flex color={"black"} flexDirection={"column"}>
                <Text color={"black"}></Text>
                {data?.phases.map((item, index) => {
                  return renderPhaseQuestions({
                    firstPlaceholer: "Process name",
                    secondPlaceholder: "Process Description",
                    thirdPlaceholder: "Purpose of process",
                    forthPlaceholder: "Person in-charge",
                    value1: item?.department,
                    value2: item?.processSteps,
                    value3: item?.processType,
                    value4: item?.personIncharge,
                  });
                })}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          {...styles.secondFlex}
          paddingLeft={10}
          borderLeftWidth={1}
          padding={1}
          // justifyContent={"center"}
          flexDirection={"column"}
        >
          <PDFPrivew ref={ref}>Generate</PDFPrivew>
          {/* <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
            {({ toPdf }) => (
              <Button {...styles.btnContinue} onClick={toPdf}>
        <Text {...styles.backTxt}>Generate PDF</Text>
              </Button>
            )}
          </Pdf> */}
          {/* <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/> */}
          <Button
            {...styles.btnContinue}
            // isLoading={loading}
            // isDisabled={disabledSubmit}
            onClick={() => submitContinue()}
          >
            <Text {...styles.backTxt} color={"white"}>
              {currentLangData.app.submit}
            </Text>
          </Button>
        </Flex>
      </>
    </Flex>
  );
};

export const PDFPrivew = React.forwardRef((props, ref) => (
  <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
    {({ toPdf }) => (
      <Button {...styles.btnContinue} onClick={toPdf}>
        <Text {...styles.backTxt}>{props.children}</Text>
      </Button>
    )}
  </Pdf>
));

{
  /* {console.log("targetRef={ref}", props)} */
}
