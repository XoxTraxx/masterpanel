import React from "react";
import {
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Box,
  Link,
  Center,
} from "@chakra-ui/react";
import ApiManager from "../config/apiManager";
import EmptyItem from "../components/image/nodata.jpg";
import ReactPaginate from "react-paginate";
import moment from "moment";
import "moment-timezone"
const Help = () => {
  const apiManager = ApiManager.getInstance();
  const [complains, setComplains] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [pages, setPages] = React.useState(complains);
  let totalDatalength = complains?.length;
  const [currentPage, setCurrentPage] = React.useState(0);
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(totalDatalength / PER_PAGE);
  console.log("totalDatalength", complains);
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("");
    setCurrentPage(selectedPage);
  };

  const getAllForms = () => {
    apiManager
      .get("getComplaint")
      .then((response) => {
        console.log("getComplaint", response);
        if (response.message === 6603) {
          setComplains(response.result.docs);
          setPages(response.result.docs);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAllForms();
  }, []);

  return (
    <Flex
      margin={5}
      padding={5}
      borderRadius={"5px"}
      backgroundColor={"white"}
      h={"70vh"}
      flexDirection={"column"}
    >
      <Flex
        h={"40px"}
        w={"100%"}
        borderColor={"lightgray"}
        borderBottomWidth={1}
      >
        <Heading fontSize={25} fontWeight={"bold"}>
          Complaints
        </Heading>
      </Flex>
      <Flex
        margin={5}
        padding={3}
        borderRadius={"5px"}
        backgroundColor={"white"}
        h={"50vh"}
        flexDirection={"column"}
      >
        {complains ? (
          <Flex h={"40px"} w={"100%"} mt={10} flexDirection={"column"}>
            <Flex justifyContent={"space-between"} p={3} w={"100%"}>
              {/* <Text >{item.name}</Text> */}
              <Text width={"25%"} fontWeight={"bold"} fontSize={12}>
                Name
              </Text>
              <Text width={"25%"} fontWeight={"bold"} fontSize={12}>
                Email
              </Text>
              <Text width={"25%"} fontWeight={"bold"} fontSize={12}>
                Message
              </Text>
              <Text width={"25%"} fontWeight={"bold"} fontSize={12}>
                Created Date
              </Text>
            </Flex>
            {pages
              ? pages.slice(offset, offset + PER_PAGE).map((item, index) => {
                let MTZ= moment(item.date)
                    .tz("Asia/Kuala_Lumpur")
                    .format('YYYY-MM-DD hh:mm A')
                  return (
                    <Flex
                      justifyContent={"space-between"}
                      p={3}
                      key={index}
                      w={"100%"}
                      borderWidth={1}
                      boxShadow={"sm"}
                      mt={3}
                    >
                      {/* <Text >{item.name}</Text> */}
                      <Text width={"25%"} fontSize={12}>
                        {item.name}
                      </Text>
                      <Text width={"25%"} fontSize={12}>
                        {item.email}
                      </Text>
                      <Text width={"25%"} fontSize={12}>
                        {item.message}
                      </Text>
                      <Text width={"25%"} fontSize={12}>
                        {MTZ}
                      </Text>
                    </Flex>
                  );
                })
              : null}
          </Flex>
        ) : (
          <Image
            alignSelf={"center"}
            objectFit={"contain"}
            w={"200px"}
            h={"200px"}
            src={EmptyItem}
          />
        )}
      </Flex>
      <Center>
        <Flex mt={8}  alignItems={"center"}>
          {totalDatalength == undefined || totalDatalength == 0 ? null : (
            <Center position={'fix'}>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
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
            </Center>
          )}
        </Flex>
      </Center>
    </Flex>
  );
};

export default Help;
