import phone from "../../components/image/phone.svg";

const style = {
  mainContainer: {
    // height: "70vh",
    borderBottomWidth:2,
    // padding:20,
    borderBottomColor:'lightgray',
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundImage: `url(${phone})`,
  },
  gridContainer: {
    spacing: 10,
    columns: 3,
  },
  divider: {
    height: 1,
    bg: "red",
    w: "150px",
    marginY: 5,
    paddingX: 20,
  },
  secureLabel: {
    fontSize: 22,
    fontWeight: "bold",
  },
  leftContainer: {
    padding: 20,
    flexDirection: "column",
  },
  solutionLabel: {
    fontSize: 12,
    w: "300px",
  },
  phoneImage: {
    mt:20,
     h: "100%",
    w:'100%',
    alignSelf: "flex-end",
  },
  rightContainer: {
    ml:-10,
    paddingBottom:10,
    alignSelf: "flex-end",
    flexDirection: "column",
  },
};
export default style;
