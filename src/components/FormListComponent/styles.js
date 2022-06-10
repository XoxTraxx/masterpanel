import React from "react";
import theme from "../../config/color";

const styles = {
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
    flexDirection:'column'
    // backgroundColor: "blue.100",
  },
  table:{
    border:"none",
    variant:"striped",
    colorScheme:"none",

  },
  tableHead:{
    backgroundColor:"rgb(246,246,250)"
  },
  tableRow:{
    borderColor:"white",
     borderWidth:"10px",
  },
  tdFlex:{
    flexDirection:"column"
  },
  previewLabel:{
    w:"60px",
    fontSize:"12px",
  },
  publishLabel:{
    ml:4,
    fontSize:"12px",
  },
  editLabel:{
    w:"60px",
    fontSize:"12px",
  },
  td2:{
    mr:4,
    flexDirection:"row",
  },
  deleteLabel:{
    ml:4,
    fontSize:"12px",
  },
  df3:{
    flexDirection:"row"
  },
  PaginateContainer: {
    justifyContent:"center",
    borderRadius:"10",
    marginBottom:"0",
  },
};
export default styles;
