import React from "react";
import theme from "../config/color";
import LanguageContext from "../context/languageContext";
import {
  Text,
  Input,
  Flex,
  Avatar,
  Center,
  Button,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import { AlertMessage } from "../components/Alert";
import ApiManager from "../config/apiManager";
import { emailRegex } from "../constants/regex";
import TraxLogo from "../components/traxLogo";
import hero_banner from "../components/image/HomeIcons/hero_banner-2.svg";
import TraxImage from "../components/image/Trax-background-06.png";


const ForgotPassword = () => {
  const [error, setError] = React.useState("");
  const [email, setemail] = React.useState("");
  const apiManager = ApiManager.getInstance();
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LanguageContext);

  const validateEmail = (e) => {
    setemail(e);
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setError("Valid Email is required");
    } else {
      setError("");
    }
    return false;
  };

  const forgotPassword = () => {
    setLoading(true);
    const body = {
      email: email,
      newPassword: "",
    };

    apiManager
      .post("forgetPassword", body)
      .then((res) => {
        if (res.message === 5011) {
          setLoading(false);
          setMessage(`${currentLangData.app.emailHasBeenSent}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex
      style={{
        display: "flex",
        height: "120vh",
        //   padding: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${TraxImage})`,
      }}
      flexDirection={"column"}
      // justifyContent={"center"}
    >
      <Flex>
        <Flex height={"20vh"}backgroundColor={"black"}color={"black"}>asd</Flex>
      <Container
        borderWidth={1}
        boxShadow={"lg"}
        borderLeftWidth={5}
        borderRightWidth={5}
        style={styles.container}
      >
        <Center style={{ flexDirection: "column" }}>
          <TraxLogo />
          <Avatar
            size="xl"
            boxShadow={"lg"}
            src="white://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnOiyxQ_kbSe3bjiMcXGwnUrKnmygXC7U0g&usqp=CAU"
          />
          <Text style={styles.resetPasswordLabel} fontSize={isMobile ? 20 : 25}>
            {currentLangData.app.resetLabel}
          </Text>
          <Input
            onChange={(e) => validateEmail(e.target.value)}
            style={styles.input}
            placeholder={currentLangData.app.mailLabel}
          />
          <Text style={styles.errorLabel}>{error}</Text>
          <Button
            w="90%"
            isLoading={loading}
            onClick={() => forgotPassword()}
            bgColor={theme.customColors.bgColors[300]}
          >
            <Text style={styles.ButtonLabel}>
              {currentLangData.app.resetPassword}
            </Text>
          </Button>
        </Center>

        {message ? (
          <Center>
            <AlertMessage
              onClick={() => setMessage(null)}
              status={"success"}
              message={message}
            ></AlertMessage>
          </Center>
        ) : null}
      </Container>
      </Flex>
    </Flex>
  );
};

const styles = {
  container: {
    padding: 50,
    marginTop: 50,
    alignItems: 'center',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },

  resetPasswordLabel: {
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },

  ButtonLabel: {
    color: "white",
  },

  input: {
    width: "90%",
    marginBottom: 10,
  },

  errorLabel: {
    padding: 10,
    fontWeight: "bold",
    color: theme.customColors.errorColor[100],
  },
};

export default ForgotPassword;
