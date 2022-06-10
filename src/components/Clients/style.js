import theme from "../../config/color";
const style = {
  heading: {
    fontSize: "sm",
    fontWeight: "900",
    // color: theme.customColors.gray[800],
  },
  mainContainer: {
    p: 4,
    minW: "100%",
    height: "45vh",
    boxShadow: "lg",
    overflowY: "scroll",
    marginY: 2,
    borderRadius: 10,
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  detailContainer: {
    paddingY: 1,
    marginY: 2,
    paddingBottom: 3,
    borderRadius: 10,
    height: "45vh",
    overflowY: "scroll",
    borderColor: theme.customColors.bgColors[600],
  },
  depLabel: {
    // fontWeight: "bold",
    fontSize: 15,
    paddingTop: 3,
  },
  unit: {
    fontSize: 20,
  },
  circleContainer: {
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.customColors.gray[900],
  },
  centerDetailContainer: {
    marginTop: 5,
    flexDirection: "column",
  },
  priceLabe: {
    fontSize: 25,
    fontWeight: "bold",
  },
  amount: {
    // fontWeight: "semibold",
  },
  midContainer: {
    paddingY: 1,
    borderTopWidth: 1,
    fontWeight: "semibold",
    borderColor: theme.customColors.gray[900],
    color: theme.customColors.bgColors[700],
  },
  arrowIcon: {
    size: 22,
  },
  detailInnerContainer: {
    marginY: 4,
    alignItems: "flex-end",
    minChildWidth: "120px",
  },
  midLabelContainer: {
    paddingY: 1,
  },
  chart: {
    width: "100%",
    height: "240px",
  },
  dollarLabel: {
    fontWeight: "bold",
  },
  productDetailContainer: {
    padding: 5,
    width: "100%",
    borderWidth: 1,
    marginTop: 3,
    borderRadius: 4,
    marginBottom: 2,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  industryDetailContainer: {
    padding: 2,
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  productDetailInnerContainer: {
    marginTop: 2,
    marginBottom: 1,
    justifyContent: "space-between",
  },
  productContainer: {
    height: "20vh",
    overflowY: "scroll",
    flexDirection: "column",
  },
  prodcutName: {
    noOfLines: 1,
    width: "200px",
  },
  qrCode: {
    width: "30px",
    height: "30px",
  },
  phaseDetailContainer: {
    padding: 2,
    borderRadius: 7,
    borderWidth: 1,
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  phaseFlex: {
    marginY: 1,
    padding: 2,
    boxShadow: "md",
    borderRadius: 10,
  },
  multiFlex: {
    marginY: 2,
    justifyContent: "space-between",
  },
  notificatinContainer: {
    marginX: 2,
  },
  itopFlex: {
    justifyContent: "space-between",
  },
  ppLabel: {
    marginLeft: 3,
    fontWeight: "bold",
  },
  productDetailLabe: {
    width: "170px",
    fontWeight: "bold",
  },
  exportButton: {
    size: "sm",
    backgroundColor: "#60c9ca",
    color: theme.customColors.white[100],
  },
  industryFlex: {
    marginY: 1,
    paddingY: 2,
    paddingX: 2,
    width: "100%",
    borderRadius: 5,
    backgroundColor: theme.customColors.gray[1000],
  },
  midContainer: {
    padding: 2,
    marginTop: 2,
    color: "#60c9ca",
    cursor: "pointer",
    borderTopWidth: 1,
  },
  title: {
    fontWeight: "bold",
  },
  phaseLabel: {
    color: theme.customColors.gray[100],
  },
  desLabel: {
    paddingTop: 2,
  },
  hilalStatus: {
    color: theme.customColors.gray[1000],
  },
  mainFlex: {
    padding: 2,
    width: "100%",

    flexDirection: "column",
  },
  factoryLabel: {
    marginTop: 3,
  },
  bottomGrid: {
    height: "30vh",
    overflowY: "scroll",
    spacing: 3,
    columns: 2,
    marginTop: 2,
    minChildWidth: "250px",
  },
  clientInfoMainContainer: {
    padding: 5,
    columns: 1,
    width: "70%",
    minWidth: "300px",
    borderRadius: 3,
    backgroundColor: theme.customColors.white[100],
  },
  cinfoTopflex: {
    padding: 3,
    flexDirection: "column",
  },
  buttonContainer: {
    marginY: 5,
  },
  tabButton: {
    size: "sm",
    marginX: 2,
    marginY: 2,
  },
  traxPlanInnerContainer: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    boxShadow: "dark-lg",
    backgroundColor: theme.customColors.gray[1000],
  },
};
export default style;
