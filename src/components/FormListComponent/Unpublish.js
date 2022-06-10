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
import styles from "./styles";

const All = ({ clients, form, page }) => {
  console.log("clientsajj", clients);
  const options = ["Client Name", "Created Date", "Author", "Parent", "Action"];
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
          {clients.lenght
            ? clients.map((item, index) => {
                const d = new Date(item.createdAt);
                return (
                  <Tr key={index} {...styles.tableRow}>
                    <Td>{item.displayName}</Td>
                    <Td>{d.getDate()}</Td>
                    <Td>{item.product ? item.product : item.service}</Td>
                    <Td>
                      <Flex {...styles.tdFlex}>
                        <Flex {...styles.td2Flex}>
                          <Text {...styles.editLabel}>Edit</Text>
                          <Text {...styles.deleteLabel}>Delete</Text>
                        </Flex>
                        <Flex {...styles.df3}>
                          <Text {...styles.previewLabel}>PreView</Text>
                          <Text {...styles.publishLabel}>Publish</Text>
                        </Flex>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })
            : null}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default All;
