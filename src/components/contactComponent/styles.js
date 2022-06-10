import theme from "../../config/color";
import { useMediaQuery } from "@chakra-ui/react";
// const [isMobile] = useMediaQuery("(max-width: 768px)");

const style = {
  centeredNColumned: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  mainFlex: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  mapFlex: {
    width: "100%",
    height: "280px",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blackAlpha.100",
    // backgroundColor: "red",
  },
  contactFlex: {
    width: "100%",
    height: "280px",
    alignItems: "center",
    justifyContent: "center",
  },
  btnSend: {
    width: "40%",
    marginTop: 14,
    title: "Send Message",
    backgroundColor: "red",
  },
  txtSend: {
    color: "white",
    fontSize: "sm",
  },
  contactFields: {
    marginLeft: 5,
    flexDirection: "column",
  },
  ourEco: {
    marginTop: 8,
    fontWeight: "bold",
  },
  redLine: {
    width: 20,
    marginY: 2,
    borderWidth: 2,
    marginBottom: 4,
    borderColor: "red",
  },
  flexTrax: {
    marginY: 10,
    flexDirection: "column",
  },
  traxFlexDetails: {
    marginBottom: 6,
    textAlign: "center",
  },
  traxFlexDetails2: {
    marginTop: 6,
    textAlign: "center",
  },
  traxComponentText: {
    width: "50%",
    // backgroundColor: "red",
  },
  redFlex: {
    marginY: 20,
    width: "100%",
    height: "450px",
    justifyContent: "center",
    flexDirection: "column",
  },
  flexSecond: {
    marginY: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addressFlex: {
    width: "100%",
    fontSize: "13px",
    alignItems: "center",
    justifyContent: "center",
    minChildWidth: "200px",
  },
  mapBox: {
    flex: "1.8",
    height: "41vh",
    paddingStart: 1,
  },
  errorMsg: {
    color: "red",
    // marginTop: 1,
    fontSize: "14px",
    boxShadow: "sm",
    fontWeight: "bold",
    textAlign: "center",
  },
};
export default style;
