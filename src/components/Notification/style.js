import theme from "../../config/color";
const style = {
  mainContainer: {
    
    borderRadius: 5,
    padding: "12px",
    minWidth: "300px",
    flexDirection: "column",
    backgroundColor: theme.customColors.common[100],
  },
  topContainer: {
    w: "100%",
    paddingX: 2,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  notificationContaier: {
    w: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  notificationMainContaier: {
    paddingX: 2,
    marginTop: 3,
    paddingY: 2,
    width: "100%",
    borderBottomWidth: 2,
    flexDirection: "column",
  },
  notificatLabel: {
    fontWeight: "bold",
  },
  seeAllLabel: {
    color: "#60c9ca",
    cursor: "pointer",
    fontWeight: "semibold",
  },
  nTopContainer: {
    height:'50vh',
    overflowY:'scroll',
    marginY: 3,
    width: "100%",
    flexDirection: "column",
  },
  cLabel:{
    fontSize:12,
    fontWeight:'semibold'
  },
  dateLabel:{
    fontSize:12,
   color: theme.customColors.bgColors[800],
  }
};
export default style;
