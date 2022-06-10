import theme from "../../config/color";
const style = {
  mainConatiner: {
    paddingX: 6,
    paddingY: 3,
    width: "60%",
    borderRadius: 7,
    minWidth: "350px",
    bg: theme.customColors.white[100],
  },
  backButton: {
    size: "sm",
    marginY: 6,
    paddingX: 10,
    bgColor: "#5a9391",
    color: theme.customColors.white[100],
  },
  companyNameLabel: {
    fontSize: "lg",
    fonWeight: "2000",
  },
  salesLabel: {
    marginY: 5,
    fontSize: "lg",
    fonWeight: "bold",
  },
  dateMenuContainer: {
    marginRight: 2,
    margin: 2,
    w: "150px",
  },
  dateLabel: {
    fontSize: "sm",
  },

  buttonContainer: {
    width: "100%",
  },
  typeButton: {
    size: "sm",
    marginY: 2,
    marginRight: 2,
  },
  typeConatiner: {
    padding: 1,
    paddingX: 2,
    width: "100%",
    justifyContent: "space-between",
    bg: theme.customColors.gray[1001],
  },
  salesInnerContainer: {
    padding: 1,
    paddingX: 2,
    marginTop: 3,
    width: "100%",
    justifyContent: "space-between",
  },
  emptyBox: {
    height: "50px",
    width: "50px",
    borderRadius: 4,
    bg: theme.customColors.gray[1001],
  },
  typeTitle: {
    paddingX: 2,
    paddingY: 2,
  },
  typMapParentContaner: {
    paddingY: 5,
    height: "20vh",
    overflowY: "scroll",
  },
  searchButton: {
    marginTop: 5,
    bgColor: "#5a9391",
    color: theme.customColors.white[100],
  },
};
export default style;
