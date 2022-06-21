import React, { useState, useContext, useEffect ,useRef} from "react";
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
import { Progress } from '@chakra-ui/react'
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
  Center,
  useDisclosure,
  SimpleGrid,
  RadioGroup,
  useMediaQuery,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  AlertDescription,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const RegisterForm2 = (props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedFiles, setSelecteFiles] = useState([]);
  const [btLoading, setBtLoading] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [duplicateError, setDuplicateError] = React.useState(false);
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let history = useHistory();
  const location = useLocation();
  const [error, setError] = useState("");
  const [name, setName] = useState('')
  const ref = useRef(null);
  const [fields, setFields] = useState([

  ]);
  console.log('name is',name)
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
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
  const [showProgress, setProgress] = useState(false);
  const [dayanmicField, setDayNamicsField] = useState('');
  const [phaseQuestions, setPhaseQuestions] = useState([
  ]);

  let registerData = location?.state?.data;
  console.log("Register Datai", registerData);

  // console.log("locationlocation", history);

  let previewData = location?.state?.data;

  const [processLimit, setProcessLimit] = useState(() =>
    processNumbers.length ? 1 : 1 + 1
  );

  useEffect(() => {
    if (location?.state === undefined) {
      history.goBack();
    }
     
    getTracks();
    getIndustries();
  }, []);

 
  useEffect(() => { }, [processLimit]);

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

  const onChange = (e) => {
    console.log(e.target.files);
    setSelecteFiles(e.target.files)
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

  const renderInputFields = () => {
    // let array=[]
    // array.push({name:name})
    // setFields(array)
    // fields.push(array)
    let newValue =fields.concat({name:name})
  }

  const handleSubmit = async () => {
    let allFiles = selectedFiles
    if (!allFiles.length) {
      onOpen()
    }
    else {
      for (let index = 0; index < allFiles.length; index++) {
        console.log("data", allFiles[index]);
        setProgress(true)
        await uploadImage(allFiles[index])
          .then((res) => {
            // setS3UploadSuccess(true);
            console.log("res is", res.location);
            let image = [];
            image.push(res.location);
            s3ImagesData.push(res.location);
            console.log("s3IMageData", s3ImagesData);
            // setShow(false);
            if (s3ImagesData.length === allFiles.length) {
              onOpen()
              setProgress(false)
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    }
  };

  const handleOnChangeOfPhases = (e, keys, index) => {
    let k = e.target.value;
    phaseQuestions[index] = {
      ...phaseQuestions[index],
      fields:[],
      [keys]: k,
    };
    console.log("phaseQuestions", phaseQuestions);
  };

  const handleOnAddFields = (index) => {
    if(phaseQuestions[index].fields.length > 0){
      phaseQuestions[index].fields.map((item,vale)=>{
       if(item.name === dayanmicField){
        setDuplicateError('Your Not able to add duplicate fields for same phase ')
        setTimeout(() => {
          setDuplicateError(null)
        }, 3000);
        ref.current.value = '';
        setDayNamicsField(null)
       }
         let tempState = phaseQuestions;
          let tempFeilds = tempState[index].fields
       
        if(!tempFeilds.some(el => el.name === dayanmicField)){
          let obj={
            name:dayanmicField,
            }
          tempFeilds.push(obj);
          tempState[index].fields = tempFeilds;
          setPhaseQuestions([...tempState])
          ref.current.value = '';
          setDayNamicsField(null)
        }
      })
    }
    else if (phaseQuestions[index].fields.length <= 0) {
      console.log('main else Called ')
      let tempState = phaseQuestions;
      let tempFeilds = tempState[index].fields;
      let obj={
        name:dayanmicField,
        }
       tempFeilds.push(obj);
      tempState[index].fields = tempFeilds;
      setPhaseQuestions([...tempState])
      ref.current.value = '';
      setDayNamicsField(null)
    }
     
  };

  const handleRemoveFields = (data,fieldIndex,phaseIndex) => {
    let filterField = phaseQuestions[phaseIndex].fields.filter(filterItem=> filterItem.name != data )
    phaseQuestions[phaseIndex].fields = filterField;
     setPhaseQuestions([...phaseQuestions])
  };

  // Event funtions //
  console.log('procress Limit',processLimit)
  const submitContinue = () => {
    setSubmitLoading(submitLoading);
    onClose();
    setBtLoading(true);
    checkMandatoryFields();
    let noError = checkMandatoryFields();
    setError("");
    console.log("noError", noError);
    if (!noError) {
      setError("Something went wrong");
      setSubmitLoading(!submitLoading);
      setBtLoading(false);
      setTimeout(() => {
        setError(null);
        setLoading(false);
      }, []);
    } else {
      let newPhaseQuestion = phaseQuestions.map((item) => {
        return {
          department: item.processName,
          processSteps: item.processDescription,
          processType: item.purposeOfProcess,
          productIncharge: item.personInCharge,
        };
      });
      let selectedSubIndex = window.localStorage.getItem("subscriptionIndex");
      let body = {
        // registerData
        subscription: selectedSubIndex,
        name: registerData?.name,
        displayName: registerData?.displayName,
        password: registerData?.password,
        confirmPassword: registerData?.confirmPassword,
        companyName: registerData?.companyName,
        // phone: registerData?.phone,
        countryCode: registerData?.countryCode,
        companyRegistrationNumber: registerData?.companyRegistrationNumber,
        companyCountryCode: registerData?.companyCountryCode,
        companyPhoneNumber: registerData?.companyPhoneNumber,
        companyFullAddress: registerData?.companyFullAddress,
        industry: registerData?.industry,
        product: registerData?.product,
        others: registerData?.others,
        email: registerData?.email,
        // phone: registerData?.phone,
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
        phases: phaseQuestions ? phaseQuestions : registerData?.phases,
        // trackingBased: processLimit,
        documents: s3ImagesData ? s3ImagesData : registerData?.documents,

        track: value["track"] ? value["track"] : track[0],
        // image:
        //   "https://s3.ap-southeast-1.amazonaws.com/likwid-media/1610105987735.jpeg",
      };
      console.log('body is',body);

       
      apimanager .post("registerClient", body)
        .then((res) => {
          if (res.message === 6422) {
            // setSuccessfullyRegistered("Successfully Registered");
            setMessage("Successfully Registered");

            setBtLoading(false);
            setSubmitLoading(!submitLoading);
            setTimeout(() => {
              setMessage('')
              history.push('/')
            }, 2000);
            onClose();
          }
          console.log(body, "RESPONSE OF registerStaff", res);
          if (res.message === 6212) {
            setFeildsError("Error in Super Admin Register!");
            setSubmitLoading(!submitLoading);
            setBtLoading(false);
            setLoading(false);
            setDisabledSubmit(true);
            setTimeout(() => {
              setFeildsError('')
            }, 2000);
            onClose();
          }
          if (res.message === 5001) {
            setFeildsError("Somthing went wrong make sure fill all fields");
            setSubmitLoading(!submitLoading);
            setBtLoading(false);
            setLoading(false);
            setTimeout(() => {
              setFeildsError('')
            }, 2000);
            setDisabledSubmit(true);
            onClose();
          }
          if (res.message === 6265) {
            if (res.err !== undefined && res.err !== null) {
              let err = Object.keys(res.err.keyPattern)[0];
              if (err === "phone") {
                setFeildsError("Phone already exist");
                setBtLoading(false);
                setLoading(false);
                setDisabledSubmit(true);
                setTimeout(() => {
                  setFeildsError('')
                }, 2000);
                onClose();
              } else if (err === "email") {
                setFeildsError("Email already exist ");
                setBtLoading(false);
                setLoading(false);
                setDisabledSubmit(true);
                setTimeout(() => {
                  setFeildsError('')
                }, 2000);
                onClose();
              } else if (err === "name") {
                setFeildsError("Name already exist ");
                setBtLoading(false);
                setLoading(false);
                setDisabledSubmit(true);
                onClose();
              } else {
                setFeildsError("Oops! something went wrong ");
                setBtLoading(false);
                setLoading(false);
                setDisabledSubmit(true);
                setTimeout(() => {
                  setFeildsError('')
                }, 2000);
                onClose();
              }
            }
            if (res.message === 6176) {
              if (res.err !== undefined && res.err !== null) {
                let err = Object.keys(res.err.keyPattern)[0];
                if (err === "phone") {
                  setFeildsError("Phone already exist");
                  setBtLoading(false);
                  setLoading(false);
                  setTimeout(() => {
                    setFeildsError('')
                  }, 2000);
                  setDisabledSubmit(true);
                  onClose();
                } else if (err === "email") {
                  setFeildsError("Email already exist ");
                  setBtLoading(false);
                  setTimeout(() => {
                    setFeildsError('')
                  }, 2000); 
                  setLoading(false);
                  setDisabledSubmit(true);
                  onClose();
                } else if (err === "name") {
                  setFeildsError("Name already exist ");
                  setBtLoading(false);
                  setTimeout(() => {
                    setFeildsError('')
                  }, 2000);
                  setLoading(false);
                  setDisabledSubmit(true);
                  onClose();
                } else {
                  setFeildsError("Oops! something went wrong ");
                  setBtLoading(false);
                  setTimeout(() => {
                    setFeildsError('')
                  }, 2000);
                  setLoading(false);
                  setDisabledSubmit(true);
                  onClose();
                }
              }

              if (res.message === 6177) {
                if (res.err !== undefined && res.err !== null) {
                  let err = Object.keys(res.err.keyPattern)[0];
                  if (err === "phone") {
                    setFeildsError("Phone already exist");
                    setBtLoading(false);
                    setLoading(false);
                    setDisabledSubmit(true);
                    setTimeout(() => {
                      setFeildsError('')
                    }, 2000);
                    onClose();
                  }
                }
              }

              else {
                setFeildsError("Oops! something went wrong ");
                setBtLoading(false);
                setLoading(false);
                setDisabledSubmit(true);
                setTimeout(() => {
                  setFeildsError('')
                }, 2000);
                onClose();
              }
            }
       }
        })
        .catch((error) => {
          setSubmitLoading(!submitLoading);
          console.log("Error Of registerMaster", error);
          onClose();
        });
      setSubmitLoading(!submitLoading);
      setLoading(false);
      onClose();
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
          console.log("getAllTracks", response);
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
    if (value["name"] === "") {
      setFeildsError(currentLangData.app.allFieldRequired)
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
        onClose
      });
      return false;
    } else if (value["email"] === "") {
      setFeildsError(currentLangData.app.allFieldRequired)
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
        onClose
      });
      return false;
    } else if (value["position"] === "") {
      setFeildsError(currentLangData.app.allFieldRequired)
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
        onClose
      });
      return false;
    }
    else if (value["deparment"] === "") {
      setFeildsError(currentLangData.app.allFieldRequired)
      console.log(value);
      timerForError({
        fieldErr: null,
        errChec: false,
        onClose
      });
      return false;
    }
    else if (
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
  const conformationMessage = () => {
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay padding={20}>
            <AlertDialogContent>
              <AlertDialogBody margin={10}>
                Are u sure You have filled information for each phase and
                selected the correct number of phases for their supply chain?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Check Again
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => submitContinue()}
                  ml={3}
                >
                  Confirm and Proceed
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
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

  const renderErrorAlert=()=>{
  return <Alert mr={2} ml={2} w={'99%'} marginTop={3} status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Oops!</AlertTitle>
      <AlertDescription>{duplicateError}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
   </Alert>
  }

  const handleonChangedaynamicFields=(value,index,fieldIndex,data)=>{
    //  phaseQuestions[index].feilds[fieldIndex].value=value
     phaseQuestions[index].fields[fieldIndex][data]=value
  }
  console.log('test',phaseQuestions)
  const convertToPDF = (e) => {
    e.preventDefault();
    let newPhaseQuestion = phaseQuestions.map((item) => {
      return {
        department: item.processName,
        processSteps: item.processDescription,
        processType: item.purposeOfProcess,
        productIncharge: item.personInCharge,
      };
    });
    let body = {
      name: registerData?.name,
      displayName: registerData?.displayName,
      password: registerData?.password,
      confirmPassword: registerData?.confirmPassword,
      companyName: registerData?.companyName,
      // phone: registerData?.phone,
      countryCode: registerData?.countryCode,
      companyRegistrationNumber: registerData?.companyRegistrationNumber,
      companyCountryCode: registerData?.companyCountryCode,
      companyPhoneNumber: registerData?.companyPhoneNumber,
      companyFullAddress: registerData?.companyFullAddress,
      industry: registerData?.industry,
      product: registerData?.product,
      others: registerData?.others,
      email: registerData?.email,
      // phone: registerData?.phone,
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
      phases: phaseQuestions,
      // trackingBased: processLimit,
      SSMdocument: s3ImagesData,
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
        paddingLeft={isMobile ? 5 : 20}
        flexDirection={isMobile ? "column" : "row"}
        style={{
          // height: "100%",
          backgroundColor: 'red',
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
            {feildsError ? <Alert variant="solid" status="error">
              <AlertIcon />
              <AlertTitle>{feildsError}</AlertTitle>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setFeildsError(' ')}
              />

            </Alert>
              : null}
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

                {/* {RenderFields({
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
                })} */}

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
                              ref:ref,
                              disable:dayanmicField?false:true,
                               phaseName:phaseQuestions[value]?.processName,
                               isDisable:phaseQuestions[value]?.processName?false:true,
                              fields:phaseQuestions[value]?.fields ?phaseQuestions[value].fields:null,
                              phaseNumber:value + 1,
                              flag:value+1,
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
                              onRemoveField:(item,index)=>{
                                   handleRemoveFields(item,index,value)
                              },
                              onChangedaynamicFields:(k,index,data)=>{
                                handleonChangedaynamicFields(k,value,index,data)
                              },
                              onChangeAddFields:()=>{
                                handleOnAddFields(value)
                              },
                              handleItemChange: (k) => {
                               setDayNamicsField(k)
                              },
                              firstonChange: (k) => {
                                handleOnChangeOfPhases(k, "department", value);
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
                   { duplicateError ?renderErrorAlert() :null}
              </Flex>
            </Flex>
            {/* <Text mb={2} marginLeft={7}>Specify Fields For Phase</Text>
            <Box bg={'#f6f5fa'} padding={5} w={'85%'} marginLeft={7}>
            <Menu>
         <MenuButton mb={3} w={"83%"} as={Button} >
           Actions
        </MenuButton>
        <MenuList>
          
           {
            processNumbers &&
            processNumbers
              .slice(-processLimit, undefined, processNumbers)
              .map((data, index) => {
               return<MenuItem>{data}</MenuItem>
             })
           }
         </MenuList>
         </Menu>
              <Flex>
                <Input onChange={(e) => setName(e.target.value)} bg={'white'} mr={"5"}></Input>
                <Button onClick={()=>renderInputFields()} color={'white'} bg={'#53b1ad'}>Add Field</Button>
              </Flex>
              <SimpleGrid  overflowY={"scroll"} h={'100px'} boxShadow={'sm'} mt={2} bg={'#f6f5fa'} columns={2}>
                {fields ? fields.map((item, index) => {
                  return <Flex mt={2} mr={2} flexDirection={'column'}>
                           <Text>{item.name}</Text>
                           <Input 
                            onChange={(txt) => {
                              fields[index].value = txt.target.value;
                            }} 
                            placeholder={item.name} bg={'white'}></Input>
                         </Flex>
                      }) 
                  : null}
              </SimpleGrid>
            </Box> */}

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
                {/* <Button
                  {...styles.btnPreview}
                  // isLoading={loading}
                  // isDisabled={true}
                  onClick={(e) => convertToPDF(e)}
                >
                  <Text {...styles.backTxt} color={"black"}>
                    {currentLangData.app.preview}
                  </Text>
                </Button> */}
                {/* <Spacer /> */}
                {/* <Button
                  {...styles.btnContinue}
                  // isLoading={!submitLoading}
                  // loading={submitLoading}
                  onClick={onOpen}
                  isLoading={btLoading}
                >
                  <Text {...styles.backTxt} color={"white"}>
                    {currentLangData.app.submit}
                  </Text>
                </Button> */}
              </Flex>
              <Flex mt={5}>
                <Flex
                  {...styles.uploadAttachments}
                  alignSelf={isMobile ? "center" : null}
                >
                  {/* <Dropzone
                    onSubmit={handleSubmit}
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
                  <Box w={'250px'} paddingY={50} h={'150px'}>
                    <Center>
                      <Input onChange={onChange} padding={1} borderWidth={1} type="file" multiple />
                    </Center>
                  </Box>
                </Flex>
              </Flex>
              {showProgress ? <Progress colorScheme='green' mt={3} isIndeterminate value={80} /> : null}
              <Button
                {...styles.btnContinue}
                alignSelf={"center"}
                width={"250px"}
                // isLoading={!submitLoading}
                // loading={submitLoading}
                onClick={() => handleSubmit()}
                isLoading={btLoading}
              >
                <Text {...styles.backTxt} color={"white"}>
                  {currentLangData.app.submit}
                </Text>
              </Button>
              {/* {errCheck ? (
                <Text {...styles.errorMsg}>{feildsError}</Text>
              ) : null} */}
              {/* <Text {...styles.errorMsg}>{error}</Text> */}
              {/* <Text {...styles.errorMsg} color="green">
                {message}
              </Text> */}
              {message ? (
                <Alert
                  status="success"
                  variant="solid"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px"
                  marginTop={5}

                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">

                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                    {message}
                  </AlertDescription>
                </Alert>
              ) : null}
            </Flex>
          </Flex>
        </>
      </Flex>
      {conformationMessage()}
    </>
  );
};
export default RegisterForm2;