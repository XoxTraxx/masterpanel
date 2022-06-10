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
    marginY: 5,
  },
  tabButton: {
    size: "sm",
    marginX: 2,
    marginY: 2,
    width: "80px",
    fontSize: "10px",
  },
  multiFlex: {
    marginY: 2,
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
  multiFlex: {
    marginY: 2,
    justifyContent: "space-between",
  },
  mainFlex: {
    padding: 5,
    height: "300px",
    backgroundColor: "blue.100",
  },
  clientMainFlex: {
    width: "100%",
    height: "20vh",
    flexDirection: "column",
    justifyContent: "center",
    borderBottomWidth: 4,
    backgroundColor: "white",
  },
  clientListHeadingList: {
    padding: 5,
    alignItems: "center",
  },
  txtClientlist: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  btnAddForm: {
    color: "white",
    height: "30px",
    marginLeft: "5",
    title: "Add New Form",
    backgroundColor: theme.customColors.masterpanelColors[100],
  },
  searchFlex: {
    padding: 5,
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
};
export default styles;
