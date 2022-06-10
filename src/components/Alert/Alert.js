import style from "./style";
import React, { useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import LangContext from "../../context/languageContext";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

const AlertMessage = ({ status, message, onClick }) => {
  const { currentLangData } = useContext(LangContext);
  return (
    <Alert
      colorScheme={status === currentLangData.app.error ? "red" : "green"}
      {...style.alertStyle}
      status={status}
    >
      {status === currentLangData.app.success ? (
        <AlertIcon />
      ) : (
        <AiFillInfoCircle size={22} />
      )}
      <AlertTitle>{message}</AlertTitle>
      <CloseButton onClick={onClick} {...style.closeButton} />
    </Alert>
  );
};
export default AlertMessage;
