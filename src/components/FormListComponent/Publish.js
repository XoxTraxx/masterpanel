import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";
import React, { Component, useState } from "react";
import styles from "./styles";
import ApiManager from "../../config/apiManager";
import ReactPaginate from "react-paginate";
import Loading from "../../components/Loading/Loading";
import { useHistory } from "react-router-dom";
const Publish = ({ clients, form, page }) => {
  const apiManager = ApiManager.getInstance();
  const [pages, setPages] = React.useState(clients);
  const [currentPage, setCurrentPage] = useState(0);
  // const [total, setTotal] = useState(null);
 const history=useHistory()
  let totalDatalength= clients?.length
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(totalDatalength / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

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
          setPages(filterData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteForm = (id) => {
    let body = {
      formId: id,
    };
    apiManager
      .post("deleteForm", body)
      .then((response) => {
        if (response.message === 6573) {
          let filterData = pages.filter((item) => item.formId != id);
          console.log("filterData", filterData);
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
          {pages
            ? pages.slice(offset, offset + PER_PAGE).map((item, index) => {
                return (
                  <>
                    {item.status === 2 ? (
                      <Tr key={index} {...styles.tableRow}>
                        <Td>{item.pageName ? item.pageName : item.formName}</Td>
                        <Td>{item.date}</Td>
                        <Td>{item.parent}</Td>
                        <Td>
                          <Flex {...styles.tdFlex}>
                            <Flex {...styles.td2Flex}>
                              <Text onClick={() =>
                                  history.push({
                                    editData:{
                                      html:item.html,
                                      css:item.css
                                    },
                                    pathname: `/FormEditor`,
                                  }) } 
                                  {...styles.editLabel}>Edit</Text>
                              <Text
                                onClick={() => {
                                  form
                                    ? deleteForm(item.form)
                                    : deletePage(item.pageId);
                                }}
                                cursor={"pointer"}
                                {...styles.deleteLabel}
                              >
                                Delete
                              </Text>
                            </Flex>
                            <Flex {...styles.df3}>
                              <Text onClick={() =>
                                  history.push({
                                    data: item.html,
                                    dataCss: item.css,
                                    pathname: `/Preview`,
                                  }) 
                                }
                                  cursor={"pointer"} {...styles.previewLabel}>
                                PreView
                              </Text>
                              <Text {...styles.publishLabel}>
                                <Badge colorScheme="green">Publish</Badge>
                              </Text>
                            </Flex>
                          </Flex>
                        </Td>
                      </Tr>
                    ) : null}
                  </>
                );
              })
            : (
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
      {totalDatalength == undefined || totalDatalength ==0 ? null : (
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

export default Publish;
