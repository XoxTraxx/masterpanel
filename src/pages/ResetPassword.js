import React, { useEffect, useState, useRef } from "react";
import { Container, Input, Button } from "@chakra-ui/react";
import theme from "../config/color";
import ApiManager from "../config/apiManager";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AlertMessage } from "../components/Alert";
import LangContext from "../context/languageContext";

const ResetPassword = () => {
  // let qrUrlToken = config.qrUrl + "123321123";
  // console.log("urlConfig", qrUrlToken);

  let initialValue = {
    password: "",
    confirmPasworrd: "",
  };

  const [fields, setFeilds] = useState(initialValue);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = useState("");
  const [hide, setHide] = useState(false);
  const { currentLangData } = React.useContext(LangContext);
  let apiManager = ApiManager.getInstance();
  const hash = useLocation().search;
  const paramData = new URLSearchParams(hash).get("token");
  console.log("paramDataparamData",paramData)
  const passref = useRef(true);
  const confirmPassRef = useRef(true);
  useEffect(() => {
    console.log("linkOfRestPage=.>", window.location.href);
  }, []);

  //handling onChange of feilds
  const handleonChange = (evt, key) => {
    const ev = evt.target.value;
    console.log("feilds=>", ev);
    setFeilds({
      ...fields,
      [key]: ev,
    });
  };

  const validator = () => {
    if (password === "") {
      setMessage("All fields are required");
      return false;
    } else if (confirmPassword === "") {
      setMessage("All fields are required");
      return false;
    } else if (password != confirmPassword) {
      setMessage("Password and confirm password must be same ");
      return false;
    } else {
      setMessage(null);
      return true;
    }
  };

  const resetPassword = () => {
    let validate = validator();

    if (validate) {
      setLoading(true);
      let body = {
        password: password,
        confirmPassword: confirmPassword,
        hash: paramData,
      };
      apiManager
        .post("resetPassword", body)
        .then((response) => {
          console.log("body", body);
          if (response.message === 5012) {
            setLoading(false);
            setMessage("Your password has been change successfully.");
          }
          if (response.message === 5001) {
            setLoading(false);
            setMessage("Some thing Went Wrong. ");
          }
          console.log("resetPassword", response);
        })
        .catch((error) => {
          console.log("errorresetPassword", error);
        });
    }
  };

  const resetInput = () => {
    passref.current.value = "";
    confirmPassRef.current.value = "";
  };

  return (
    <Container
      borderRadius={5}
      padding={10}
      borderWidth={1}
      marginTop={5}
      boxShadow={"lg"}
      ref={passref}
    >
      <Input
        placeholder={"Enter password "}
        onChange={(evt) => setPassword(evt.target.value)}
        type={hide ? "text" : "password"}
        ref={passref}
      />
      <Input
        marginTop={5}
        placeholder={"Confirm Password"}
        type={hide ? "text" : "password"}
        ref={confirmPassRef}
        onChange={(evt) => setConfirmPassword(evt.target.value)}
      />
      <Button
        marginTop={5}
        width={"100%"}
        backgroundColor={theme.customColors.bgColors[300]}
        color={theme.customColors.common[100]}
        isLoading={loading}
        onClick={() => resetPassword()}
      >
        {currentLangData.app.resetPassword}
      </Button>
      {message ? (
        <AlertMessage
          onClick={() => {
            resetInput();
            setMessage(null);
          }}
          message={message}
          status={"success"}
        />
      ) : null}
    </Container>
  );
};
export default ResetPassword;