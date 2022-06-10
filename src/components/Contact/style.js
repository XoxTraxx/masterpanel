import contactBg from "../../components/image/contactBg.png";

const style = {
  mainContainer: {
    padding: 30,
    height: "50vh",
    backgroundImage: `url(${contactBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  getStartedText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    margin: 6,
    width: "150px",
    backgroundColor: "red",
  },
  moreInfoLabel: {
    my: 3,
    fontSize: 14,
  },
  circle: {
    zIndex: 999,
    height: "90px",
    width: "90px",
    marginLeft: -5,
    color: "white",
    borderWidth: 5,
    boxShadow: "lg",
    borderRadius: "50%",
    borderColor: "white",
    alignItems: "center",
    position: "relative",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  wattsupButton: {
    mt: 3,
    paddingY: 5,
    height:  "70px",
    width: ['100px' ,'150px', "250px",],
    alignItems: "center",
    borderLeftRadius: 10,
    position: "relative",
    backgroundColor: "red",
    justifyContent: "center",
  },
  circleInner: {
    paddingTop: 30,
    fontWeight: "bold",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  emailButton: {
    mt: 3,
    paddingY: 5,
    paddingX: 12,
    height: "70px",
    width: ['150px' ,'150px', "250px",],
    marginLeft:  -5 ,
    position: "relative",
    flexDirection: "row",
    borderRightRadius: 10,
    backgroundColor: "#64c7c8",
  },
  emailLabel: {
    p: 1,
    color: "white",
    paddingLeft: 10,
    fontSize:[12,12,15],
    fontWeight: "bold",
  },
  socialButton: {
    size: 30,
    color: "white",
  },
  wattsapLabel: {
    ml: 10,
    color: "white",
    fontSize:[12,12,15],
    fontWeight: "bold",
  },
};
export default style;
