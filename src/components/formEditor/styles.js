import React from "react";
import theme from "../../config/color";

const styles = {
  main: {
    padding: 5,
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "white",
  },
  tab1Btn: {
    width: "100px",
    marginRight: 10,
    borderRadius: 10,
    // backgroundColor: theme.customColors.masterpanelColors[100],
  },
  tab2Btn: {
    width: "100px",
    marginRight: 10,
    borderRadius: 10,
    // backgroundColor: "red",
  },
  tab3Btn: {
    width: "100px",
    borderRadius: 10,
    // backgroundColor: "blue",
  },
  buttonContainer: {
    marginY: 1,
  },
  tabButton: {
    size: "sm",
    marginX: 2,
    marginY: 2,
    width: "80px",
  },
  multiFlex: {
    marginY: 2,
    paddingLeft: 4,
    justifyContent: "space-between",
  },
  ppLabel: {
    marginLeft: 3,
    fontWeight: "bold",
  },
  exportButton: {
    size: "sm",
    backgroundColor: "#60c9ca",
    color: theme.customColors.white[100],
  },

  // Content Styles//

  mainFlex: {
    paddingX: 2,
    height: "100%",
    // backgroundColor: "blackAlpha.100",
    flexDirection: "column",
    backgroundColor: "white",
  },
  clientMainFlex: {
    width: "100%",
    height: "18vh",
    flexDirection: "column",
    justifyContent: "center",
    // borderBottomWidth: 4,
    backgroundColor: "white",
  },
  clientListHeadingList: {
    paddingY: 1,
    alignItems: "center",
  },
  txtClientlist: {
    fontWeight: "bold",
    fontSize: "13px",
    paddingStart: 3,
  },
  btnAddForm: {
    color: "white",
    height: "30px",
    marginLeft: "5",
    title: "Add New Form",
    backgroundColor: theme.customColors.masterpanelColors[100],
  },
  searchFlex: {
    paddingY: 5,
    paddingStart: 2,
    fontSize: "xs",
    alignItems: "center",
  },
  btnSearch: {
    color: "white",
    title: "Search",
    height: "30px",
    marginLeft: "5",
    backgroundColor: theme.customColors.masterpanelColors[100],
  },

  rightContainer: {
    margin: 2,
    padding: 2,
    height: "100%",
    borderRadius: 3,
    boxShadow: "lg",
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  menuContainer: {
    padding: 3,
    justifyContent: "space-between",
  },
  rnButton: {
    w: "50%",
    size: "sm",
    paddingX: 10,
    marginRight: 3,
  },
  saveMenu: {
    w: "50%",
    size: "sm",
    paddingX: 10,
  },
  autherContainer: {
    padding: 3,
    flexDirection: "column",
  },
  commonFlex: {
    padding: 3,
  },
  tagContainer: {
    w: "100%",
    flexDirection: "column",
  },
  tagLabel: {
    fontSize: 15,
  },
  menuButton: {
    w: "100%",
    size: "sm",
    color: theme.customColors.black[100],
    backgroundColor: theme.customColors.gray[1001],
  },
  dateBox: {
    marginX: 3,
    width: "130px",
  },
  dateLabel: {
    fontSize: 13,
  },
  switcContainer: {
    spacing: 7,
    columns: 2,
    direction: "row",
    justifyContent: "space-between",
  },
  switchLabel: {
    width: "120px",
    fontSize: "sm",
  },
  switch: {
    left: 20,
    size: "md",
    colorScheme: "teal",
  },

  innnerBox: {
    // marginY: 2,
    // paddingX: 4,
    height: "50%",
    width: "100%",
    borderRadius: 10,
    // backgroundColor: theme.customColors.white[100],
  },
  inner2: {
    padding: 2,
    width: "34%",
    height: "100%",
    flexDirection: "column",
    // justify: "space-between",
  },
  buttonFlex: {
    marginX: 1,
    cursor: "pointer",
  },
  dropZoneContainer: {
    padding: 2,
    width: "40%",
    borderWidth: 2,
    borderRadius: 6,
    alignItems: "center",
    borderStyle: "dashed",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  captionInput: {
    w: "50%",
    marginY: 2,
    fontWeight: "bold",
    backgroundColor: theme.customColors.white[100],
  },
  imageLabel: {
    fontWeight: "bold",
  },
  captionInput: {
    w: "50%",
    marginY: 2,
    fontWeight: "bold",
    backgroundColor: theme.customColors.white[100],
  },
  button: {
    size: 18,
  },
  blockFlex: {
    padding: 5,
    flexDirection: "column",
    backgroundColor: "white",
  },
  txtBlock: {
    paddingY: 3,
    fontWeight: "bold",
    marginTop: -3,
    fontSize: "13px",
  },
  txtText: {
    fontSize: "12px",
    marginBottom: 2,
    fontWeight: "bold",
  },
  btnAddItem: {
    marginY: 5,
    color: "white",
    width: "20%",
    backgroundColor: theme.customColors.masterpanelColors[100],
  },
  txtName: {
    color: "black",
    marginTop: "2",
    color: theme.customColors.masterpanelColors[100],
  },
  iconStyle: {
    size: "40px",
    fontSize: "14px",
    color: theme.customColors.masterpanelColors[100],
  },
  firstMainFlex: {
    padding: 5,
    marginBottom: 3,
    flexDirection: "column",
    backgroundColor: "blackAlpha.100",
  },
  secondMainFlex: {
    padding: 5,
    flexDirection: "column",
    backgroundColor: "blackAlpha.100",
  },
  thirdMainFlex: {
    padding: 5,
    marginTop: 3,
    flexDirection: "column",
    backgroundColor: "blackAlpha.100",
  },
  txtAddItem: {
    marginY: 2,
    fontSize: "sm",
    fontWeight: "bold",
  },
  // Add block //
  modalMain: {
    size: "3xl",
    padding: 5,
    backgroundColor: "red",
  },
  columnFlexOne: {
    flex: 1,
    flexDirection: "column",
  },
  flexOne: {
    flex: 1,
  },
  flexColumn: {
    alignItems: "center",
    flexDirection: "column",
  },
  flexModalBody: {
    paddingBottom: 5,
    backgroundColor: "#EFEFF3",
  },
  paddingFive: {
    padding: 3,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  boxWidth: {
    p: 4,
    w: "130px",
    height: "80px",
  },
  boxWidthBack: {
    p: 4,
    w: "130px",
    height: "80px",
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  containerFlex: {
    marginLeft: 5,
    alignItems: "center",
    flexDirection: "column",
  },
  grayFlex: {
    padding: 3,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  flexForPadding: {
    padding: 2,
    paddingBottom: 5,
    backgroundColor: "#EFEFF3",
  },
  boxYellow: {
    w: "130px",
    height: "73px",
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  mainBackgroundFlex: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  backgroundImageFlex: {
    width: "100%",
    height: "100%",
    marginRight: 2,
    flexDirection: "column",
  },
  txtBackgroundImage: {
    marginY: 2,
    fontSize: "sm",
  },
  flexRadioGroup: {
    padding: 3,
    borderWidth: 2,
    width: "100%",
    backgroundColor: "blackAlpha.100",
  },
  radioCircle: {
    colorScheme: "#3CB1AD",
    backgroundColor: "#3CB1AD",
  },
  radioCircle2: {
    colorScheme: "red",
    backgroundColor: "darkred",
  },
  mainBackgroundColorFlex: {
    flexDirection: "column",
    alignItems: "start",
    width: "100%",
    marginLeft: 2,
  },
  flexBackColor: {
    flex: 1,
    alignItems: "left",
  },
  txtBackgroundColorTxt: {
    marginY: 2,
    fontSize: "sm",
    textAlign: "start",
    alignItems: "left",
  },
  showColorFlex: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "blackAlpha.100",
  },
  centeredAlign: {
    alignItems: "center",
  },
  txtColorInput: {
    width: "40%",
    fontSize: "xs",
    borderWidth: 2,
    fontWeight: "bold",
    textAlign: "center",
  },
  circleI: {
    size: 6,
    marginLeft: 4,
  },
  txtTransparent: {
    fontSize: "xs",
    marginLeft: 4,
    cursor: "pointer",
  },
  centeredJustify: {
    flex: 1,
    justifyContent: "center",
  },
  flexJustify: {
    flex: 1,
    justifyContent: "space-between",
  },
  flexMargin: {
    marginRight: 2,
    flexDirection: "column",
  },
  txtMargin: {
    marginY: 2,
    fontSize: "sm",
  },
  paddingMainFlex: {
    marginLeft: 2,
    flexDirection: "column",
  },
  flexTxtForPadding: {
    flex: 1,
    alignItems: "left",
  },
  txtPaddingHeading: {
    marginY: 2,
    fontSize: "sm",
    textAlign: "start",
    alignItems: "left",
  },
  btnAddBlock: {
    color: "white",
    fontSize: "sm",
    variant: "ghost",
    backgroundColor: theme.customColors.masterpanelColors[100],
  },

  // Add Items //

  mainFlexContainer: {
    marginY: 10,
    width: "100%",
    height: "100%",
    borderTopWidth: 2,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  boxPadding: {
    marginTop: 5,
    flexDirection: "column",
  },
  txtContainer: {
    marginStart: 14,
    marginY: 2,
  },
  flexForGap: {
    padding: 3,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  boxYellowContainer: {
    width: "65px",
    height: "70px",
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  boxYellow3Columns: {
    width: "40px",
    height: "70px",
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  boxYellow4Columns: {
    width: "34px",
    height: "70px",
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  twoRatioOne: {
    width: "80px",
    height: "64px",
    marginRight: 0.5,
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  oneRatioTwo: {
    width: "48px",
    height: "64px",
    marginLeft: 0.5,
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  twoRatioOneOne: {
    width: "68px",
    height: "64px",
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  oneRatioTwoOne: {
    width: "30px",
    height: "64px",
    marginLeft: 0.5,
    backgroundColor: theme.customColors.masterpanelColors[200],
  },
  mainFlexOf4Columns: {
    padding: 3,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  marginRightLeft: {
    marginLeft: 0.5,
    marginRight: 0.5,
  },
  marginingRight: {
    marginRight: 0.5,
  },
  marginingLeft: {
    marginLeft: 0.5,
  },
  txtExtraSmall: {
    fontSize: "xs",
  },
  formMainFlex: {
    padding: 3,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  marginCentered: {
    marginY: 5,
    justifyContent: "center",
  },
  btnGroup: {
    size: "xs",
    padding: 2,
    spacing: "6",
    color: "white",
    variant: "outline",
    height:"40px",
    width:"100px"
  },
};
export default styles;
