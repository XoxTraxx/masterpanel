import theme from "../../config/color";
const styles = {
  mainContainer: {
    flex: 1,
    padding: 5,
    paddingLeft: 20,
  },
  secondFlex: {
    flex: 1,
    paddingRight: 10,
    paddingTop: 16,
    background: "#ffffff",
  },
  formFlex: {
    flex: 3,
    padding: "5",
    background: "#fff",
    flexDirection: "column",
  },
  txtRegistered: {
    color: "black",
    fontSize: "xl",
    paddingBottom: 5,
    fontWeight: "bold",
  },
  mainFormFlex: {
    flex: 2,
    paddingX: 20,
    flexDirection: "column",
  },
  txtName: {
    color: "black",
    marginTop: "2",
  },
  txtIndustry: {
    color: "black",
  },
  simpleGridFlex: {
    columns: 2,
    spacing: 3,
  },
  firstGrid: {
    color: "black",
    height: "80px",
    // width:"100%",
  },
  userNamePasswordContainer: {
    flex: 1,
    paddingX: "5",
    color: "black",
    flexDirection: "column",
  },
  uploadCompany: {
    paddingY: 5,
    flexDirection: "column",
  },
  textIE: {
    paddingY: 5,
    fontSize: "10px",
  },
  uploadAttachments: {
    padding: 1,
    marginX: 10,
    borderWidth: 2,
    width: "150px",
    borderRadius: "20",
    maxWidth: "280px",
    alignItems: "center",
    borderColor: "gray",
    borderStyle: "dashed",
    justifyContent: "center",
    flexDirection: "column",
  },
  iconStyle: {
    size: "40px",
    color: "gray",
    fontSize: "14px",
  },
  btnContinue: {
    // size: "sm",
    // width: "300" / 2,
    // marginTop: "10",
    // alignSelf: "end",
    // backgroundColor: "#44546a",
    width: "300" / 2.2,
    height: "7",
    marginTop: "10",
    alignSelf: "end",
    backgroundColor: theme.customColors.masterpanelColors[100],
  },
  flexTextBold: {
    fontSize: "12px",
    fontWeight: "normal",
  },
  hideShowBtn: {
    size: "sm",
    marginX: "1",
    h: "1.5rem",
    marginTop: "5",
    colorScheme: "black",
    borderColor: "white",
    justifyContent: "center",
  },
  errorMsg: {
    color: "red",
    fontSize: "12px",
    boxShadow: "sm",
    textAlign: "center",
    fontWeight: "bold",
  },
  mandatoryStar: {
    color: "red",
    paddingRight: 2,
    fontWeight: "700",
    fontSize: "large",
  },
  passwordInput: {
    width: "100%",
    fontSize: "sm",
    variant: "filled",
    focusBorderColor: theme.customColors.masterpanelColors[100],
  },
};
export default styles;
