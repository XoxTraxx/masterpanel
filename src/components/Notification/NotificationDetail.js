import React, { useState, useEffect } from "react";
import {Flex, Text, Image } from "@chakra-ui/react";
import { NotificationData } from "../../constants/data";
import theme from "../../config/color";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import Apimanager from "../../config/apiManager";
// import allActions from "../../actions/allActions";
import { useDispatch } from "react-redux";
import LangContext from "../../context/languageContext";
import { BellIcon } from "@chakra-ui/icons";
import EmptyItem from "../../components/image/nodata.jpg";
import ReactPaginate from "react-paginate";

const NotificationDetail = () => {
  const dispatch = useDispatch();
  // const { currentLangData } = React.useContext(LangContext);
  // const apiManager = Apimanager.getInstance();
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);


  const state = useSelector((state) => state);
  console.log("data", state?.notifictaionReducer?.notification);
  let temp = state?.notifictaionReducer?.notification;
  console.log("state is", temp);


  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(total / PER_PAGE);
  console.log("pageCount", pageCount);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
 

  return (
    <Flex {...style.main}>
      <Flex {...style.header}>
        <Flex {...style.title}>
          <Text {...style.titleOne}>NOTIFICATIONS</Text>
          {/* <Text {...style.titletwo}>Notiifica</Text> */}
        </Flex>
      </Flex>
      <Flex {...style.nTopContainer}>
        {temp.length > 0 ? (
          temp
          .slice(offset, offset + PER_PAGE)
          .map((item, index) => {
            console.log(item?.email, "tem");
            console.log(item?.notification?.title, "tem");
            return (
              <Flex {...style.notificationMainContaier}>
                <Flex {...style.logo}>
                  <BellIcon />
                </Flex>
                <Flex {...style.notificationContaier}>
                  <Text {...style.cLabel}>{item?.notification?.title}</Text>
                  <Text>{item?.notification?.body}</Text>
                </Flex>
                <Text {...style.dateLabel}>
                  <RepeatClockIcon />
                  {item?.date}
                </Text>
              </Flex>
            );
          })
        ) : (
          <Image w={"200"} src={EmptyItem} />
        )}
        {temp.length == 0 ? null : (
          <Flex {...style.paginationcontainer}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={8}
            onPageChange={handlePageClick}
            containerClassName={"pagination borderRadius"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}   
          />
        </Flex>
        ) }
        
      </Flex>
    </Flex>
  );
};
const style = {
  main: {
    d: "flex",
    bgColor: "#edf4f4",
    // justifyContent: "center",
    flexDirection: "column",
    // alignItems:"center",
  },
  header: {
    alignItems: "flex-start",
    mt: "8",
    paddingX: "5",
  },
  title: {},
  titleOne: {
    fontSize: "25px",
    fontWeight: "bolder",
  },
 
  nTopContainer: {
    bgColor: "white",
    alignSelf: "center",
    borderRadius: "5",
    height: "100%",
    marginY: 3,
    width: "90%",
    flexDirection: "column",
    paddingX: "5",
  },
  cLabel: {
    fontWeight: "semibold",
    bgColor: "#bad3d4",
    borderRadius: "3px",
  },
  dateLabel: {
    fontSize: "12px",
    color: theme.customColors.bgColors[800],
  },
  notificationContaier: {
    w: "80%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    marginX: "3",
  },
  notificationMainContaier: {
    paddingX: 2,
    marginTop: 3,
    paddingY: 2,
    width: "100%",
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    width: "30px",
    bgColor: "#bad3d4",
    borderRadius: "50%",
  },
  paginationcontainer:{
    justifyContent:"center",
    borderRadius:"10",
  },
};
export default NotificationDetail;
