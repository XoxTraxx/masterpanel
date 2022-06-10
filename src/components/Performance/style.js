import theme from "../../config/color";
const style = {
  progressBar: {
    height: "25px",
    borderRadius: 1,
    labelSize: "12px",
    labelAlignment: "left",
    baseBgColor: theme.customColors.white[100],
  },
  progressInnerContainer: {
    marginTop: "10px",
    flexDirection: "row",
  },
  chartDataContainer:{
    minChildWidth:"300px",
    flexDirection:"column",
  },
  gridContainer:{
    minChildWidth:"250px"
  },
  bottomGrid: {
    spacing: 3,
    columns: 2,
    height: "40vh",
    overflowY: "scroll",
    minChildWidth: "300px",
  },
  lineChart: {
    height: "300px",
    width: "100%",
  },
  bottomContainer: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
  },
  industryPieChart: {
    width: "100%",
    height: "210px",
    fontSize:'10px',
    backgroundColor: "red",
  },
  midContainer: {
    paddingY: 1,
    marginTop: 2,
    cursor:"pointer",
    borderTopWidth: 1,
    fontWeight: "semibold",
    borderColor: theme.customColors.gray[900],
    color: theme.customColors.bgColors[700],
  },
};
export default style;
