import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
} from "@chakra-ui/react";
import styles from "./styles";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import ApiManager from "../../config/apiManager";
// import EmptyItem from "../../components/image/nodata.jpg";
import Loading from "../../components/Loading/Loading";
import { useHistory } from "react-router-dom";

const All = ({ clients, form, page, client, onPublishClick }) => {
  const apiManager = ApiManager.getInstance();
  const [currentPage, setCurrentPage] = React.useState(0);
  // const [total, setTotal] = React.useState(null);
  const [pages, setPages] = React.useState(clients);
 const history=useHistory()
  let totalDatalength = clients?.length;
  const PER_PAGE = 3;  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(totalDatalength / PER_PAGE);

  console.log("totaldatalength>>>", totalDatalength);
  console.log("clients", clients);
  // console.log("total", total);
  // console.log("pageCount", pageCount);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  }; 

  React.useEffect(() => {
    setPages(clients);
  }, [clients]);

  const deletePage = (_pageId) => {
    let body = {
      pageId: _pageId,
    };
    apiManager
      .post("deletePage", body)
      .then((response) => {
        if (response.message === 6573) {
          let filterData = pages.filter((item) => item.pageId != _pageId);
          console.log("filterData", filterData);
          console.log("response", response);

          setPages(filterData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex {...styles.mainFlex}>
      <Table {...styles.table}>
        <Thead {...styles.tableHead}>
          <Tr>
            <Th>{form ? "Form Name" : page ? "Page Name" : " Client Name"}</Th>
            <Th>Created Date</Th>
            <Th>Parent</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pages ? (
            pages.slice(offset, offset + PER_PAGE).map((item, index) => {
              console.log(pages.length, "length");
              return (
                <Tr key={index} {...styles.tableRow}>
                  <Td>{form ? item.formName : item.pageName}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.parent}</Td>
                  {!client ? (
                    <Td>
                      <Flex {...styles.tdFlex}>
                        <Flex {...styles.td2Flex}>
                          <Text {...styles.editLabel}>Edit</Text>
                          <Text
                            cursor={"pointer"}
                            onClick={() => deletePage(item.pageId)}
                            {...styles.deleteLabel}
                          >
                            Delete
                          </Text>
                        </Flex>
                        <Flex {...styles.df3}>
                          <Text  onClick={() =>
                                  history.push({
                                    data: item.html,
                                    dataCss: item.css,
                                    pathname: `/Preview`,
                                  })
                                } cursor={'pointer'} {...styles.previewLabel}>PreView</Text>
                          <Text
                            onClick={() => {
                              let changedItems = pages?.map((data) => {
                                if (data?.pageId === item?.pageId) {
                                  data.status = item.status === 1 ? 2 : 1;
                                }
                                return data;
                              });
                              setPages(changedItems);
                              onPublishClick(
                                form ? item.formId : item.pageId,
                                item.status === 1 ? 2 : 1
                              );
                            }}
                            cursor={"pointer"}
                            {...styles.publishLabel}
                          >
                            {item.status === 1 ? "Publish" : " Un Publish"}
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                  ) : null}
                </Tr>
              );
            })
          ) : (
            <Tr {...styles.tableRow}>
              <Td></Td>
              <Td >
                <Flex {...styles.loader}>
                <Loading />
                </Flex>
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      {totalDatalength == undefined || totalDatalength == 0 ? null : (
        <Flex {...styles.PaginateContainer}>
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
        </Flex>
      )}
    </Flex>
  );
};

export default All;
