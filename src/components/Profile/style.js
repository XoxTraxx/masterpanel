import theme from "../../config/color";
const style = {
  imageContainer: {
    marginX: 3,
    marginY: 5,
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: "center",
  },
  avatar: {
    size: "xl",
    marginTop: 12,
    marginBottom: 5,
  },
  simpleGridContainer: {
    columns: 2,
    flex: 1,
    borderWidth: 1,
    backgroundColor: "white",
    p: 4,
    paddingY: 8,
    borderRadius: 10,
    flexDirection: "coloumn",
    minChildWidth: "100%",
  },
  phoneInput: {
    width: "120px",
    height: "40px",
    fontSize: "10px",
  },
  phoneInput2: {
    width: "200px",
    marginLeft: 12,
  },
  formLabel: {
    width: "200px",
  },
  phoninputContainer: {
    width: "100px",
  },
  imageInput: {
    padding: 1,
  },
  saveButton: {
    marginTop: 5,
    bg: theme.customColors.bgColors[300],
    color: theme.customColors.common[100],
  },
  mainContainer2: {
    paddingX: 3,
    flexDirection: "column",
  },
  pavartar: {
    size: "lg",
  },
  desText: {
    color: "red",
    paddingBottom: "3px",
  },
  clText: {
    paddingTop: 2,
    color: "lightgray",
  },
  nameText: {
    color: "black",
    fonWiegth: "semibold",
  },
  desLabel: {
    color: "lightgray",
  },
  infoText: {
    color: "black",
    fontSize: 12,
    fontWiegth: "bold",
  },
  infoFlex: {
    borderRightWidth: 1,
    padding: 2,
    flexDirection: "column",
    borderColor: "lightgray",
  },
  detaillabel: {
    noOfLines: 1,
    color: "lightgray",
    fontSize: "small",
  },
  rightFlex: {
    padding: 2,
    flexDirection: "column",
  },
  fullProfileButton: {
    color: "white",

    bg: theme.customColors.bgColors[300],
  },
  buttonText: {
    paddingRight: 3,
  },
  centerContainer: {
    padding: 3,
    borderColor: "lightgray",
    borderWidth: 1,
    borderTopWidth: 0,
    flexDirection: "column",
  },
  svIcon: {
    size: 25,
  },
  traxPlanLabe: {
    fontSize: "lg",
    marginTop: 5,
    fontWeight: "semibold",
  },
  plansContainer:{
    
    borderRadius:4,
    width:'300px',
    flexDirection:'column',
    //backgroundColor:theme.customColors.gray[1000]

  },
  plansInnerContainer:{
    width: "100%",
    padding: 3,
    margin: 2,
    // borderWidth: 1,
    borderRadius: 5,
    boxShadow:'md',
    opacity:0.9,
    // backgroundColor:theme.customColors.gray[1000]
    // backgroundColor: theme.customColors.gray[1000],
  },
  profileDetail: {
    fontSize: 14,
    marginTop: 5,
    height:'20vh',
    w:'90%',
    overflowY:'scroll',
    fontWeight: "normal",
  },
  avatarBox:{
    w:'30%',
    padding:3, 
     backgroundColor:theme.customColors.gray[1000]
  },
  simpleProfileGrid:{
    marginLeft:2,
  },
  profileAvatar:{
    size:'lg'
  }

};

export default style;
