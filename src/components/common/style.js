import theme from "../../config/color";
const style = {
  mainContainer: {
    paddingY: 0,
    marginTop: 3,
    width: "100%",
    // background: "#539194",
    color: theme.customColors.common[100],
  },
  subMenuFlex: {
    paddingX: 16,
    paddingY: 1,
  },
  subTabMenu: {
    noOfLines: 1,
    fontSize: "md",
    width: "150px",
    marginLeft: 2,
    color:'white',
    fontWeight: "semibold",
  },
  mainFlex: {
    flex: 1,
    as: "nav",
    height: "100vh",
    flexDirection: "row",
  },
  innerContainer: {
    flex: 2,
    // paddingY: 6,
    marginTop: 1,
    backgroundColor: "#629093",
  },
  tabsContainer: {
    paddingY: 4,
    marginTop: 3,
    width: "100%",
    background: "#539194",
    color: theme.customColors.common[100],
  },
  bottomFlex: {
    flex: 8,
    padding: 2,
    backgroundColor: "#f6f6fa",
  },
  rightreservedlabel: {
    opacity: 10,
    fontSize: "lg",
    color: "rgba(255, 255, 255, 0.6)",
    color: theme.customColors.common[0],
  },
  tabContainer: {
    color:'white',
    paddingX: 8,
    paddingY: 2,
  },
  backgroundColorContianer: {
    marginTop: 1,
  },
  tabText: {
    w: "80px",
    marginLeft: 15,
    fontSize: "lg",
    paddingRight: 3,
    fontWeight: "bold",
    color:'white'
  },
  antChainIcon: {
    fontSize: "sm",
    fontSize: "18px",
    marginLeft: "-3",
    fontWeight: "bold",
    color: theme.customColors.common[0],
  },
  iconContainer: {
    width: "110px",
    justifyContent: "flex-end",
  },
  antchainImage: {
    marginX: "5",
    height: "30px",
    objectFit: "fix",
  },
  signOutLabel: {
    color:'white',
    paddingY: 1,
    marginLeft: 1,
    fontSize: "lg",
    fontWeight: "bold",
  },
  signoutButton: {
    size: 25,
    marginTop: 1,
  },
  sigoutContainer: {
    marginX: 8,
    marginTop: 6,
    paddingBottom: 50,
    flexDirection: "row",
  },
  pwLabel: {
    fontSize: "md",
    color: theme.customColors.common[0],
  },
  logoutTopContainer: {},
  emptyMidContainer: {
    margin: 4,
    borderTopWidth: 2,
  },
  mdContainer1: {
    marginTop: "5",
  },
  mdContainer2: {
    marginY: 2,
    marginRight: 2,
  },
  nav: {
    top: 0,
    as: "nav",
    zIndex: 1,
    paddingX: 5,
    opacity: 0.9,
    paddingY: 2,

    margin: "auto",
    bg: "#2A3042",
    wrap: "wrap",
    width: "100%",
    align: "center",
    color: "gray.600",
    position: "sticky",
    overflow: "hidden",
    justify: "space-between",
  },
  navUnauthantication: {
    top: 0,
    as: "nav",
    zIndex: 1,
    paddingX: 5,
    bg: "black",
    opacity: 0.9,
    paddingY: 5,
    wrap: "wrap",
    margin: "auto",
    width: "100%",
    align: "center",
    color: "gray.600",
    position: "sticky",
    overflow: "hidden",
    justify: "space-between",
  },
  menuLinks: {
    spacing: 5,
    align: "center",
  },
  searchInput: {
    paddingx: 5,
    borderRadius: 20,
    backgroundColor: theme.customColors.white[100],
  },
  icon: {
    size: 30,
    color: theme.customColors.white[100],
  },
  logoImage: {
    width: "130px",
    height: "30px",
  },
  logoImageInside: {
    width: "30px",
    height: "35px",
    marginTop: "-5px",
    marginLeft: "2px",
  },
  txtLogo: {
    fontSize: "3xl",
    fontWeight: "bold",
    color: "#65bcc1",
  },
  logoContainer: {
    flexDirection: "row",
  },
  switchButtonConatiner: {
    padding: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonInnerCOntainer: {
    paddingY: 3,
    width: "40px",
    height: "40px",
    boxShadow: "dark-lg",
    borderRadius: "20%",
    backgroundColor: theme.customColors.white[100],
  },
  drwawer: {
    size: "full",
    placement: "left",
  },
  logoMidContainer: {
    flexDirection: "row",
  },

  powerByLabel: {
    paddingX: 6,
    color: theme.customColors.white[100],
    marginLeft: 10,
    fontSize: "xs",
    color: "white",
    marginRight: 3,
    fontWeight: "400",
  },
  antchainImage: {
    objectFit: "contain",
  },
  antChainContainer: {
    paddingLeft: 2,
    fontWeight: "semibold",
    fontSize: "lg",
    color: theme.customColors.white[100],
  },
  hamBurgerMenu: {
    color: theme.customColors.white[100],
  },
  logoMainFlex: {
    zIndex: 10,
    paddingRight: 2,
    marginTop: ["0", "1", "2"],
    marginLeft: [-10, -5, 0, 0],
  },
  txtFlex: {
    p: "1",
    marginTop: -1,
    marginStart: 10,
    flexDirection: "row",
  },
  txtTra: {
    color: "#70c5c4",
    marginTop: "3px",
    fontWeight: "bold",
    marginRight: "2px",
    fontSize: { base: "24px", md: "24px", lg: "32px" },
  },
  imgX: {
    marginBottom: [4, 2, 2],
    height: ["30px", "20px", "30px", "40px"],
  },
};
export default style;
