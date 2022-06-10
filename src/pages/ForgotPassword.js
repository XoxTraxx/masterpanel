import React from "react";
import TraxImage from "../components/image/Trax-background-06.png";
import x from "../components/image/x.png";
import AntChain from "../components/image/AntChain.png";
import { LockIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import LanguageContext from "../context/languageContext";
import { emailRegex } from "../constants/regex";
import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  Image,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import ApiManager from "../config/apiManager";

const ForgotPassword = (props) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState("");
  const { currentLangData } = React.useContext(LanguageContext);
  const apiManager = ApiManager.getInstance();

  const validateEmail = (e) => {
    // setEmail(e);
    if (email === "") {
      setError(currentLangData.app.emailRequired);
      return false;
    }
    if (!emailRegex.test(email)) {
      setError(currentLangData.app.validEmail);
      return false;
    } else {
      setError(currentLangData.app.emailHasBeenSent);
    }
    return true;
  };

  const store = () => {
    const isValid = validateEmail();
    if (isValid) {
      setLoading();
      const body = {
        email: email,
      };
      console.log(email, "email");
      // let storage = { email };
      apiManager
        .post("forgetPassword", body)
        .then((response) => {
          console.log(response, "response");
          if (response.message === 5011) {
          }
        })
        .catch((error) => {
          console.log(error);
        });

    }
  };
  return (
    <Flex {...style.main}>
      <Flex {...style.logo}>
        <Text
          {...style.logotext}
          fontSize={{ base: "34px", md: "24px", lg: "42px" }}
        >
          TRA
        </Text>
        <Image src={x} height={["60px", "50px", "30px", "60px"]} />
      </Flex>
      <Flex {...style.mainOne}>
        <Icon as={LockIcon} {...style.lockicon} />
        <Text {...style.title}>{currentLangData.app.forgotPassword}</Text>
        <Box {...style.form}>
          <form data-testid={"login-form"}>
            <Text>{currentLangData.app.email} :</Text>
            <InputGroup>
              <Input
                name="email"
                data-testid={"testEmail"}
                href={props.email}
                role={"testEmail"}
                value={email}
                marginBottom={2}
                variant="filled"
                placeholder={"Enter Email "}
                mt={3}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            
            <Flex justifyContent={"center"} mt={6}>
              <Button
                {...style.button}
                isLoading={loading}
                onClick={() => store()}
                data-testid={"testBtnSubmit"}
                type={"button"}
                role={props.submitBtn}
                colorScheme="red"
                rightIcon={
                  <ArrowForwardIcon color={"black"} alignSelf={"right"} />
                }
              >
                <Text color={"black"}>{currentLangData.app.submit}</Text>
              </Button>
            </Flex>
            <Text {...style.errormsg}>{error}</Text>
          </form>
        </Box>
      </Flex>
      <Flex justifyContent={"center"}>
        <Text color="white">{currentLangData.app.poweredby}</Text>
        <Image
          marginX="5"
          objectFit="fit"
          opacity={50}
          height="50px"
          src={AntChain}
        />
        <Text fontSize="26px" fontWeight="bold" color="white" marginLeft="-3">
          {currentLangData.app.antchain}
        </Text>
      </Flex>
    </Flex>
  );
};
const style = {
  main: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${TraxImage})`,
  },
  mainOne: {
    d: "flex",
    flexDirection: "column",
    height: "500px",
    width: "390px",
    bgColor: "#E0E0E0",
    borderRadius: "10",
    marginTop: "30px",
    alignSelf: "center",
  },
  logo: {
    justifyContent: "center",
    width: "100%",
  },
  lockicon: {
    height: 20,
    width: 20,
    alignSelf: "center",
    marginTop: "10",
    color: "#da1c18",
  },
  title: {
    mt: "5",
    fontWeight: "bolder",
    fontSize: "20",
    noOfLines: "2",
    alignSelf: "center",
  },
  form: {
    bgColor: "white",
    borderRadius: "10",
    margin: "5",
    paddingY: "10",
    fontWeight: "bold",
    paddingX: "6",
  },
  logotext: {
    color: "#70c5c4",
    fontWeight: "bold",
  },
  errormsg: {
    fontSize:"xs",
    mt:"8",
    color:"red",
    borderRadius:"6",
    // maxW:"250px",
    width:"fit-Content",
    alignSelf:"center",
  },
  button: {
    w: "50%",
    alignSelf: "center",
    borderRadius: "8",
  },
};
export default ForgotPassword;
