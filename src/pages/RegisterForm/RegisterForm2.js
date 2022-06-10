import React, { useState, useContext, useEffect } from "react";
import Pdf from "react-to-pdf";
import validator from "validator";
import theme from "../../config/color";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { AiOutlineUpload } from "react-icons/ai";
import ApiManager from "../../config/apiManager";
import ReCAPTCHA from "react-google-recaptcha";
import LangContext from "../../context/languageContext";
import { uploadImage } from "../../config/imageUploader";
import { useHistory, useLocation } from "react-router-dom";
import styles from "../../components/registerComponent/styles2";
import { ReactPdf, PDFPrivew } from "../../components/reactPdf";
import TraxImage from "../../components/image/Trax-background-06.png";

import {
  RenderFields,
  renderSuperFields,
  RenderPhaseHeading,
  renderPhaseQuestions,
} from "../../components/privateComponent";

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
  useMediaQuery,
} from "@chakra-ui/react";

const RegisterForm2 = (props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  let processNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const TEST_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  let obj = [
    {
      processName: "",
      processDescription: "",
      purposeOfProcess: "",
      personInCharge: "",
    },
  ];

  let initValue = {
    track: "",
    stage: "",
    name: "",
    email: "",
    others: "",
    process: "",
    position: "",
    trackBase: "",
    department: "",
    phaseElaboration: "",
    phaseByPhaseProcess: "",
    uploadCompanyForms: "",
  };

  let arrayOfCount = [];
  let object = {
    id: new Date().getUTCMilliseconds(),
  };

  let client = 5;
  let subscriptionDataOnRegister;
  const registerFormRef = React.createRef();

  let history = useHistory();
  const location = useLocation();
  const [error, setError] = useState("");
  const [track, setTrack] = useState([]);
  const [count, setCount] = useState(0);
  const [industry, setIndustry] = useState([]);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(initValue);
  const [loading, setLoading] = useState(false);
  const [plusArray, setPlusArray] = useState([]);
  const apimanager = ApiManager.getInstance();
  const [errCheck, setErrCheck] = useState(false);
  const [feildsError, setFeildsError] = useState("");
  const [s3ImagesData, setS3ImagesData] = useState([]);
  const { currentLangData } = useContext(LangContext);
  const [valueRadio, setValueRadio] = React.useState("1");
  const [turnNameRed, setTurnNameRed] = useState(false);
  const [turnEmailRed, setTurnEmailRed] = useState(false);
  const [submitLoading, setSubmitLoading] = useState("true");
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [phaseQuestions, setPhaseQuestions] = useState([
    {
      processName: "",
      processDescription: "",
      purposeOfProcess: "",
      personInCharge: "",
    },
  ]);

  let registerData = location?.state?.data;
  console.log("Register Datai", registerData);

  // console.log("locationlocation", history);

  let previewData = location?.state?.data;

  const [processLimit, setProcessLimit] = useState(() =>
    processNumbers.length ? 1 : 1 + 1
  );

  useEffect(() => {
    getTracks();
    getIndustries();
  }, []);

  useEffect(() => {}, [processLimit]);

  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    setValue({
      ...value,
      [key]: ev,
    });
  };

  /// Utility Funtions ///

  const utilityFunctionOfValue = ({ string, subString }) => {
    return string ? string : subString;
  };

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const addAnotherView = () => {
    setCount(count + 1);
    arrayOfCount = [...plusArray];
    arrayOfCount.push(object);
    setPlusArray(arrayOfCount);
    // console.log(count, "addAnotherView", arrayOfCount);
  };

  const closeView = () => {
    setCount(count - 1);
    plusArray.pop();
  };

  const checkValidationFields = () => {
    let body = {
      superAdminEmail: value["email"].toString(),
      superAdminName: value["name"].toString(),
    };

    apimanager
      .post("checkValidation", body)
      .then((res) => {
        res?.errors?.map((data, index) => {
          const { msg } = data;

          if (parseInt(msg) === 6525) {
            setErrCheck(true);
            setFeildsError(currentLangData.app.emailDuplicationError);
            // value["email"] = "";
            setTurnEmailRed(true);
            console.log("emailDuplicationErrors", msg);
            setTimeout(() => {
              setFeildsError(null);
              setLoading(false);
              setErrCheck(false);
              setTurnEmailRed(false);
            }, [5000]);
            return false;
          } else if (parseInt(msg) === 6527) {
            setFeildsError(currentLangData.app.nameDuplicationError);
            setErrCheck(true);
            console.log("nameDuplicationError", msg);
            setTurnNameRed(true);
            // value["userName"] = "";
            setTimeout(() => {
              setErrCheck(false);
              setFeildsError(null);
              setLoading(false);
              setTurnNameRed(false);
            }, [5000]);

            return false;
          }
        });
      })
      .catch((error) => {
        console.log("checkValidation", error);
        return false;
      });
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleOnchangeOfProcess = (k) => {
    console.log("process=", k.target.value);
    let selectedValue = k.target.value;

    setProcessLimit(selectedValue);

    arrayOfCount = [processNumbers, selectedValue];
    arrayOfCount.push(k.target.value);

    setPlusArray(arrayOfCount);
  };

  const handleSubmit = async (files, allFiles) => {
    console.log(files, "handleSubmit", allFiles);
    for (let index = 0; index < allFiles.length; index++) {
      console.log("data", allFiles[index]);
      await uploadImage(allFiles[index].file)
        .then((res) => {
          // setS3UploadSuccess(true);
          console.log("res is", res.location);
          let image = [];

          image.push(res.location);
          s3ImagesData.push(res.location);
          console.log("s3IMageData", s3ImagesData);
          // setShow(false);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleOnChangeOfPhases = (e, keys, index) => {
    let k = e.target.value;
    phaseQuestions[index] = {
      ...phaseQuestions[index],
      [keys]: k,
    };
    console.log("phaseQuestions", phaseQuestions);
  };

  // Event funtions //

  const submitContinue = () => {
    setSubmitLoading(submitLoading);

    checkMandatoryFields();
    let noError = checkMandatoryFields();
    setError("");
    console.log("noError", noError);
    if (!noError) {
      setError("Something went wrong");
      setSubmitLoading(!submitLoading);

      setTimeout(() => {
        setError(null);
        setLoading(false);
      }, []);
    } else {
      let newPhaseQuestion = phaseQuestions.map((item) => {
        console.log("itemitem=>", item);
        return {
          department: item.processName,
          processSteps: item.processDescription,
          processType: item.purposeOfProcess,
          personIncharge: item.personInCharge,
        };
      });
      let selectedSubIndex = window.localStorage.getItem("subscriptionIndex");
      console.log("selectedSubscription Index=>", selectedSubIndex);
      alert("clicked");
      let body = {
        // registerData
        subscription: selectedSubIndex,
        name: registerData?.name,
        displayName: registerData?.displayName,
        password: registerData?.password,
        confirmPassword: registerData?.confirmPassword,
        companyName: registerData?.companyName,
        phone: registerData?.phone,
        countryCode: registerData?.countryCode,
        companyRegistrationNumber: registerData?.companyRegistrationNumber,
        companyCountryCode: registerData?.companyCountryCode,
        companyPhoneNumber: registerData?.companyPhoneNumber,
        companyFullAddress: registerData?.companyFullAddress,
        industry: registerData?.industry,
        product: registerData?.product,
        others: registerData?.others,
        email: registerData?.email,
        phone: registerData?.phone,
        companyWebsite: registerData?.companyWebsite,
        companyPosition: registerData?.companyPosition,
        // companyDocuments: registerData?.companyDocument,
        companyDocuments: [
          "https://s3.ap-southeast-1.amazonaws.com/likwid-media/1610105987735.jpeg",
        ],

        trackName: (value["track"] ? value["track"] : track[0])
          ? value["track"]
            ? value["track"]
            : track[0]
          : registerData?.trackName,
        stages: processLimit ? processLimit : registerData?.stages,
        // trackingBased: props.valueRadio,
        trackingBased: valueRadio ? valueRadio : registerData?.trackingBased,
        phaseByPhaseProcess: value["phaseByPhaseProcess"]
          ? value["phaseByPhaseProcess"]
          : registerData?.phaseByPhaseProcess,

        phaseElaboration: value["phaseElaboration"]
          ? value["phaseElaboration"]
          : registerData?.phaseElaboration,

        superAdminName: value["name"]
          ? value["name"]
          : registerData?.superAdminEmail,

        superAdminEmail: value["email"]
          ? value["email"]
          : registerData?.superAdminName,

        department: value["department"]
          ? value["department"]
          : registerData?.department,
        AdminCompanyPosition: value["position"],
        role: client,
        phases: newPhaseQuestion ? newPhaseQuestion : registerData?.phases,
        // trackingBased: processLimit,
        documents: s3ImagesData ? s3ImagesData : registerData?.documents,

        track: value["track"] ? value["track"] : track[0],
        // image:
        //   "https://s3.ap-southeast-1.amazonaws.com/likwid-media/1610105987735.jpeg",
      };
      console.log(body, "BODY");

      apimanager
        .post("registerClient", body)
        .then((res) => {
          if (res.message === 6422) {
            // setSuccessfullyRegistered("Successfully Registered");
            setMessage("Successfully Registered");
            setSubmitLoading(!submitLoading);
          }
          console.log(body, "RESPONSE OF registerStaff", res);
          if (res.message === 6212) {
            setMessage("Error in Super Admin Register!");
            setSubmitLoading(!submitLoading);

            setLoading(false);
            setDisabledSubmit(true);
          }
        })
        .catch((error) => {
          setSubmitLoading(!submitLoading);
          console.log("Error Of registerMaster", error);
        });
      setSubmitLoading(!submitLoading);
      setLoading(false);
    }
  };

  const options = {
    orientation: "portrait",
    unit: "in",
    format: [20, 12],
  };

  const getTracks = () => {
    let tempTrackArray = [];

    apimanager
      .get("getAllTracks", {})
      .then((response) => {
        // console.log("response Track", response);
        if (response.message === 6480) {
          response?.result?.map((value, index) => {
            // console.log(index, "index", "value", value?.trackName);
            tempTrackArray.push(value?.trackName);
          });
          setTrack(tempTrackArray);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getIndustries = () => {
    let tempIndustryArray = [];

    apimanager
      .get("getIndustry", {})
      .then((response) => {
        // console.log("response", response);
        if (response.message === 6472) {
          response?.result?.map((value, index) => {
            // console.log(index, "index", "value", value?.industryName);
            tempIndustryArray.push(value?.industryName);
          });
          setIndustry(tempIndustryArray);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const timerForError = ({ fieldErr, errChec }) => {
    setErrCheck(true);
    setLoading(false);
    setTimeout(() => {
      setFeildsError(fieldErr);
      setErrCheck(errChec);
    }, [3000]);
  };

  const checkMandatoryFields = () => {
    if (
      validator.isEmpty(
        // value["name"]
        utilityFunctionOfValue({
          string: value["name"],
          subString: previewData?.superAdminName,
        }) &&
          utilityFunctionOfValue({
            string: value["email"],
            subString: previewData?.superAdminEmail,
          }) &&
          // value["others"] &&
          // value["position"]
          utilityFunctionOfValue({
            string: value["position"],
            subString: previewData?.AdminCompanyPosition,
          }) &&
          // value["department"]
          utilityFunctionOfValue({
            string: value["department"],
            subString: previewData?.department,
          }) &&
          // value["phaseElaboration"]
          utilityFunctionOfValue({
            string: value["phaseElaboration"],
            subString: previewData?.phaseElaboration,
          }) &&
          // value["phaseByPhaseProcess"]
          utilityFunctionOfValue({
            string: value["phaseByPhaseProcess"],
            subString: previewData?.phaseByPhaseProcess,
          })
      )
    ) {
      setFeildsError(currentLangData.app.allFieldRequired);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (
      !validator.isEmail(
        utilityFunctionOfValue({
          string: value["email"],
          subString: previewData?.superAdminEmail,
        })
      )
    ) {
      setFeildsError(currentLangData.app.wrongEmail);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
    } else {
      return true;
    }

    // else if (!validator.isLength(value["companyPhone"], 8, 11)) {
    //   setFeildsError(currentLangData.app.phoneRange8to9);
    //   timerForError({
    //     fieldErr: null,
    //     errChec: false,
    //   });
    //   return false;
    // } else if (!validator.isEmail(value["email"])) {
    //   setFeildsError(currentLangData.app.wrongEmail);
    //   timerForError({
    //     fieldErr: null,
    //     errChec: false,
    //   });
    //   return false;
    // } else if (!validator.isMobilePhone(value["companyPhone"])) {
    //   setFeildsError(currentLangData.app.validPhone);
    //   timerForError({
    //     fieldErr: null,
    //     errChec: false,
    //   });
    //   return false;
    // } else if (
    //   !validator.isStrongPassword(value["password"], {
    //     minLength: 8,
    //     minLowercase: undefined,
    //     minUppercase: 1,
    //     minNumbers: undefined,
    //     minSymbols: 1,
    //   })
    // ) {
    //   setFeildsError(currentLangData.app.validPass);
    //   timerForError({
    //     fieldErr: null,
    //     errChec: false,
    //   });
    //   return false;
    // }
  };

  // Renders functions //

  const renderInsideDropzone = () => {
    return (
      <Flex {...styles.dropZoneRender}>
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

  const renderDropdown = ({
    placeholder,
    multiMapping,
    onChange,
    title,
    value,
    mandatory,
  }) => {
    return (
      <Box {...styles.firstGrid}>
        <Flex>
          {mandatory ? <Text {...styles.mandatoryStar}>*</Text> : null}
          <Text {...styles.txtName} marginBottom={1}>
            {title}
          </Text>
        </Flex>

        <Select
          d="flex"
          size="md"
          variant="filled"
          value={value}
          color={"black"}
          onChange={onChange}
          placeholder={placeholder}
          focusBorderColor={theme.customColors.masterpanelColors[100]}
        >
          {multiMapping &&
            multiMapping?.map((value, index) => {
              return (
                <option color={"black"} value={value}>
                  {value}
                </option>
              );
            })}
        </Select>
      </Box>
    );
  };

  const convertToPDF = (e) => {
    e.preventDefault();

    // let registerDataOfLocal = window.localStorage.getItem("Register1 data");

    // console.log("Register1 data=>", registerDataOfLocal);

    // console.log(
    //   "inside => Register1 data=>",
    //   JSON.parse(window.localStorage.getItem("Register1 data"))
    // );

    let newPhaseQuestion = phaseQuestions.map((item) => {
      console.log("itemitem=>", item);
      return {
        department: item.processName,
        processSteps: item.processDescription,
        processType: item.purposeOfProcess,
        personIncharge: item.personInCharge,
      };
    });

    let body = {
      name: registerData?.name,
      displayName: registerData?.displayName,
      password: registerData?.password,
      confirmPassword: registerData?.confirmPassword,
      companyName: registerData?.companyName,
      phone: registerData?.phone,
      countryCode: registerData?.countryCode,
      companyRegistrationNumber: registerData?.companyRegistrationNumber,
      companyCountryCode: registerData?.companyCountryCode,
      companyPhoneNumber: registerData?.companyPhoneNumber,
      companyFullAddress: registerData?.companyFullAddress,
      industry: registerData?.industry,
      product: registerData?.product,
      others: registerData?.others,
      email: registerData?.email,
      phone: registerData?.phone,
      companyWebsite: registerData?.companyWebsite,
      companyPosition: registerData?.companyPosition,
      // companyDocuments: registerData?.companyDocument,
      companyDocuments: [
        "https://s3.ap-southeast-1.amazonaws.com/likwid-media/1610105987735.jpeg",
      ],

      trackName: value["track"] ? value["track"] : track[0],
      stages: processLimit,
      // trackingBased: props.valueRadio,
      trackingBased: valueRadio,
      phaseByPhaseProcess: value["phaseByPhaseProcess"],
      phaseElaboration: value["phaseElaboration"],
      superAdminName: value["name"],
      superAdminEmail: value["email"],
      department: value["department"],
      AdminCompanyPosition: value["position"],
      role: 5,
      phases: newPhaseQuestion,
      // trackingBased: processLimit,
      documents: s3ImagesData,
      track: value["track"] ? value["track"] : track[0],
      // image:
      //   "https://s3.ap-southeast-1.amazonaws.com/likwid-media/1610105987735.jpeg",
    };

    // localStorage.setItem(
    //   "registerationData",
    //   // JSON.stringify(body)
    //   body
    // );

    history.push({
      pathname: `/ReactPdf`,
      state: { data: body },
    });
  };

  return (
    <>
      <Flex
        ref={registerFormRef}
        {...styles.mainContainer}
        paddingX={isMobile ? 5 : 10}
        paddingLeft={isMobile ? 5 : 40}
        flexDirection={isMobile ? "column" : "row"}
        style={{
          // height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${TraxImage})`,
        }}
      >
        <>
          <Flex {...styles.formFlex} paddingX={isMobile ? 0 : 10}>
            <Button
              {...styles.btnBack}
              // isLoading={loading}
              // isDisabled={disabledSubmit}
              onClick={() =>
                history.push({
                  pathname: "/Register",
                  state: { data: previewData },
                })
              }
            >
              <Text {...styles.backTxt}>{currentLangData.app.back}</Text>
            </Button>
            <Text {...styles.txtRegistered}>
              {currentLangData.app.registerationHeading2}
            </Text>
            <Flex {...styles.flexTextBold}>
              {/* All fields starts */}

              <Flex {...styles.mainFormFlex}>
                <SimpleGrid
                  {...styles.simpleGridFlex}
                  columns={isMobile ? 1 : 2}
                >
                  {renderDropdown({
                    mandatory: true,
                    title: currentLangData.app.whatToTrack,
                    placeholder: "",
                    value: value["track"],
                    multiMapping: track ? track : <Text>No Data</Text>,
                    onChange: (k) => {
                      setValue((prev) => ({
                        ...prev,
                        track: k.target.value,
                      }));
                      console.log("=track=", value["track"]);
                    },
                  })}

                  {/* {RenderFields({
                    title: currentLangData.app.others,
                    color: "black",
                    value: value["others"]
                      ? value["others"]
                      : previewData?.others,
                    onChange: (evt) => {
                      handleonChange(evt, "others");
                    },
                  })} */}

                  {renderDropdown({
                    mandatory: true,
                    title: currentLangData.app.howManyStage,
                    // placeholder: "Select Process",
                    multiMapping: processNumbers,
                    // value: value["stage"]
                    //   ? value["stage"]
                    //   : previewData?.stages,
                    onChange: (k) => {
                      handleOnchangeOfProcess(k);
                      handleonChange(k, "");
                    },
                  })}
                  <Text></Text>
                </SimpleGrid>
                <Flex {...styles.firstGrid} flexDirection={"column"}>
                  <Text>Would want to track based on:</Text>
                  <RadioGroup
                    onChange={setValueRadio}
                    value={valueRadio ? valueRadio : previewData?.stages}
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
                  value: value["phaseByPhaseProcess"]
                    ? value["phaseByPhaseProcess"]
                    : previewData?.phaseByPhaseProcess,
                  title: currentLangData.app.phaseByPhase,
                  onChange: (evt) => {
                    handleonChange(evt, "phaseByPhaseProcess");
                  },
                })}

                {RenderFields({
                  value: value["phaseElaboration"]
                    ? value["phaseElaboration"]
                    : previewData?.phaseElaboration,
                  title: currentLangData.app.canElaborateMore,
                  onChange: (evt) => {
                    handleonChange(evt, "phaseElaboration");
                  },
                })}

                <Text {...styles.txtName} marginBottom={2}>
                  {currentLangData.app.chooseToSuperadmin}
                </Text>

                <SimpleGrid {...styles.simpleGridFlex}>
                  {renderSuperFields({
                    mandatory: true,
                    placeholder: "Name",
                    isInvalid: turnNameRed,
                    value: value["name"]
                      ? value["name"]
                      : previewData?.superAdminName,
                    onChange: (k) => handleonChange(k, "name"),
                    onBlur: () => checkValidationFields(),
                  })}

                  {renderSuperFields({
                    mandatory: true,
                    placeholder: "Email",
                    isInvalid: turnEmailRed,
                    value: value["email"]
                      ? value["email"]
                      : previewData?.superAdminEmail,

                    onBlur: () => checkValidationFields(),
                    onChange: (k) => handleonChange(k, "email"),
                  })}

                  {renderSuperFields({
                    mandatory: true,
                    value: value["department"]
                      ? value["department"]
                      : previewData?.department,
                    placeholder: "Department",
                    onChange: (k) => handleonChange(k, "department"),
                  })}

                  {renderSuperFields({
                    mandatory: true,
                    value: value["position"]
                      ? value["position"]
                      : previewData?.AdminCompanyPosition,
                    placeholder: "Position",
                    onChange: (k) => handleonChange(k, "position"),
                  })}
                </SimpleGrid>

                <RenderPhaseHeading />
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

                {processNumbers &&
                  processNumbers
                    .slice(-processLimit, undefined, processNumbers)
                    .map((data, value) => {
                      // console.log(data, "SelectedValue", value);

                      return (
                        <>
                          <Flex color={"black"} key={value}>
                            <Text color={"black"} marginRight={1}>
                              {value + 1}
                            </Text>
                            {renderPhaseQuestions({
                              mandatory: true,
                              value1: phaseQuestions["processName"]
                                ? phaseQuestions["processName"]
                                : registerData?.phases?.map(
                                    (item) => item?.department
                                    // console.log("ITEM+=+>", item?.department)
                                  ),
                              value2: registerData?.phases?.processSteps,
                              firstPlaceholer: "Process name",
                              secondPlaceholder: "Process Description",
                              thirdPlaceholder: "Purpose of process",
                              forthPlaceholder: "Person in-charge",
                              firstonChange: (k) => {
                                handleOnChangeOfPhases(k, "processName", value);
                              },
                              secondonChange: (k) => {
                                handleOnChangeOfPhases(
                                  k,
                                  "processDescription",
                                  value
                                );
                              },
                              thirdonChange: (k) => {
                                handleOnChangeOfPhases(
                                  k,
                                  "purposeOfProcess",
                                  value
                                );
                              },
                              forthonChange: (k) => {
                                handleOnChangeOfPhases(
                                  k,
                                  "personInCharge",
                                  value
                                );
                              },
                            })}
                          </Flex>
                        </>
                      );
                    })}
              </Flex>
            </Flex>
          </Flex>

          <Flex {...styles.secondFlex}>
            <Flex {...styles.userNamePasswordContainer} marginTop={-5}>
              <Flex {...styles.uploadCompany}>
                {/* <Flex
                  // {...styles.secondFlex}
                  borderLeftWidth={1}
                  padding={1}
                  justifyContent={"center"}
                >
                </Flex> */}
                <Button
                  {...styles.btnPreview}
                  // isLoading={loading}
                  // isDisabled={true}
                  onClick={(e) => convertToPDF(e)}
                >
                  <Text {...styles.backTxt} color={"black"}>
                    {currentLangData.app.preview}
                  </Text>
                </Button>
                {/* <Spacer /> */}
                <Button
                  {...styles.btnContinue}
                  // isLoading={!submitLoading}
                  // loading={submitLoading}
                  onClick={() => submitContinue()}
                >
                  <Text {...styles.backTxt} color={"white"}>
                    {currentLangData.app.submit}
                  </Text>
                </Button>
              </Flex>
              <Flex
                {...styles.uploadAttachments}
                alignSelf={isMobile ? "center" : null}
              >
                <Dropzone
                  onSubmit={handleSubmit}
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  inputContent={renderInsideDropzone()}
                  {...styles.dropdownView}
                ></Dropzone>
              </Flex>
              {errCheck ? (
                <Text {...styles.errorMsg}>{feildsError}</Text>
              ) : null}
              <Text {...styles.errorMsg}>{error}</Text>
              <Text {...styles.errorMsg} color="green">
                {message}
              </Text>
            </Flex>
          </Flex>
        </>
      </Flex>
    </>
  );
};
export default RegisterForm2;
