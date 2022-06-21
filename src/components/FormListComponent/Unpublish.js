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
  TableCaption,
  Badge,
} from "@chakra-ui/react";
import React, { Component, useState } from "react";
import styles from "./styles";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loading from "../../components/Loading/Loading";


const All = ({ clients, form, page }) => {

  const options = ["Client Name", "Created Date", "Author", "Parent", "Action"];
  const [currentPage, setCurrentPage] = useState(0);
  // const [total, setTotal] = useState(null);
  const history = useHistory();
  let totalDatalength= clients?.length
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(totalDatalength / PER_PAGE);
  // console.log("totalDatalength==>>>", totalDatalength);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
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
          {clients
            ? clients.slice(offset, offset + PER_PAGE).map((item, index) => {
                console.log(item, "items>>>");
                return (
                  <>
                    {item.status === 1 ? (
                      <Tr key={index} {...styles.tableRow}>
                        <Td>{item.pageName ? item.pageName : item.formName}</Td>
                        <Td>{item.date}</Td>
                        <Td>{item.parent}</Td>
                        <Td>
                          <Flex {...styles.tdFlex}>
                            <Flex {...styles.td2Flex}>
                              <Text  onClick={() =>
                                  history.push({
                                    editData:{
                                      html:item.html,
                                      css:item.css
                                    },
                                    pathname: `/FormEditor`,
                                  }) }  cursor={'pointer'} {...styles.editLabel}>Edit</Text>
                              <Text {...styles.deleteLabel}>Delete</Text>
                            </Flex>
                            <Flex {...styles.df3}>
                              <Text
                                onClick={() =>
                                  history.push({
                                    data: item.html,
                                    dataCss: item.css,
                                    pathname: `/Preview`,
                                  })
                                }
                                cursor="pointer"
                                {...styles.previewLabel}
                              >
                                PreView
                              </Text>{" "}
                              <Text {...styles.publishLabel}>
                                <Badge>Un Publish</Badge>{" "}
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
