import { useHistory, Link } from "react-router-dom";
import traxlogo from "../components/image/logo.png";
import x from "../components/image/x.png";
import AntChain from "../components/image/AntChain.png";
import { useState,  } from "react";
import theme from "../config/color";
import Styles from "../styles/login.module.css";
import React, { useContext ,useEffect} from "react";
// import Header from "../components/Header";
import firebaseApp from '../firebase'
import ApiManager from "../config/apiManager";
import LangContext from "../context/languageContext";
import {emailRegex} from '../constants/regex'
import { useAuthDispatch, useAuthState } from "../context/authContext";
import { LockIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import TraxImage from "../components/image/Trax-background-06.png";
import {
  Box,
  Flex,
  Text,
  Alert,
  Input,
  Image,
  Center,
  Button,
  Circle,
  Checkbox,
  AlertIcon,
  AlertTitle,
  InputGroup,
  extendTheme,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
} from "@chakra-ui/react";
// import Register from "./Register";

const apimanager = ApiManager.getInstance();
const Login = (props) => {
  const colors = {
    brand: {
      1000: "#000000",
      900: "#444487",
      800: "#153e75",
      700: "#2a69ac",
      600: "#dfdfe6",
      500: "#556ee6",
      400: "#fc030f",
      100: "#da1c18",
      200: "#74788D",
    },
  };
  const [fcmToken,setFcmToken]=React.useState()

  const [email, setEmail] = useState(undefined);

  const [loading, setload] = useState(false);
  const [hide, setHide] = useState(false);
  const [password, setPassword] = useState(undefined);
  const theme = extendTheme({ colors });
  // const router = useRouter();
  
  let history = useHistory();

  const [error, setError] = useState({
    emailError: "",
    passError: "",
  });

  const [err, setErr] = useState(null);
  // const textColor = useColorModeValue("black", "white");
  const dispatch = useAuthDispatch();
  const { currentLangData } = useContext(LangContext);

  // const re = /^[a-zA-Z.]\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const validate = () => {
    if (email === "" && password === "") {
      setErr(currentLangData.app.allRequired);
      return false;
    }
    if (email === "" && password !== "") {
      setErr(currentLangData.app.emailRequired);
      return false;
    }
    if (email !== "" && password === "") {
      setErr(currentLangData.app.passwordRequired);
      return false;
    }
    if (!emailRegex.test(email)) {
      setErr(currentLangData.app.validEmail);
      return false;
    }
    if (password?.length < 8) {
      setErr(currentLangData.app.validPass);
      return false;
    }
    setErr(null);
    return true;
  };

  // const getAllLanguages = (text) => {
  //   let forgetPassword = text;
  //   return forgetPassword;
  // };
  useEffect(async () => {
    const msg = firebaseApp.messaging();
    console.log()
   msg.getToken({ vapidKey: 'BLbszOZ-YI7x26zjVJ1mt5zMdt5tOh1pU0qzeF4bJu9PqGXCwpniV69zko_bm24Ad0s2hwgSbso7RrW5NGqPoCw' }).then((token)=>{
      console.log('login msg token', token)
      setFcmToken(token)
   }).catch(error=>console.log('firebaseError',error))

   msg.onMessage(response=>{
     console.log('response is',response)
   })
  }, []);
  const submitForm = async () => {
    const isValid = validate();
    if (isValid) {
      setload(true);
      // console.log("payload", {
      //   email,
      //   password,
      //   role: 1,
      // });

      apimanager
        .post("login", {
          email,
          password,
          role: 4,
          fcmToken:fcmToken
        })
        .then((response) => {
          console.log("response..", response);
          if (response.message === 6114) {
            setErr("User Not Found");
            setload(false);
          }

          if (response.message === 6181) {
            setErr("Password MisMatch");
            setload(false);
          }

          if (response.message === 5005) {
            let user = {
              token: response.token,
              email: response.email,
            };
            localStorage.setItem("user", JSON.stringify(user));
            apimanager._setToken(response.email, response.token);
            apimanager.get("getUser").then((res) => {
              console.log("name..", res?.user?.name);

              if (res?.user?.role === 3) {
                // setTimeout(() => {
                //   history.replace("/");
                //   window?.location?.reload();
                // }, 300);
              }

              if (res.message === 5021) {
                let userName = {
                  page: 1,
                  size: 10,
                  // name: res?.user?.name.toLowerCase(),
                  name: res?.user?.displayName,
                };

                console.log("userName", userName);

                // making apis object
                let apis = {};
                res.user.apis.forEach((api) => {
                  apis[api] = true;
                  return api;
                });
                res.user._apis = apis;
                // ------------------

                localStorage.setItem("currentUser", JSON.stringify(res.user));
                apimanager
                  .post("getAllMerchants", userName)
                  .then((merchantRes) => {
                    if (merchantRes.message === 6227) {
                      let singleMerchant = {};
                      if (merchantRes.data.data.length === 0) {
                        singleMerchant = res.user;
                      } else {
                        singleMerchant = res.user;
                      }
                      localStorage.setItem(
                        "currentMerchant",
                        JSON.stringify(singleMerchant)
                      );
                      dispatch("SET_MERCHANT", singleMerchant);
                      dispatch("AUTHENTICATED", res.user);
                      setTimeout(() => {
                        setload(false);
                        history.push("/");
                        window?.location?.reload();
                      }, 300);
                    }
                  })
                  .catch((error) => {
                    console.log("error", error);
                  });
              }
            });
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    }
  };

  const handleRemeberMe = (event) => {
    if (event.target.checked === true) {
      localStorage.setItem("loginInEmail", email);
      localStorage.setItem("loginInPassword", password);
    }
  };

  useEffect(() => {
    let loginUser = localStorage.getItem("loginInEmail");
    let loginPass = localStorage.getItem("loginInPassword");
    // let rememberPass = localStorage.getItem("remeberMe");

    // console.log("loginUser", rememberPass);
    setEmail(loginUser);
    setPassword(loginPass);
  }, []);

  if (!currentLangData) return null;
  return (
    <div className={Styles.container}
    style={{
      display: "flex",
      padding: "12px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${TraxImage})`,
      // backgroundColor: "black",
    }}>
      {/* <Header></Header> */}

      <Center
        flex={1}
        marginTop={5}
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        {/* <Image  style={style.imageLogo} src={traxlogo} /> */}
        <Flex p="1" marginTop={-1} flexDirection={"row"}>
          <Text
            marginTop={"3px"}
            color={"#70c5c4"}
            fontWeight={"bold"}
            marginRight={"2px"}
            // marginRight={[10, 0, 0]}
            fontSize={{ base: "34px", md: "24px", lg: "42px" }}
          >
            TRA
          </Text>
          <Image
            src={x}
            paddingBottom={[4, 2, 2]}
            height={["60px", "50px", "30px", "60px"]}
          />
        </Flex>
        <Box w={"390px"} borderRadius="lg" boxShadow="dark-lg" backgroundColor={"white"}>
          <Flex
            w={"100%"}
            paddingY={8}
            padding={10}
            flexDirection={"column"}
            backgroundColor={"black"}
            borderTopLeftRadius={"lg"}
            borderTopRightRadius={"lg"}
          >
            <Text data-testid={"testHeading"} color={"white"} fontWeight={"bold"}>
              {currentLangData.app.greetings}
            </Text>
            <Text paddingY={2} fontSize={"sm"} color={"white"}>
              {currentLangData.app.siginLabel}
            </Text>
            <Circle
              size="60px"
              p={2}
              marginBottom="-20%"
              background="#71C5C9"
              color="white"
            >
              <Image
                src={x}
                width="8"
                height="8"
                alignItems="center"
                justifyContent="center"
              />
            </Circle>
          </Flex>
          {/* <Center>
          <Text color={textColor} style={style.greetinsLabel}>
            {currentLangData.app.greetings}
          </Text>
        </Center> */}
          <Box
            marginY="5"
            paddingY={10}
            fontWeight="bold"
            paddingX={6}
            color={theme.colors.brand[1000]}
          >
            <Text>{currentLangData.app.Username}</Text>

            <form data-testid={"login-form"}>
              <InputGroup>
                <Input
                  data-testid={"testEmail"}
                  name="email"
                  href={props.email}
                  role={"testEmail"}
                  onChange={(event) => setEmail(event.target.value)}
                  marginBottom={2}
                  value={email}
                  placeholder={currentLangData.app.nameLabel}
                />
              </InputGroup>

              <Text style={style.errorLabel}>{error.emailError}</Text>
              <Text fontWeight="bold">{currentLangData.app.password}</Text>

              <InputGroup>
                <Input
                  data-testid={"testPassword"}
                  // type="password"
                  name="password"
                  href={props.password}
                  role={"testPassword"}
                  type={hide ? "text" : "password"}
                  onChange={(event) => setPassword(event.target.value)}
                  w="100%"
                  value={password}
                  placeholder={currentLangData.app.passLabel}
                />
              </InputGroup>

              <Flex marginTop={3}>
                <Checkbox
                  data-testid="testRememberMe"
                  type="checkbox"
                  name="rememberMe"
                  onChange={(event) => handleRemeberMe(event)}
                ></Checkbox>
                <Text fontWeight="bold" fontSize={"sm"} paddingX={2}>
                  {currentLangData.app.remember}
                </Text>
              </Flex>

              <Text data-testid={"testError"} style={style.errorLabel}>
                {error.passError}
              </Text>

              <Button
                data-testid={"testBtnSubmit"}
                w="100%"
                marginTop={5}
                type={"button"}
                isLoading={loading}
                alignSelf={"center"}
                role={props.submitBtn}
                onClick={() => submitForm()}
                bgColor={theme.colors.brand[100]}
                leftIcon={<ArrowForwardIcon color={"white"} />}
              >
                <Text color={"white"}>{currentLangData.app.login}</Text>
              </Button>
            </form>

            <Center flex={1} marginTop={5} flexDirection={"column"}>
              {/* <Link to="/Signup">
                <Flex paddingX={10}>
                  <Text fontSize="sm"> </Text>
                  <Text
                    paddingX={3}
                    fontSize="sm"
                    fontWeight="bold"
                    color={theme.colors.brand[100]}
                  >
                    {currentLangData.app.createAnAccount}
                  </Text>
                </Flex>
              </Link> */}
              <Link to="/ForgotPassword">
                <Flex paddingY={10} paddingTop="3">
                  <LockIcon color={theme.colors.brand[200]} marginTop={1}></LockIcon>
                  <Text fontSize="sm" paddingX={2}>
                    {currentLangData.app.forgotPassword}
                  </Text>
                </Flex>
              </Link>
            </Center>
            <div data-testid={"testAlert"}>
              {err ? (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle textColor={"red"} mr={2}>
                    <Text role={"errorText"}>{err}</Text>
                  </AlertTitle>
                </Alert>
              ) : null}
            </div>
          </Box>
        </Box>
        <Flex
          flex={1}
          // marginY="5"
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          marginBottom={16}
        >
          <Text color="white">{currentLangData.app.poweredby}</Text>
          <Image marginX="5" objectFit="fit" opacity={50} height="50px" src={AntChain} />
          <Text fontSize="26px" fontWeight="bold" color="white" marginLeft="-3">
            {currentLangData.app.antchain}
          </Text>
        </Flex>
      </Center>
    </div>
  );
};
export default Login;

const style = {
  greetinsLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageLogo: {
    width: "140px",
    height: "55px",
    marginBottom: 15,
  },
  errorLabel: {
    color: theme.customColors.errorColor[100],
  },
};
