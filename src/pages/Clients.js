import ApiManager from "../config/apiManager";
import React, { Component, useEffect } from "react";
import LangContext from "../context/languageContext";
import { ClientsFormPreView } from "../components/Clients";
import { useHistory, useLocation } from "react-router-dom";
import { Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import TopIndustries from "../components/Industries/TopPerformingIndustries";
import SaleBasedIndustries from "../components/Industries/SaleBasedIndustries";
import ProductivityBasedIndustreis from "../components/Industries/ProductivityBasedIndustreis";

const Clients = () => {
  const history = useHistory();
  const search = useLocation().search;
  const apimanager = ApiManager.getInstance();
  let item = new URLSearchParams(search).get("company");
  const { currentLangData } = React.useContext(LangContext);

  const getTopPerformingIndustries = () => {
    apimanager
      .get(currentLangData.apis.topPerformingIndustries, {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSaleBaseIndustries = () => {
    apimanager
      .get(currentLangData.apis.getSaleBaseIndustries, {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTopPerformingIndustries();
    getSaleBaseIndustries();
  });

  const MainContainer = () => {
    return (
      <>
        {!item ? (
          <SimpleGrid  {...style.mainContainer}>
            <TopIndustries  />
            <SaleBasedIndustries />
            <ClientsFormPreView />
            <ProductivityBasedIndustreis />
          </SimpleGrid>
        ) : null}
      </>
    );
  };
  return <MainContainer></MainContainer>;
};
export default Clients;
const style = {
  mainContainer: {
    columns: 2,
    spacing: 5,
    height: "110vh",
    minChildWidth: "380px",
    backgroundColor: "#f6f6fa",
  },
};
