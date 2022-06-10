import React, { useEffect, useState } from "react";
import {
  Flex,
  SimpleGrid,
  Box,
  Avatar,
  Input,
  FormControl,
  FormLabel,
  Button,
  Progress,
  Icon,
  Text,
} from "@chakra-ui/react";
import style from "./style";
import { AlertMessage } from "../Alert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ApiManager from "../../config/apiManager";
import { emailRegex } from "../../constants/regex";
import LangContext from "../../context/languageContext";
import { useAuthState } from "../../context/authContext";
import { uploadImage } from "../../config/imageUploader";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { useAuthDispatch } from "../../context/authContext";

const UpdateProfile = () => {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();
  const apimanager = ApiManager.getInstance();
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { currentLangData } = React.useContext(LangContext);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [fields, setfields] = React.useState({
    firstname: user?.name,
    deparment: user?.department,
    role: user?.managingRole,
    companyPosition: user?.companyPosition,
    phone: user?.phone,
    email: user?.email,
    webSite: user?.url,
    companyAddress: user?.companyFullAddress,
    image: user?.image,
  });
  const [countryCode, setCountryCode] = useState("+" + user?.countryCode);
  const [s3Image, setS3Image] = React.useState(user?.image);

  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    setfields({
      ...fields,
      [key]: ev,
    });
  };

  const Validation = () => {
    // let keys = Object.keys(fields);
    // let pass = true;
    // for (let i = 0; i < keys.length; i++) {
    //   const key = keys[i];
    //   if (fields[key] === "" || fields[key] === undefined) {
    //     onError();
    //     pass = false;
    //     break;
    //   }
    // }
    // return pass;
    if (
      Object.is(fields.firstname, undefined) ||
      Object.is(fields.firstname, "")
    ) {
      onError();
      return false;
    }
    if (
      Object.is(fields.deparment, undefined) ||
      Object.is(fields.deparment, "")
    ) {
      onError();

      return false;
    }
    if (Object.is(fields.role, undefined) || Object.is(fields.role, "")) {
      onError();

      return false;
    }
    if (
      Object.is(fields.companyPosition, undefined) ||
      Object.is(fields.companyPosition, "")
    ) {
      onError();

      return false;
    }
    if (
      Object.is(fields.companyAddress, undefined) ||
      Object.is(fields.companyAddress, "")
    ) {
      onError();
      return false;
    }
    if (Object.is(fields.email, undefined) || Object.is(fields.email, "")) {
      onError();
      return false;
    }
    if (Object.is(fields.webSite, undefined) || Object.is(fields.webSite, "")) {
      onError();

      return false;
    }

    if (!emailRegex.test(String(fields.email).toLowerCase())) {
      setStatus("error");
      setErrorMessage(currentLangData.app.validEmail);
      return false;
    }
    if (fields.phone.lenght < 9) {
      setStatus("error");
      setErrorMessage(currentLangData.app.validPhone);
      return false;
    } else {
      setErrorMessage(null);
      return true;
    }
  };
  const onError = () => {
    setStatus("error");
    setErrorMessage(currentLangData.app.missedSpot);
  };
  const handleonChage = (e) => {
    setShow(true);
    uploadImage(e.target.files[0])
      .then((res) => {
        console.log("image uri", res.location);

        setS3Image(res.location);
        // setShow(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const updateUser = () => {
    let validator = Validation();
    if (validator) {
      setLoading(true);
      let body = {
        name: fields.firstname,
        department: fields.deparment,
        managingRole: fields.role,
        companyPosition: fields.companyPosition,
        // companyPhone: fields.phone,
        // mobileNumber: fields.phone,
        phone: fields.phone,
        countryCode: countryCode,
        companyWebSite: fields.webSite,
        image: s3Image,
      };
      apimanager
        .post(currentLangData.apis.updateClient, body)
        .then((response) => {
          console.log("body", body);
          if (response.message === 6492) {
            setLoading(false);
            setStatus("success");
            setErrorMessage(currentLangData.app.successFullyRegister);
            localStorage.setItem(
              "currentUser",
              JSON.stringify(response.result)
            );
            dispatch("AUTHENTICATED", response.result);
          }
        })
        .catch((error) => {});
    }
  };

  const RenderProfileItem = (title, isRequired, value, key) => {
    return (
      <FormControl id="first-name" isRequired={isRequired}>
        <Flex marginTop={4}>
          <FormLabel {...style.formLabel}>{title}</FormLabel>
          <Input
            onChange={(e) => handleonChange(e, key)}
            value={value}
            placeholder={title}
          />
        </Flex>
      </FormControl>
    );
  };

  const renderPhone = (title, isRequired, value, key) => {
    return (
      <FormControl isRequired={isRequired}>
        <Flex marginTop={4}>
          <FormLabel {...style.formLabel}>{title}</FormLabel>
          <Box {...style.phoninputContainer}>
            <PhoneInput
              country={"pk"}
              inputStyle={style.phoneInput}
              enableSearch={true}
              value={countryCode}
              onChange={(phone) => setCountryCode(phone)}
            />
          </Box>
          <Input
            {...style.phoneInput2}
            value={value}
            type={"number"}
            maxLength={"9"}
            minlength="9"
            onChange={(e) => handleonChange(e, key)}
            placeholder={title}
          />
        </Flex>
      </FormControl>
    );
  };
  useEffect(() => {});
  console.log("phone", user);
  return (
    <>
      <SimpleGrid
        {...style.simpleGridContainer}
        display={{ md: "flex" }}
        alignSelf={["center"]}
        width={{ base: "100%", sm: "50%", md: "100%" }}
      >
        <Flex flex={1} flexDirection={"column"}>
          {RenderProfileItem("FullName", true, fields?.firstname, "firstname")}
          {RenderProfileItem(
            "Department",
            true,
            fields?.deparment,
            "deparment"
          )}
          {RenderProfileItem("Manging Role", true, fields.role, "role")}
          {RenderProfileItem(
            "Company Position",
            true,
            fields?.companyPosition,
            "companyPosition"
          )}
          {RenderProfileItem(
            "Company Full Address",
            true,
            fields.companyAddress,
            "companyAddress"
          )}
          {renderPhone("Company Phone Number", false, fields?.phone, "phone")}
          {/* {renderPhone("Mobile Number", false, fields?.phone, "phone")} */}
          {RenderProfileItem("Email Address", true, fields?.email, "email")}
          {RenderProfileItem(
            "Company Website",
            true,
            fields?.webSite,
            "webSite"
          )}
        </Flex>
        <Flex {...style.imageContainer}>
          <Avatar src={s3Image} {...style.avatar} name={user?.name} />
          <Input
            onChange={(e) => handleonChage(e)}
            {...style.imageInput}
            type="file"
          />

          <Button
            isLoading={loading}
            {...style.saveButton}
            onClick={() => updateUser()}
          >
            <Text paddingX={3}> {currentLangData.app.save} </Text>
            <Icon as={MdOutlineSystemUpdateAlt} {...style.svIcon} />
          </Button>
          {errorMessage ? (
            <AlertMessage
              onClick={() => setErrorMessage(null)}
              message={errorMessage}
              status={status}
            ></AlertMessage>
          ) : null}
        </Flex>
      </SimpleGrid>
    </>
  );
};
export default UpdateProfile;
