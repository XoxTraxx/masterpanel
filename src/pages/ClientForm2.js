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
    <Flex flexDirection={isMobile ? "column" : "row"}>
      <>
        <Flex {...styles.formFlex} paddingX={isMobile ? 0 : 20}>
          <Button
            {...styles.btnBack}
            //     isLoading={loading}
            // isDisabled={disabledSubmit}
            onClick={() => history.goBack()}
          >
            <Text {...styles.backTxt}>Back</Text>
          </Button>
          <Flex>
            <Text {...styles.txtRegistered}>Client Form PDF 2</Text>
            <Spacer />
          </Flex>

          <Flex {...styles.flexTextBold}>
            <Flex {...styles.mainFormFlex} ref={ref}>
              <SimpleGrid {...styles.simpleGridFlex} columns={isMobile ? 1 : 2}>
                {renderDropdown({
                  title: currentLangData.app.howManyStage,
                  multiMapping: [1],
                })}
                {RenderFields({
                  value: data?.others,
                  title: currentLangData.app.others,
                  color: "black",
                })}
                <Text></Text>
              </SimpleGrid>

              {RenderFields({
                title: currentLangData.app.trackBase,
                showSelectCountries: true,
              })}

              {RenderFields({
                mandatory: true,
                value: data?.phaseByPhaseProcess,
                value: data?.phaseByPhaseProcess,
                title: currentLangData.app.phaseByPhase,
              })}

              {RenderFields({
                mandatory: true,
                value: data?.phaseElaboration,
                title: currentLangData.app.canElaborateMore,
              })}

              <Text {...styles.txtName} marginBottom={2}>
                {currentLangData.app.chooseToSuperadmin}
              </Text>

              <SimpleGrid {...styles.simpleGridFlex}>
                {renderSuperFields({
                  placeholder: "Name",
                  value: data?.superAdminName,
                })}

                {renderSuperFields({
                  placeholder: "Email",
                  value: data?.superAdminEmail,
                })}

                {renderSuperFields({
                  value: data?.department,
                  placeholder: "Department",
                })}

                {renderSuperFields({
                  value: data?.AdminCompanyPosition,
                  placeholder: "Position",
                })}
              </SimpleGrid>

              <Text {...styles.txtName} marginBottom={2}>
                {currentLangData.app.requiredInPhase}
              </Text>
              <Flex>
                <SimpleGrid {...styles.phaseQuestion}>
                  <Text>{currentLangData.app.phase}</Text>
                  <Text>{currentLangData.app.questionToAsk}</Text>
                </SimpleGrid>
              </Flex>
              <Flex fontWeight={"bold"} alignSelf={"flex-end"}></Flex>

              <Flex color={"black"} flexDirection={"column"}>
                <Text color={"black"}></Text>
                {renderPhaseQuestions({
                  firstPlaceholer: "Process name",
                  secondPlaceholder: "Process Description",
                  thirdPlaceholder: "Purpose of process",
                  forthPlaceholder: "Person in-charge",
                  value1: "",
                  value2: "",
                  value3: "",
                  value4: "",
                })}
                {/* {data?.phases.map((item, index) => {
                  return renderPhaseQuestions({
                    firstPlaceholer: "Process name",
                    secondPlaceholder: "Process Description",
                    thirdPlaceholder: "Purpose of process",
                    forthPlaceholder: "Person in-charge",
                    value1: item?.department,
                    value2: item?.processSteps,
                    value3: item?.processType,
                    value4: item?.personIncharge,
                  });
                })} */}
              </Flex>
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
