import validator from "validator";
import config from "../config/config";
import { FaRegBuilding } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import ApiManager from "../config/apiManager";
import GoogleMapReact from "google-map-react";
import React, { useContext, useState } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import LangContext from "../context/languageContext";
import style from "../components/contactComponent/styles";
import build from "../components/image/contactIcons/build.svg";
import joint3 from "../components/image/contactIcons/joint3.svg";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import traxContact from "../components/image/contactIcons/Trax_contact.svg";
import {
  Flex,
  Text,
  Box,
  Input,
  Stack,
  Circle,
  Button,
  GridItem,
  Textarea,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import connect from "../components/image/contactIcons/connect.svg";
import empower from "../components/image/contactIcons/empower.svg";
import { TrackDetailComponent } from "../components/contactComponent/contactResuableComponent";

export const FoodSafety = () => {
  const center = {
    lat: 33.484692096710205,
    lng: 74.37578916549683,
  };

  let initValue = {
    name: "",
    companyName: "",
    email: "",
    subject: "",
    message: "",
  };

  const apiManager = ApiManager.getInstance();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = useContext(LangContext);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(initValue);
  const [loading, setLoading] = useState(false);
  const [errCheck, setErrCheck] = useState(false);
  const [feildsError, setFeildsError] = useState("");
  const [disabledSubmit, setDisabledSubmit] = useState(false);

  // Handle Onchange of functions //

  const handleonChange = (evt, key) => {
    console.log(evt.target.value, "valuevalue", key);
    const ev = evt.target.value;
    setValue({
      ...value,
      [key]: ev,
    });
  };

  // Utility Functions //

  const timerForError = ({ fieldErr, errChec }) => {
    setErrCheck(true);
    setLoading(false);
    setTimeout(() => {
      setFeildsError(fieldErr);
      setErrCheck(errChec);
    }, [3000]);
  };

  const checkMandatoryFields = () => {
    console.log("valuevalue=>", value);
    if (
      validator.isEmpty(
        value["name"] &&
          value["email"] &&
          value["companyName"] &&
          value["subject"] &&
          value["message"]
      )
    ) {
      setFeildsError(currentLangData.app.allFieldRequired);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
      return false;
    } else if (!validator.isEmail(value["email"])) {
      setFeildsError(currentLangData.app.wrongEmail);
      timerForError({
        fieldErr: null,
        errChec: false,
      });
    } else {
      return true;
    }
  };

  // Submit or event funtions //
  const submitContact = () => {
    console.log("Value=<Submit", value);
    checkMandatoryFields();
    let noError = checkMandatoryFields();
    setError("");
    console.log("noError", noError);
    if (!noError) {
      setError("Something went wrong");
      setTimeout(() => {
        setError(null);
        setLoading(false);
      }, []);
    } else {
      let body = {
        // registerData
        name: value["name"],
        companyName: value["companyName"],
        email: value["email"],
        subject: value["subject"],
        message: value["message"],
      };

      console.log(body, "BODY");
      apiManager
        .post("contactUs", body)
        .then((res) => {
          console.log(body, "RESPONSE OF contactUs", res);
          if (res.message === 6406) {
            // setSuccessfullyRegistered("Successfully Registered");
            setMessage("Email Successfully Sent!");
            setLoading(false);
            setDisabledSubmit(true);
            setTimeout(() => {
              setMessage(null);
            }, [3000]);
          }
          if (res.message === 6405) {
            setMessage("Error in sending email!");
            setLoading(false);
            setDisabledSubmit(true);
            setTimeout(() => {
              setMessage(null);
            }, [3000]);
          }
        })
        .catch((error) => {
          setLoading(false);
          setDisabledSubmit(false);
          console.log("Error Of registerMaster", error);
        });
    }
  };

  return (
    <>
      <Flex {...style.centeredNColumned}>
        <Flex {...style.mainFlex}>
          <Text {...style.ourEco} fontSize={isMobile ? "x-large" : "xx-large"}>
            {currentLangData.app.ecoSys}
          </Text>
          <Flex {...style.redLine}></Flex>
          <Flex {...style.flexTrax} width={isMobile ? "90%" : "50%"}>
            <Text {...style.traxFlexDetails}>
              {currentLangData.app.traxDetails}
            </Text>
            <Text></Text>
            <Text {...style.traxFlexDetails2}>
              {currentLangData.app.traxDetailsFirst}
            </Text>
          </Flex>

          <SimpleGrid
            {...style.traxComponentText}
            display={isMobile ? null : "flex"}
            columns={isMobile ? 2 : 1}
            flexDirection={isMobile ? "column" : "row"}
          >
            {TrackDetailComponent({
              src: joint3,
              title: "Joint",
              details: "Development",
            })}
            {TrackDetailComponent({
              src: empower,
              title: "Empower",
              details: "Your Business",
            })}
            {TrackDetailComponent({
              src: connect,
              title: "Connect",
              details: "Your Client",
            })}
            {TrackDetailComponent({
              src: build,
              title: "Build",
              details: "Your Profile",
            })}
          </SimpleGrid>
        </Flex>

        <Flex {...style.redFlex} backgroundImage={traxContact}>
          <Flex marginStart={20} flexDirection={"column"}>
            <Text
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={"xxx-large"}
            >
              {currentLangData.app.beOurTrusted}
            </Text>
            <Text color={"white"} fontWeight={"bold"} fontSize={"x-large"}>
              {currentLangData.app.letsStart}
            </Text>
            <Circle size="40px" bg="white" color="white" marginTop={10}>
              <ArrowDownIcon w={8} h={8} color="red" />
            </Circle>
          </Flex>
        </Flex>

        <Flex {...style.centeredNColumned} marginTop={isMobile ? -16 : 0}>
          <Text {...style.ourEco} fontSize={isMobile ? "x-large" : "xx-large"}>
            {currentLangData.app.contactUs}
          </Text>
          <Flex {...style.redLine}></Flex>
        </Flex>

        <Flex {...style.flexSecond} flexDirection={isMobile ? "column" : "row"}>
          <Flex
            {...style.centeredNColumned}
            marginRight={isMobile ? 0 : 5}
            width={isMobile ? "400px" : "550px"}
          >
            <Flex {...style.mapFlex}>
              <Box {...style.mapBox}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: config.google_map_key,
                  }}
                  defaultZoom={3}
                  defaultCenter={center}
                >
                  {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="" /> */}
                </GoogleMapReact>
              </Box>
            </Flex>

            <SimpleGrid
              // marginTop={5}
              // columns={3}
              {...style.addressFlex}
              marginTop={isMobile ? 10 : 0}
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(1, 2fr)"
              // templateColumns="repeat(3, 1fr)"
            >
              <GridItem
                marginX={1}
                marginY={2}
                rowSpan={isMobile ? 2 : 0}
                colSpan={isMobile ? 10 : 1}
              >
                <FaRegBuilding size={25} />
              </GridItem>
              <GridItem colSpan={2} colEnd={6}>
                <Text marginLeft={5}>
                  Lot 8.1, 8th Floor, Menara Lien Hoe, No. 8, Golf & Country
                  Resort, Persiaran Tropicana, Tropicana, 47410 Petaling Jaya,
                  Selangor
                </Text>
              </GridItem>

              <GridItem
                rowSpan={isMobile ? 2 : 0}
                colSpan={isMobile ? 10 : 1}
                marginX={1}
                marginY={2}
              >
                <AiOutlineMail size={25} />
              </GridItem>

              <GridItem colSpan={2} colEnd={6}>
                <Flex flexDirection={"row"} marginStart={5}>
                  <Text>or mail us at </Text>
                  <Text color={"red"} marginLeft={1}>
                    trax@xox.com.my
                  </Text>
                </Flex>
              </GridItem>

              <GridItem
                rowSpan={isMobile ? 2 : 0}
                colSpan={isMobile ? 10 : 1}
                marginX={1}
                marginY={2}
              >
                <AiOutlineWhatsApp size={25} />
              </GridItem>
              <GridItem colSpan={2} colEnd={6}>
                <Text marginLeft={5}>+6 010 3377 990</Text>
              </GridItem>
            </SimpleGrid>
          </Flex>

          <Flex
            {...style.contactFields}
            marginTop={isMobile ? 5 : -2}
            width={isMobile ? "300px" : "550px"}
          >
            <Stack spacing={5}>
              <Input
                size={"lg"}
                variant="filled"
                placeholder="FullName"
                onChange={(k) => handleonChange(k, "name")}
              />
              <Input
                size={"lg"}
                variant="filled"
                placeholder="Company Name"
                onChange={(k) => handleonChange(k, "companyName")}
              />
              <Input
                size={"lg"}
                variant="filled"
                placeholder="Email"
                onChange={(k) => handleonChange(k, "email")}
              />
              <Input
                required
                size={"lg"}
                variant="filled"
                placeholder="Subject"
                onChange={(k) => handleonChange(k, "subject")}
              />
              <Textarea
                variant="filled"
                placeholder="Message"
                onChange={(k) => handleonChange(k, "message")}
              />
            </Stack>
            {errCheck ? (
              <Text {...style.errorMsg}>{feildsError}</Text>
            ) : (
              <Text textAlign={"end"}>-</Text>
            )}
            <Text {...style.errorMsg} color="green">
              {message}
            </Text>
            <Button
              {...style.btnSend}
              alignSelf={isMobile ? "center" : null}
              onClick={() => submitContact()}
            >
              <Text {...style.txtSend}>Send Message</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};
export default FoodSafety;
