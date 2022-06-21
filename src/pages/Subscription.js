import React, { useState, useContext, useEffect } from "react";
import styles from "../components/subscription/subscriptionStyles";
import { Text, Flex, useMediaQuery } from "@chakra-ui/react";

import { useHistory, useLocation } from "react-router";
import ApiManager from "../config/apiManager";
import {
  SuccessBox,
  Subscriptions,
  RenderSubDetails,
} from "../components/subscription/subscrptionComponent";
import Loading from "../components/Loading/Loading";
import theme from "../config/color";

const Subscription = () => {
  const location = useLocation();
  let history = useHistory();

  // let registerData = location?.state?.data;
  // console.log("Subscription Data", registerData);

  let arrow = ">";

  const [choice, setChoice] = useState([]);
  const [details, setDetails] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(false);
  const apimanager = ApiManager.getInstance();
  const [packageName, setPackageName] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [successfullyRegistered, setSuccessfullyRegistered] = useState("");

  useEffect(() => {
    getSubscription();
    window.localStorage.removeItem("subscriptionIndex");
  }, []);

  const getSubscription = () => {
    let tempPackage = [];
    let tempChoice = [];
    let tempDetails = [];
    let tempBenefits = [];

    apimanager
      .get("getAllSubscription", {})
      .then((response) => {
        // console.log("response Track", response);
        if (response.message === 6512) {
          response?.result?.map((value, index) => {
            tempChoice.push(value?.choice);
            tempDetails.push(value?.details);
            tempBenefits.push(value?.benefits);
            tempPackage.push(value?.packageName);

            console.log(index, "index", "value", value);
          });

          setChoice(tempChoice);
          setDetails(tempDetails);
          setBenefits(tempBenefits);
          setPackageName(tempPackage);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const submitContinue = async (selectedIndex) => {
    await window.localStorage.setItem("subscriptionIndex", selectedIndex);

    history.push({
      pathname: `/Register`,
      data:selectedIndex
    });
  };

  const ifLoading = (value) => {
    return value ? (
      value
    ) : (
      <Text fontSize={"sm"} as="i">
        Loading...
      </Text>
    );
  };

  const ifDetailsLoading = (data) => {
    console.log("ifDetailsLoading", data);
    return data;
    // return data.length?<Text>Loading...</Text>:data;
  };

  return (
    <Flex {...styles.mainFlex}>
      {successfullyRegistered ? (
        <Flex {...styles.centered}>
          {SuccessBox({
            title: "Successfully Registered",
          })}
        </Flex>
      ) : (
        <Flex {...styles.mainFlex}>
          {RenderSubDetails({
            mainTitle: "CHOOSE YOUR BEST SUBSCRIPTION IN",
            subTitle: "A WHOLE NEW WAY",
          })}
          <Flex
            {...styles.centered}
            flexDirection={isMobile ? "column" : "row"}
          >
            {loading ? (
              <Flex {...styles.loadingFlex}>
                <Flex {...styles.loadingBox}>
                  <Loading />
                </Flex>
              </Flex>
            ) : (
              Subscriptions({
                color3: "white",
                mapping: ifDetailsLoading(details[0]),
                mapping1: benefits[0],
                colorTitle: theme.customColors.subsciptionsColors[100],

                title3:
                  successfullyRegistered === ""
                    ? ifLoading(choice[0])
                    : successfullyRegistered,
                title1: ifLoading(packageName[0]),
                mainTitle: "SME",
                backgroundColor1: theme.customColors.subsciptionsColors[100],
                backgroundColor3: theme.customColors.subsciptionsColors[200],
                onClick: () => submitContinue(0),
              })
            )}

            {loading ? (
              <Flex {...styles.loadingFlex}>
                <Flex {...styles.loadingBox}>
                  <Loading />
                </Flex>
              </Flex>
            ) : (
              Subscriptions({
                color3: theme.customColors.subsciptionsColors[800],
                mapping: ifDetailsLoading(details[1]),
                mapping1: benefits[1],
                mainTitle: "ENTERPRISE",
                colorTitle: theme.customColors.subsciptionsColors[400],
                title3:
                  successfullyRegistered === ""
                    ? ifLoading(choice[1])
                    : successfullyRegistered,
                title1: ifLoading(packageName[1]),
                backgroundColor1: theme.customColors.subsciptionsColors[300],
                backgroundColor3: theme.customColors.subsciptionsColors[400],
                onClick: () => submitContinue(1),
              })
            )}

            {loading ? (
              <Flex {...styles.loadingFlex}>
                <Flex {...styles.loadingBox}>
                  <Loading />
                </Flex>
              </Flex>
            ) : (
              Subscriptions({
                color3: theme.customColors.subsciptionsColors[800],
                mapping: ifDetailsLoading(details[2]),
                mapping1: benefits,
                colorTitle: theme.customColors.subsciptionsColors[900],
                mainTitle: "PROFIT SHARING",
                title3:
                  successfullyRegistered === ""
                    ? ifLoading(choice[2])
                    : successfullyRegistered,
                title1: ifLoading(packageName[2]),
                backgroundColor1: theme.customColors.subsciptionsColors[500],
                backgroundColor3: theme.customColors.subsciptionsColors[900],
                onClick: () => submitContinue(2),
              })
            )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default Subscription;
