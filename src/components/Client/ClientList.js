import { Flex, Text, Table, Thead, Tbody, Tr, Th, Td ,Button,Badge,Center} from "@chakra-ui/react";
import styles from "./style";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import ApiManager from "../../config/apiManager";
import Loading from "../../components/Loading/Loading";

const All = ({ clients, form, page, client, onPublishClick,onChangeStatus }) => {
  const apiManager = ApiManager.getInstance();
  const [currentPage, setCurrentPage] = React.useState(0);
  const [total, setTotal] = React.useState(null);
  const [cleints, setCLients] = React.useState(clients);
console.log('onChangeStatus',onChangeStatus)
  let totalDatalength = clients?.length;
  const PER_PAGE = 4;
console.log('clients',clients)
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(totalDatalength / PER_PAGE);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  React.useEffect(() => {
    setCLients(clients);
  }, [clients]);
 

  return (
    <Flex {...styles.mainFlex}>
      <Table {...styles.table}>
        <Thead {...styles.tableHead}>
          <Tr>
            <Th>{form ? "Form Name" : page ? "Page Name" : " Client Name"}</Th>
            <Th>Created Date</Th>
            <Th>Email</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cleints
            ?  cleints.slice(offset, offset + PER_PAGE).map((item, index) => {
                return (
                  <Tr key={index} {...styles.tableRow}>
                    <Td>{item.displayName}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.email}</Td>
                      <Td>
                      <Badge w={'90px'} colorScheme={item.suspended === false ? 'green':'red'}>
                        <Center>{
                         item.suspended === false ?'Approve':'Dis Approve'}
                        </Center>
                        </Badge>
                      </Td>
                      <Td>
                        <Flex>
                          {console.log('item.suspended',item.suspended)}
                      {item.suspended ?  <Button w={'150px'} onClick={()=>onChangeStatus(item.email,item.suspended)}   colorScheme={'green'} size={'sm'}>
                          Approve
                        </Button>
                        : <Button  w={'150px'} onClick={()=>onChangeStatus(item.email,item.suspended)}   colorScheme={'red'} size={'sm'}>
                        Dis Approve
                      </Button> }
                        </Flex>
                      </Td>
                  </Tr>
                );
              })
            :(
              <Tr {...styles.tableRow}>
                <Td></Td>
                <Td>
                  <Flex {...styles.loader}>
                  <Loading />
                  </Flex>
                </Td>
                <Td></Td>
              </Tr>
            )}
        </Tbody>
      </Table>
      {totalDatalength == undefined || totalDatalength ==  0 ? null : (
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
