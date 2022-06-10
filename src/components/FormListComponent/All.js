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
} from "@chakra-ui/react";
import React, { Component } from "react";
import Clients from "../../pages/Clients";
import styles from "./styles";
import ReactPaginate from "react-paginate";

const All = ({ clients,form,page,client }) => {
  console.log("clientsajj", clients);
  const [name,setName]=React.useState('')
  const [users,setFoundUsers]=React.useState('')
  const [currentPage, setCurrentPage] = React.useState(0)
  const [total, setTotal] = React.useState(null)

  const options = ["Client Name", "Created Date", "Author", "Parent", "Action"];
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(total / PER_PAGE);
  console.log("pageCount", pageCount);
  const handlePageClick = ({ selected: selectedPage })=>{
    setCurrentPage(selectedPage);
  }
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = Clients.filter((user) => {
        return user.displayName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(Clients);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  return (
    <Flex {...styles.mainFlex}>
      <Table {...styles.table}>
        <Thead {...styles.tableHead}>
          <Tr>
            <Th>{form ?'Form Name': page ?"Page Name" :' Client Name' }</Th>
            <Th>Created Date</Th>
            <Th>Parent</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.lenght? clients.map((item, index) => {
           const d=new Date(item.createdAt)
           console.log('d',d)
            return (
              <Tr {...styles.tableRow}>
                <Td>{item.displayName}</Td>
                <Td>{d.getDate()}</Td>
                <Td>{item.product ? item.product : item.service}</Td>
              {!client ?  <Td >
                  <Flex {...styles.tdFlex}>
                  <Flex {...styles.td2Flex}>
                      <Text {...styles.editLabel}>
                        Edit
                      </Text>
                      <Text {...styles.deleteLabel}>
                        Delete
                      </Text>
                    </Flex>
                    <Flex {...styles.df3}>
                      <Text {...styles.previewLabel}>
                        PreView
                      </Text>
                      <Text {...styles.publishLabel}>
                        Publish
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
         :null }
              </Tr>
            );
          }):null}
        </Tbody>
      </Table>
      <Flex {...styles.PaginateContainer}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={3}
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
    </Flex>
  );
};

export default All;
