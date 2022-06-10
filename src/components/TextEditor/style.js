import theme from "../../config/color";
const style = {
  mainContainer: {
    marginX: 3,
  },
  rightContainer: {
    margin: 2,
    padding: 2,
    borderRadius: 3,
    boxShadow: "lg",
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  menuContainer: {
    padding: 3,
    justifyContent: "space-between",
  },
  leftContainer: {
    w: "100%",
    padding:5,
    flexDirection:'column',
    marginTop: 2,
  },
  upperConatiner: {
    width: "100%",
    backgroundColor:'white'
  },
  tagContainer: {
    w: "100%",
    flexDirection: "column",
  },
  tagInput: {
    w: "100%",
    borderRadius: 2,
    backgroundColor: theme.customColors.gray[1001],
  },
  tagLabel: {
    fontSize: 15,
  },
  dateBox: {
    marginX: 3,
    width: "130px",
  },
  dateLabel: {
    fontSize: 13,
  },
  switcContainer: {
    spacing: 7,
    columns: 2,
    direction: "row",
    justifyContent: "space-between",
  },
  switchLabel: {
    width: "120px",
    fontSize: "sm",
  },
  switch: {
    left: 20,
    size: "md",
    colorScheme: "teal",
  },
  menuButton: {
    w: "100%",
    size: "sm",
    color: theme.customColors.black[100],
    backgroundColor: theme.customColors.gray[1001],
  },
  commonFlex: {
    padding: 3,
  },
  saveMenu: {
    w: "50%",
    paddingX: 10,
    size: "sm",
  },
  rnButton: {
    w: "50%",
    size: "sm",
    paddingX: 10,
    marginRight: 3,
  },
  autherContainer: {
    padding: 3,
    flexDirection: "column",
  },
  editorContainer: {
    h: "100%",
    padding: 3,
    marginX: 2,
    borderRadius: 6,
    flexDirection: "column",
    backgroundColor: theme.customColors.white[100],
  },
  innnerBox: {
    marginY: 5,
    paddingX: 4,
    height: "50%",
    width: "100%",
    borderRadius: 10,
    backgroundColor: theme.customColors.gray[1001],
  },
  editorBox: {
    marginY: 5,
    paddingX: 4,
    width: "100%",
    height: "250px",
    borderRadius: 10,
    overflowX: "auto",
    maxWidth: "630px",
    alignItems: "center",
    maxHeigth: "320px",
    backgroundColor: theme.customColors.gray[1001],
  },
  editorBoxx: {
    width: "100%",
    marginTop: 3,
  },
  topInput: {
    marginY: 5,
    w:'60%',
    backgroundColor: theme.customColors.gray[1001],
  },
  languageDropDown: {
    w: "30%",
    marginY: 5,
    marginLeft: 3,
    fontSize: "sm",
  },
  dropZoneContainer: {
    padding: 2,
    width: "40%",
    borderWidth: 2,
    borderRadius: 6,
    borderStyle: "dashed",
    backgroundColor: theme.customColors.white[100],
  },
  buttonFlex: {
    marginX: 1,
    cursor: "pointer",
  },
  button: {
    size: 18,
  },
  captionInput: {
    w: "50%",
    marginY: 2,
    fontWeight: "bold",
    backgroundColor: theme.customColors.white[100],
  },
  addParagraphButton: {
    w: ["100%", "30%"],
    fontSize: ["md", "xs"],
    backgroundColor: "#24b7b0",
    color: theme.customColors.white[100],
  },
  inner2: {
    padding: 3,
    width: "100%",
    justify: "space-between",
  },
  imageLabel: {
    fontWeight: "bold",
  },
  tagInput: {},
};
export default style;
