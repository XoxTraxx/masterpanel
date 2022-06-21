import React, { useState, useContext, useEffect } from "react";
import validator from "validator";
import styles from "../../components/registerComponent/styles";
import Dropzone from "react-dropzone-uploader";
import ReCAPTCHA from "react-google-recaptcha";
import ApiManager from "../../config/apiManager";
import { Progress } from '@chakra-ui/react'
import "react-dropzone-uploader/dist/styles.css";
import {
  renderDropdown,
  renderInsideDropzone,
} from "../../components/registerComponent/renderFunction";
import { BiCloudUpload } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import LangContext from "../../context/languageContext";
import { uploadImage } from "../../config/imageUploader";
import TraxImage from "../../components/image/Trax-background-06.png";
import SelectCountries from "../../components/selectCountries/selectCountries";
import { renderFields } from "../../components/registerComponent/renderFunction";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  SimpleGrid,
  useMediaQuery,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Center
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

const Register = () => {
  const TEST_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  let reg =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let ProdService = ["Product", "Service"];
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  let subscriptionData = location?.state?.data;
  const [industry, setIndustry] = useState([]);
  const [selectedFiles, setSelecteFiles] = useState([]);
  const [singleindustry, setSingleIndustry] = useState(subscriptionData?.industry?subscriptionData?.industry:'');
  let initValue = {
    url: "",
    name: subscriptionData?.name ?subscriptionData?.name:'',
    email: subscriptionData?.email ?subscriptionData?.email:'',
    others: subscriptionData?.others ?subscriptionData?.others:'',
    industry: singleindustry,
    password: subscriptionData?.password ?subscriptionData?.password:'',
    userName: subscriptionData?.name ?subscriptionData?.name:'',
    yourPosition: "",
    companyName: subscriptionData?.companyName ?subscriptionData?.companyName:'',
    product: subscriptionData?.product ?subscriptionData?.procressProduction:'',
    companyPhone: subscriptionData?.companyPhoneNumber ?subscriptionData?.companyPhoneNumber:'',
    companyAddress: subscriptionData?.companyAddress ?subscriptionData?.companyAddress:'',
    uploadCompanyForms: "",
    companyRegisterationNo: subscriptionData?.companyRegistrationNumber ?subscriptionData?.companyRegistrationNumber:'',
  };

  let mandatoryFields = {
    name: true,
    email: true,
  };

  let history = useHistory();
  console.log("PreviewData=>");
  const [allfieldsError, setAllFieldsError] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState("");
  const [showOthers, setShowOthers] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(initValue);
  const [showProgress, setProgress] = useState(false);
  const [loading, setLoading] = useState(false);
  const apimanager = ApiManager.getInstance();
  const [errCheck, setErrCheck] = useState(false);
  const [feildsError, setFeildsError] = useState("");
  // const [nameErr, setNameErr] = useState(false);
  const [subIndustry, setSubIndustry] = useState([]);
  const [cPhoneErr, setCPhoneErr] = useState(false);
  const [uNameError, setUNameError] = useState("");
  const [cPhoneError, setCPhoneError] = useState("");
  const [s3ImagesData, setS3ImagesData] = useState([]);
  const { currentLangData } = useContext(LangContext);
  const [nameTurnRed, setNameTurnRed] = useState(false);
  const [emailTurnRed, setEmailTurnRed] = useState(false);
  const [phoneTurnRed, setPhoneTurnRed] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [emailDuplication, setEmailDuplication] = useState("");
  const [countryCodeValue, setCountryCodeValue] = useState(subscriptionData?.companyCountryCode ?subscriptionData?.companyCountryCode:'');
  const [phoneCountryCode, setPhoneCountryCode] = useState("");

  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    setValue({
      ...value,
      [key]: ev,
    });
    console.log(ev, "Fields", value);
  };

  const handleChangeStatus = ({ meta,file }, status) => {
    console.log('file is',meta);
    
    
  };

  const handleSubmit = async () => {
    let allFiles = selectedFiles
    console.log('allFiles.lenght', allFiles.length)
    if(!allFiles.length){
      submitContinue()
    }
    else{
    for (let index = 0; index < allFiles.length; index++) {
      setProgress(true)
      console.log("data", allFiles[index]);
      await uploadImage(allFiles[index])
        .then((res) => {
          // setS3UploadSuccess(true);
          console.log("res is", res.location);
          let image = [];
          image.push(res.location);
          s3ImagesData.push(res.location);
          console.log("s3IMageData", s3ImagesData);
          // setShow(false);
          if(s3ImagesData.length === allFiles.length){
            submitContinue()
            setProgress(false)
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    }
  };

  /// Utility Funtions ///

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  // This is for selecting specific country and saving it into countryCodeValue state
  const selectCountryHandler = (e) => {
    setCountryCodeValue(e.target.value);
    console.log("selectCountryHandler=>", e.target.value);
  };

  const phoneCountryHandler = (e) => {
    setPhoneCountryCode(e.target.value);
    console.log("selectCountryHandler=>", e.target.value);
  };

  // For Handling Password input from the user
  const handleClick = (event) => {
    setShow(!show);
    // console.log(event, "EventPassword");
  };

  const onChangeRecapcha = (value) => {
    console.log("Captcha value:", value);
  };

  const buttonBackgroundColor = useColorModeValue("#da1c18", "white");

  //changing color of text to white and black
  const textColor = useColorModeValue("white", "black");

  // Event funtions //
  const onChange = (e) => {
    console.log(e.target.files);
    setSelecteFiles(e.target.files)
  };
  const submitContinue = () => {
    console.log('value',value)
    console.log('subscriptionData',subscriptionData)
    setLoading(true);

    let ifError = false;
    let keys = Object.keys(value);

    if (keys.length) {
      keys.map((key) => {
        if (
          mandatoryFields[key] === ""
          // && (value[key] === "" || value[key] === undefined)
        )
          ifError = true;
      });
    } else {
      ifError = false;
    }

    if (ifError) {
      setError(currentLangData.app.mandatoryFieldsRequired + "ifError");
      console.log("error is", ifError);
      setTimeout(() => {
        setError(null);
        setLoading(false);
      }, [3000]);
    } else {
      checkMandatoryFields();

      // let apiCheckFields = checkValidationFields();
      let noError = checkMandatoryFields();

      setError("");
      if (!noError) {
        setTimeout(() => {
          setError(null);
        }, []);
        console.log("noError", noError);
        // setError("Something went wrong");
      } else {
        let body = {
          lname: "",
          name: value["userName"] ? value["userName"] : subscriptionData?.name,
          displayName: value["name"]
            ? value["name"]
            : subscriptionData?.displayName,

          companyName: value["companyName"]
            ? value["companyName"]
            : subscriptionData?.companyName,

          companyRegistrationNumber: value["companyRegisterationNo"]
            ? value["companyRegisterationNo"]
            : subscriptionData?.companyRegistrationNumber,

          countryCode: parseInt(phoneCountryCode)
            ? parseInt(phoneCountryCode)
            : subscriptionData?.countryCode,

          companyPhoneNumber: value["companyPhone"]
            ? value["companyPhone"]
            : subscriptionData?.companyPhoneNumber,

          companyCountryCode: parseInt(countryCodeValue)
            ? parseInt(countryCodeValue)
            : subscriptionData?.companyCountryCode,

          companyFullAddress: value["companyAddress"]
            ? value["companyAddress"]
            : subscriptionData?.companyFullAddress,

          industry: (value["industry"] ? value["industry"] : industry[0])
            ? value["industry"]
              ? value["industry"]
              : industry[0]
            : subscriptionData?.industry,

          // subIndustry: (
          //   value["subIndustry"] ? value["subIndustry"] : subIndustry[0]
          // )
          //   ? value["subIndustry"]
          //     ? value["subIndustry"]
          //     : subIndustry[0]
          //   : subscriptionData?.subIndustry,

          others: value["others"] ? value["others"] : subscriptionData?.others,

          product: value["product"] ? value["product"] : ProdService[0],

          email: value["email"] ? value["email"] : subscriptionData?.email,
          // url: value["url"],

          companyWebsite: value["url"]
            ? value["url"]
            : subscriptionData?.companyWebsite,

          companyPosition: value["yourPosition"]
            ? value["yourPosition"]
            : subscriptionData?.companyPosition,

          password: value["password"]
            ? value["password"]
            : subscriptionData?.password,

          companyDocument: s3ImagesData
            ? s3ImagesData
            : subscriptionData?.companyDocuments[0],

          confirmPassword: value["password"]
            ? value["password"]
            : subscriptionData?.confirmPassword,

          trackName: subscriptionData?.trackName,
          superAdminEmail: subscriptionData?.superAdminEmail,
          superAdminName: subscriptionData?.superAdminName,
          phaseByPhaseProcess: subscriptionData?.phaseByPhaseProcess,
          phaseElaboration: subscriptionData?.phaseElaboration,
          phases: subscriptionData?.phases,
          stages: subscriptionData?.stages,
          AdminCompanyPosition: subscriptionData?.AdminCompanyPosition,
          trackingBased: subscriptionData?.trackingBased,
          // product: subscriptionData?.product,
          department: subscriptionData?.department,
          // image:
          //   "https://s3.ap-southeast-1.amazonaws.com/likwid-media/1610105987735.jpeg",
          document: subscriptionData?.document,
        };
        setLoading(false);
        console.log("RESPONSE OF registerClient", "body=>", body);
        setDisabledSubmit(true);
        // setValue(initValue);
        setMessage("Continue Registered Form, Please wait...");

        // window.localStorage.setItem("Register1 data", JSON.stringify(body));
        console.log("JSON.stringify(body)", JSON.stringify(body));
        //  console.log(object)
        setTimeout(() => {
          setMessage(null);
          // setValue(initValue);
          history.push({
            pathname: `/RegisterForm2`,
            state: { data: body },
          });
        }, [3000]);
      }
    }
  };
  // console.log(checkError, "Array of data");

  useEffect(() => {
    getIndustries();
    getSubIndustries();
  }, []);

  useEffect(() => {}, [value]);

  const getIndustries = () => {
    let tempIndustryArray = [];

    apimanager
      .get("getIndustry", {})
      .then((response) => {
        console.log("response", response);
        if (response.message === 6472) {
          response?.result?.map((value, index) => {
            console.log(index, "index", "value", value?.industryName);
            tempIndustryArray.push(value?.industryName);
          });
          setIndustry(tempIndustryArray);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const addIndustry = () => {
    let body = {
      industryName: value["others"],
    };
    apimanager
      .post("addIndustry", body)
      .then((response) => {
        if (response.message === 6470) {
          console.log('singleIndust',addIndustry)
          setSingleIndustry(value["others"])
          setShowOthers(false)
          getIndustries();
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getSubIndustries = () => {
    let tempSubIndustryArray = [];

    apimanager
      .get("getAllSubIndustries", {})
      .then((response) => {
        console.log("response", response);
        if (response.message === 6520) {
          response?.result?.map((value, index) => {
            console.log(index, "index", "value", value?.subIndustryName);
            tempSubIndustryArray.push(value?.subIndustryName);
          });
          setSubIndustry(tempSubIndustryArray);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const checkValidationFields = () => {
    let body = {
      email: value["email"].toString(),
      name: value["userName"].toString(),
      companyPhoneNumber: value["companyPhone"],
      // companyPhoneNumber: "+923098767533",
    };
    console.log("bodybody=>", body);

    apimanager
      .post("checkValidation", body)
      .then((res) => {
        res?.errors?.map((data, index) => {
          const { msg } = data;

          if (parseInt(msg) === 6525) {
            setErrCheck(true);
            setEmailDuplication(currentLangData.app.emailDuplicationError);
            setEmailTurnRed(true);
            console.log("emailDuplicationErrors", msg);
            setLoading(false);

            setTimeout(() => {
              setEmailDuplication(null);
              setLoading(false);
              // setErrCheck(false);
              setEmailTurnRed(false);
            }, [5000]);

            return false;
          } else if (parseInt(msg) === 6527) {
            setUNameError(currentLangData.app.nameDuplicationError);
            // setNameErr(true);
            console.log("nameDuplicationError", msg);
            setNameTurnRed(true);
            setLoading(false);
            // value["userName"] = "";
            setTimeout(() => {
              // setNameErr(false);
              setUNameError(null);
              setLoading(false);
              setNameTurnRed(false);
            }, [5000]);
            return false;
          }

          if (parseInt(msg) === 6529) {
            setCPhoneError(currentLangData.app.phoneDuplicationError);
            setCPhoneErr(true);
            setPhoneTurnRed(true);
            console.log("phoneDuplicationError", msg);
            setLoading(false);

            setTimeout(() => {
              setCPhoneErr(false);
              setCPhoneErr(null);
              setLoading(false);
              setPhoneTurnRed(false);
            }, [5000]);

            return false;
          }
        });
      })
      .catch((error) => {
        setLoading(loading);
        console.log("checkValidation", error);
        return false;
      });
  };

  const timerForError = ({ fieldErr, errChec }) => {
    setErrCheck(true);
    setLoading(false);
    setTimeout(() => {
      setFeildsError(fieldErr);
      setErrCheck(errChec);
    }, [4000]);
  };

  // Validation //

  const utilityFunctionOfValue = ({ string, subString }) => {
    return string ? string : subString;
  };

  const checkMandatoryFields = () => {
    // if (
    //   validator.isEmpty(
    //     // value["userName"]
    //     //   ? value["userName"]
    //     //   : subscription?.name
    //     utilityFunctionOfValue({
    //       string: value["userName"],
    //       subString: subscriptionData?.name,
    //     }) ||
    //       utilityFunctionOfValue({
    //         string: value["email"],
    //         subString: subscriptionData?.email,
    //       }) ||
    //       utilityFunctionOfValue({
    //         string: value["password"],
    //         subString: subscriptionData?.password,
    //       }) ||
    //       utilityFunctionOfValue({
    //         string: countryCodeValue,
    //         subString: subscriptionData?.companyCountryCode,
    //       }) ||
    //       utilityFunctionOfValue({
    //         string: value["companyPhone"],
    //         subString: subscriptionData?.companyPhoneNumber,
    //       })
    //   )
    // ) {
    //   setFeildsError(currentLangData.app.mandatoryFieldsRequired);
    //   setAllFieldsError(currentLangData.app.mandatoryFieldsRequired)
    //   console.log(feildsError);
    //   timerForError({
    //     fieldErr: null,
    //     errChec: false,
    //   });
    //   return false;
    // }
    // if (
    //   value["email"] === "" &&
    //   value["userName"] === "" &&
    //   value["password"] === "" &&
    //   countryCodeValue === "" &&
    //   value["companyPhone"]
    // ) {
    //   // setFeildsError(currentLangData.app.mandatoryFieldsRequired);
    //   setAllFieldsError(currentLangData.app.mandatoryFieldsRequired);
    //   console.log(value);
    //     timerForError({
    //       fieldErr: null,
    //       errChec: false,
    //     });
    //     alert("error");
    //     return false;
    // }
    if (value["email"] === "") {
      setAllFieldsError(currentLangData.app.mandatoryFieldsRequired);
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (value["userName"] === "") {
      setAllFieldsError(currentLangData.app.mandatoryFieldsRequired);
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (value["password"] === "") {
      setAllFieldsError(currentLangData.app.mandatoryFieldsRequired);
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (value["companyPhone"] === "") {
      setAllFieldsError(currentLangData.app.mandatoryFieldsRequired);
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (countryCodeValue === "") {
      setAllFieldsError(currentLangData.app.mandatoryFieldsRequired);
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (
      !validator.isLength(
        utilityFunctionOfValue({
          string: value["companyPhone"],
          subString: subscriptionData?.companyPhoneNumber,
        }),
        8,
        11
      )
    ) {
      // setFeildsError(currentLangData.app.companyPhoneRange8to9);
      setAllFieldsError(currentLangData.app.companyPhoneRange8to9);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (
      !validator.isEmail(
        utilityFunctionOfValue({
          string: value["email"],
          subString: subscriptionData?.email,
        })
      )
    ) {
      // setFeildsError(currentLangData.app.wrongEmail);
      setAllFieldsError(currentLangData.app.wrongEmail);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (
      !validator.isMobilePhone(
        utilityFunctionOfValue({
          string: value["companyPhone"],
          subString: subscriptionData?.companyPhoneNumber,
        })
      )
    ) {
      setFeildsError(currentLangData.app.validPhone);
      setAllFieldsError(currentLangData.app.validPhone);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (
      // (!validator.isStrongPassword(value["password"]), [8, null, 1, null, 1])
      !validator.isStrongPassword(
        utilityFunctionOfValue({
          string: value["password"],
          subString: subscriptionData?.password,
        }),
        {
          minLength: 8,
          minLowercase: undefined,
          minUppercase: 1,
          minNumbers: undefined,
          minSymbols: 1,
        }
      )
    ) {
      // setFeildsError(currentLangData.app.validPass);
      setAllFieldsError(currentLangData.app.validPass);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else {
      return true;
      setAllFieldsError("");
    }
  };

  // Renders functions //

  return (
    <Flex
      {...styles.mainContainer}
      flexDirection={isMobile ? "column" : "row"}
      paddingLeft={isMobile ? 4 : 20}
      style={{
        display: "flex",
        height: "100%",
        // padding: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${TraxImage})`,
        // backgroundColor: "black",
      }}
    >
      <Flex
        {...styles.formFlex}
        paddingX={isMobile ? 0 : 20}
        marginBottom={isMobile ? -20 : 0}
      >
        <Text {...styles.txtRegistered} paddingLeft={isMobile ? 5 : 0}>
          {currentLangData.app.registerationHeading}
        </Text>
        {allfieldsError ? (
          <Alert variant="solid" status="error">
            <AlertIcon />
            {allfieldsError}
            <CloseButton
              onClick={() => setAllFieldsError("")}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        ) : null}
        <Flex {...styles.flexTextBold}>
          <Flex {...styles.mainFormFlex} paddingX={isMobile ? 5 : 0}>
            {renderFields({
              // mandatory: true,
              title: "Name",
              value: value["name"]
                ? value["name"]
                : subscriptionData?.displayName,
              onChange: (evt) => {
                handleonChange(evt, "name");
              },
            })}

            <SimpleGrid {...styles.simpleGridFlex} columns={isMobile ? 1 : 2}>
              {renderFields({
                title: "Company Name",
                value: value["companyName"]
                  ? value["companyName"]
                  : subscriptionData?.companyName,
                onChange: (evt) => {
                  handleonChange(evt, "companyName");
                },
              })}
              {renderFields({
                // type: "number",
                value: value["companyRegisterationNo"]
                  ? value["companyRegisterationNo"]
                  : subscriptionData?.companyRegistrationNumber,
                title: "Company Registration Number",
                onChange: (evt) => {
                  handleonChange(evt, "companyRegisterationNo");
                },
              })}

              <Flex flexDirection={"column"}>
                {renderFields({
                  // type: "tel",
                  maxLength: "13",
                  mandatory: true,
                  title: "Company Phone",
                  showSelectCountries: true,
                  countryCode: countryCodeValue
                    ? countryCodeValue
                    : subscriptionData?.companyCountryCode,
                  isInvalid: phoneTurnRed,
                  valueNumber: value["companyPhone"]
                    ? value["companyPhone"]
                    : subscriptionData?.companyPhoneNumber,
                  selectCountry: selectCountryHandler,
                  onBlur: () => checkValidationFields(),
                  onChange: (evt) => {
                    handleonChange(evt, "companyPhone");
                  },
                })}

                {phoneTurnRed ? (
                  <Text {...styles.errorMsg}>{cPhoneError}</Text>
                ) : null}
              </Flex>

              {renderFields({
                title: "Company Address",
                value: value["companyAddress"]
                  ? value["companyAddress"]
                  : subscriptionData?.companyFullAddress,
                onChange: (evt) => {
                  handleonChange(evt, "companyAddress");
                },
              })}

              {/* {renderDropdown({
                placeholder: "",
                title: "Industry",
                addSubIndustry: false,
                multiMapping: industry,
                subTitle: "Sub-Industry",
                subMultiMapping: subIndustry,
                onChangeSub: (s) => {
                  setValue((prev) => ({
                    ...prev,
                    subIndustry: s.target.value,
                  }));
                },
                onChange: (k) => {
                  setValue((prev) => ({
                    ...prev,
                    industry: k.target.value,
                  }));
                },
              })} */}
              <Flex flexDirection={'column'}>
                <Text ml={2}>Industry</Text>
              <Menu>
                <MenuButton
                  fontWieght={"normal"}
                  textAlign={"left"}
                  fontSize={"small"}
                  rightIcon={<RiArrowDownSFill />}
                  as={Button}
                  mt={4}
                >
                  <Text>
                    {singleindustry ? singleindustry : "Select Industry"}{" "}
                  </Text>
                </MenuButton>
                <MenuList>
                  {industry.map((item, index) => {
                    return (
                      <MenuItem onClick={() => setSingleIndustry(item)}>
                        {item}
                      </MenuItem>
                    );
                  })}
                  <MenuItem onClick={() =>{ setShowOthers(true);setSingleIndustry('')}}>
                    Others
                  </MenuItem>
                </MenuList>
              </Menu>
               </Flex>
              {showOthers && singleindustry === '' ? (
                <Flex mt={1}>
                  {" "}
                  {renderFields({
                    title: "Others (Please specify)",
                    // value: value["others"]
                    //   ? value["others"]
                    //   : subscriptionData?.others,
                    onChange: (evt) => {
                      handleonChange(evt, "others");
                    },
                  })}
                  <Button
                    onClick={() => addIndustry()}
                    ml={3}
                    w={"150px"}
                    mt={8}
                  >
                    {" "}
                    Add +
                  </Button>
                </Flex>
              ) : null}

              {renderDropdown({
                height: 10,
                placeholder: "",
                title: "Product | Service",
                multiMapping: ProdService,
                onChange: (k) => {
                  setValue((prev) => ({
                    ...prev,
                    product: k.target.value,
                  }));
                },
              })}

              <Box {...styles.firstGrid}></Box>

              {/* {renderFields({
                type: "tel",
                maxLength: 11,
                mandatory: true,
                title: "Phone",
                showSelectCountries: true,
                countryCode: phoneCountryCode,
                // isInvalid: phoneTurnRed,
                selectCountry: phoneCountryHandler,
                countryCode: phoneCountryCode
                  ? phoneCountryCode
                  : subscriptionData?.countryCode,
                isInvalid: phoneTurnRed,
                valueNumber: value["phone"]
                  ? value["phone"]
                  : subscriptionData?.phone,
                onBlur: () => checkValidationFields(),
                onChange: (evt) => {
                  handleonChange(evt, "phone");
                },
              })} */}

              {renderFields({
                title: "URL",
                value: value["url"]
                  ? value["url"]
                  : subscriptionData?.companyWebsite,
                onChange: (evt) => {
                  handleonChange(evt, "url");
                },
              })}
              <Flex flexDirection={"column"}>
                {renderFields({
                  title: "Email",
                  mandatory: true,
                  isInvalid: emailTurnRed,
                  value: value["email"]
                    ? value["email"]
                    : subscriptionData?.email,
                  onBlur: () => checkValidationFields(),
                  onChange: (evt) => {
                    handleonChange(evt, "email");
                  },
                })}
                {emailTurnRed ? (
                  <Text {...styles.errorMsg}>{emailDuplication}</Text>
                ) : null}
              </Flex>

              {renderFields({
                title: "Your Position",
                value: value["yourPosition"]
                  ? value["yourPosition"]
                  : subscriptionData?.companyPosition,
                onChange: (evt) => {
                  handleonChange(evt, "yourPosition");
                },
              })}

              <Box {...styles.firstGrid}></Box>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Flex {...styles.secondFlex} paddingTop={isMobile ? 0 : "72px"}>
        <Flex {...styles.userNamePasswordContainer} {...styles.flexTextBold}>
          {renderFields({
            title: "Username",
            mandatory: true,
            onBlur: () => checkValidationFields(),
            isInvalid: nameTurnRed,
            value: value["userName"]
              ? value["userName"]
              : subscriptionData?.name,
            onChange: (evt) => {
              handleonChange(evt, "userName");
            },
          })}
          {nameTurnRed ? <Text {...styles.errorMsg}>{uNameError}</Text> : null}

          <Flex>
            <Flex flex={1}>
              <Flex {...styles.firstGrid} flex={1} flexDirection={"column"}>
                <Flex>
                  <Text {...styles.mandatoryStar}>*</Text>
                  <Text {...styles.txtName}>
                    {currentLangData.app.password}
                  </Text>
                </Flex>
                <InputGroup>
                  <Input
                    {...styles.passwordInput}
                    type={show ? "text" : "password"}
                    value={
                      value["password"]
                        ? value["password"]
                        : subscriptionData?.password
                    }
                    onChange={(evt) => handleonChange(evt, "password")}
                  ></Input>
                  <InputRightElement width="4.5rem">
                    {show ? (
                      <AiFillEyeInvisible
                        onClick={() => setShow(!show)}
                        size={22}
                        cursor={"pointer"}
                      />
                    ) : (
                      <AiFillEye
                        cursor={"pointer"}
                        onClick={() => setShow(!show)}
                        size={22}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Flex>
          </Flex>
          <Flex {...styles.uploadCompany}>
            <Text {...styles.txtName}>Upload Company Forms</Text>
            <Text {...styles.textIE} {...styles.txtName}>
              {currentLangData.app.uploadDocumentNote}
            </Text>
          </Flex>
          <Flex {...styles.uploadAttachments}>
            {/* <Dropzone
              //  onSubmit={handleSubmit}
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              inputContent={renderInsideDropzone()}
              styles={{
                dropzone: {
                  // padding: "10px",
                  minWidth: "100%",
                  maxWidth: "150px",
                  minHeight: "200px",
                  maxHeight: "200px",
                  borderRadius: "20px",
                  borderColor: "transparent",
                  scrollbarColor: "#03eded",
                },
              }}
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "black",
                  borderRadius: "24px",
                },
              }}
            ></Dropzone> */}
            <Box paddingY={50} h={'150px'}>
              <Center>
                <Input   onChange={onChange} padding={1} borderWidth={1} type="file" multiple  />
              </Center>
              </Box>
          </Flex>
          {/* <Flex justifyContent={"center"} marginY={2}>
              <ReCAPTCHA
                size={"normal"}
                style={{
                  display: "flex",
                  fontSize: "12px",
                }}
                // size={"invisible"}
                // badge={'inline'}
                sitekey={TEST_KEY}
                onErrored={(e) => {
                  console.log("Error of Recaptured", e);
                }}
                onChange={onChangeRecapcha}
              />
            </Flex> */}
          {errCheck ? (
            <Text {...styles.errorMsg} marginTop={3}>
              {feildsError}
            </Text>
          ) : null}
          <Text {...styles.errorMsg}>{error}</Text>

          <Text {...styles.errorMsg} color="green">
            {message}
          </Text>
         {showProgress? <Progress colorScheme='green' mt={3}  isIndeterminate value={80} /> :null}
          <Button
            {...styles.btnContinue}
            // isLoading={loading}
            // isDisabled={disabledSubmit}
            onClick={() => handleSubmit()}
          >
            <Text color={"white"}>{currentLangData.app.continue}</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Register;

