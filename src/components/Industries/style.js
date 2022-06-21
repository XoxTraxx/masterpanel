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
    height:'50vh',
    borderRadius: 10,
    flexDirection: "column",
    backgroundColor: "white",
  },
  detailContainer: {
    paddingY: 1,
    marginY: 2,
    paddingBottom: 3,
    borderRadius: 10,
    height:'45vh',
    borderColor: theme.customColors.bgColors[600],
  },
 
  depLabel2: {
    // fontWeight: "bold",
    fontSize:15,
    marginTop:6,
  },
  unit: {
    fontSize: 20,
  },
  circleContainer:{
    borderRadius:'50%',
     alignItems:'center', 
     justifyContent:'center',
      flexDirection:'column',
      backgroundColor:theme.customColors.gray[900]
  },
  centerDetailContainer:{
    marginTop:5,
    flexDirection:'column', 
  },
  priceLabe: {
    fontSize: 25,
    fontWeight: "bold",
  },
  amount: {
    // fontWeight: "semibold",
  },
  midContainer: {
    paddingY:1,
    borderTopWidth:1,
    fontWeight:'semibold',
    borderColor:theme.customColors.gray[900],
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
  midLabelContainer:{
    paddingY:1
  },
  chart:{
    width:"100%",
    height:"200px",
  },
  dollarLabel:{
   fontWeight:'bold'
  },
  mainContainerBottom: {
    p: 4,
    marginY:2,
    minW: "100%",
    height:'45vh',
    boxShadow:'lg',
    borderRadius: 10,
    flexDirection: "column",
    backgroundColor: "white",
  },
  pieChartContainer: {
    paddingY: 1,
    marginY: 1,
    paddingBottom: 3,
    borderRadius: 10,
    height:'45vh',
    overFlowY:'scroll',
    borderColor: theme.customColors.bgColors[600],
  },
  pieChart:{
    width:"100%",
    height:"175px",
  },
  industryPieChart:{
    width:"90%",
    height:"300px",
  },
  allIndutriesMain:{
    width: "90%", 
    // minChildWidth:"100%",
    borderRadius:10,
    backgroundColor:  theme.customColors.white[100],
  },
  productyVisedIndustriesBox:{
    width: "100%", 
    minChildWidth:"100%",
    borderRadius:10,
    backgroundColor:  theme.customColors.white[100],
  },
  allIndutriesInnerContainer:{
    padding: 5,
    paddingY:6,
    width: "80%",
    flexDirection: "column",
    backgroundColor:theme.customColors.white[100],
  },
  backButton:{
    paddingX:10,
     size:"sm", 
     marginLeft:2,
     color:theme.customColors.white[100],
     bgColor:"#5a9391"
  },
  comparedText:{
  paddingY:5,
  marginLeft:2,  
  fontSize:'md',
  fontWeight:'bold',

  },
  yearMenuFlex:{
    paddingX:2
  },
  progressBar:{
    height:"30px",
    borderRadius:1,
    labelSize:'12px',
    labelAlignment:"left",
    baseBgColor:theme.customColors.white[100]
  },
  agriCultureLabel:{
    paddingBottom:4,
    fontWeight:'bold',
  },
  progressContainer:{
    paddingX:3,
    marginY:10,  
    width: "100%",
    borderTopWidth: 1,
  },
  industriesLabel:{
    paddinY:1
  },
  progressInnerContainer:{
    marginTop: "10px", 
    flexDirection: "row" 

  },
  agriCultralContainer:{
    marginX:2,
    padding:3,
    paddingY:20,
    marginTop:3,
    paddingX:35,
    borderRadius:10,           
    flexDirection:"column",
                
  },
  scrollViewContainer:{
    height:"100px",
    overflowX:"scroll",
  },

  industriesComparison:{
    marginX:2,
    padding:3,
    paddingY:23,
    marginTop:3,
    paddingX:5,
    borderWidth:1,
    borderRadius:10,  
    borderWidth:1,
    flexDirection:"column",
    borderColor:theme.customColors.gray[100],    
                
  },
  industryLabel:{
    fontSize:14,
    fontWeight:"bold", 
  },
  menuButton:{
    marginTop:2,
    fontSize:'12px',
    fontWeight:"md",
  },
  scrollViewContainer2:{
    marginY:5,
    margiX:5,
    paddingX:6,
    height:"130px",
    overflowX:"scroll",
  },
  bottomContainer:{
    minW:"100%",
    borderTopWidth:1,
    flexDirection:'column',
  },
  downButton:{
    size:22
  },
  bottomlabelContainer:{
    padding:3, 
    flexDirection:'column'
  },
  overAllIndustryLabel:{
    fontSize:'large',
    fontWeight:'semibold',
  },
  depLabel:{
    fontSize:15,
    noOfLines:1,
    height:"50px",
    width:"150px",
  },
  valueLabel:{
    paddingTop:5, 
    // fontSize:'20px',
    fontWeight:"bold"
  },
  unitLabels:{
    fontSize:'10px',
    fontWeight: "normal"
  }
};

export default style;
