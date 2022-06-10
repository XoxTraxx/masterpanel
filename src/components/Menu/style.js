import theme from '../../config/color'
const style = {
  button: {
    flexDirection: "row",
    bg:theme.customColors.gray[900]
  },
  yearLablel: {
    fontSize: "sm",
    fontWeight: "semibold",
  },
  menuIncon: {
    size: 20,
    marginX: 3,
  },
  menuList: {
    height: "100px",
    overflowY: "scroll",
  },
  dateCustomInput:{
    fontSize:12,
    backgroundColor:theme.customColors.gray[900]
  }
};
export default style;
