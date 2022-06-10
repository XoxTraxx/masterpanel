import React from "react";
import ReactDOM from "react-dom";
import { renderFields } from "../components/registerComponent/renderFunction";
import Pdf from "react-to-pdf";
import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Radio,
  Select,
  Button,
  Spacer,
  SimpleGrid,
  RadioGroup,
  useMediaQuery,
} from "@chakra-ui/react";
// import "./styles.css";
import {
  RenderFields,
  renderSuperFields,
  renderPhaseQuestions,
} from "../components/privateComponent";

import {
  renderDropdown,
  handleChangeStatus,
  renderInsideDropzone,
} from "../components/registerComponent/renderFunction";

import { useHistory, useLocation } from "react-router-dom";
import LangContext from "../context/languageContext";
import TraxImage from "../components/image/Trax-background-06.png";

import styles from "../components/registerComponent/styles2";

const ClientFormPdf = (props) => {
  const { currentLangData } = React.useContext(LangContext);

  const options = {
    orientation: "portrait",
    unit: "in",
    format: [16, 8],
  };

  let history = useHistory();
  let location = useLocation();
  const ref = React.createRef();
  let data = location?.state?.data;
  console.log(ref, "props", props);
  console.log("LocationData", location?.state?.data);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex  flexDirection={isMobile ? "column" : "row"}>
      <>
        <Flex {...styles.formFlex} paddingX={isMobile ? 0 : 20}>
          <Button {...styles.btnBack} onClick={() => history.goBack()}>
            <Text {...styles.backTxt}>Back</Text>
          </Button>
          <Flex>
            <Text {...styles.txtRegistered}>Client Form PDF</Text>
            <Spacer />
            <Button
              {...styles.pdfBtn}
              onClick={() => history.push("/ClientForm2")}
            >
              Client Form 2
            </Button>
          </Flex>

          <Flex {...styles.flexTextBold}>
            <Flex {...styles.mainFormFlex}ref={ref} >
              {renderFields({
                mandatory: true,
                value: data?.name,
                title: "Name",
              })}
              <SimpleGrid {...styles.simpleGridFlex} columns={isMobile ? 1 : 2}>
                {renderFields({
                  title: "Company Name",
                  value: data?.companyName,
                })}

                {renderFields({
                  value: data?.companyRegistrationNumber,
                  type: "number",
                  title: "Company Registration No.",
                })}

                {renderFields({
                  type: "tel",
                  maxLength: 11,
                  mandatory: true,
                  value: data?.companyPhoneNumber,
                  title: "Company Phone",
                  showSelectCountries: true,
                })}

                {renderFields({
                  value: data?.companyFullAddress,
                  title: "Company Address",
                })}

                <Box {...styles.firstGrid}>
                  <Flex>
                    <Text {...styles.txtIndustry}>Insdustry</Text>
                    <Spacer />
                    {true ? (
                      <SimpleGrid columns={2} spacing={6}>
                        <Text {...styles.txtIndustry}>SubIndustry</Text>
                        <Text {...styles.txtIndustry}></Text>
                      </SimpleGrid>
                    ) : null}
                  </Flex>
                  <Flex flexDirection="row">
                    <Select {...styles.industrySelect}>
                      <option color={"black"}>{data?.industry}</option>
                    </Select>
                    <Spacer />
                    {true ? (
                      <Select {...styles.industrySelect}>
                        <option color={"black"}>{data?.subIndustry}</option>
                      </Select>
                    ) : null}
                  </Flex>
                </Box>

                {renderFields({
                  title: "Others (Please specify)",
                  value: data?.others,
                })}

                {renderFields({
                  title: "Username",
                  value: data?.name,
                })}

                {renderFields({
                  value: data?.companyWebsite,
                  title: "URL",
                })}

                {renderFields({
                  title: "Email",
                  value: data?.email,
                })}

                <Box {...styles.firstGrid}>
                  <Flex>
                    <Text {...styles.txtIndustry}>Product | Service</Text>
                    <Spacer />
                  </Flex>
                  <Flex flexDirection="row">
                    <Select {...styles.industrySelect}>
                      <option color={"black"}>{data?.product}</option>
                    </Select>
                    <Spacer />
                  </Flex>
                </Box>

                <Flex {...styles.firstGrid1}>
                  <Flex>
                    <Text {...styles.mandatoryStar}>*</Text>
                    <Text {...styles.txtName}>
                      {currentLangData.app.password}
                    </Text>
                  </Flex>

                  <Input
                    variant="filled"
                    fontSize={"sm"}
                    width={"100%"}
                    value={data?.password}
                  ></Input>
                </Flex>

                {renderFields({
                  value: data?.companyPosition,
                  title: "Your Position",
                })}

                {renderFields({
                  type: "tel",
                  title: "Phone",
                  value: data?.phone,
                  maxLength: 11,
                  mandatory: true,
                  showSelectCountries: true,
                })}

                {RenderFields({
                  value: data?.others,
                  title: currentLangData.app.others,
                  color: "black",
                })}

                <Text></Text>
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          {...styles.secondFlex}
          borderLeftWidth={1}
          padding={1}
          justifyContent={"center"}
        >
          <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
            {({ toPdf }) => (
              <Button {...styles.pdfBtn} onClick={toPdf}>
                Generate Pdf
              </Button>
            )}
          </Pdf>
          {/* <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/> */}
        </Flex>
      </>
    </Flex>
  );
};
export default ClientFormPdf;
