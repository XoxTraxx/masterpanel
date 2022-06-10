import beverage from "../../components/image/tracibilty.svg";

const style = {
  beveragesMainDiv: {
    bg: "rgb(250,250,250)",
    paddingY: [10, 10, 20],
    flexDirection: "column",
    // height: ["75vh", "75vh", "80vh"],
  },
  foodLabel: {
    fontWeight: "bold",
    fontSize: [15, 15, 20, 25],
  },
  divider: {
    height: 1,
    width: "150px",
    margin: [6, 6, 7],
    backgroundColor: "red",
  },
  beveragesDes: {
    w: "60%",
    textAlign: "center",
    marginTop: [5, 5, 10],
    fontSize: [10, 10, 14],
  },
  frameWorkLabel: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: [15, 15, 20, 25],
  },
  tracibilityContainer: {
    height: "80vh",
    alignItems:'center',
    justifyContent:'center',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${beverage})`,
  },
  tracibilityImage:{
    height:'60%',
    width:['90%','90%','100%'],
  }
  
};
export default style;
