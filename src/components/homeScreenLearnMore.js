import React, { useState } from "react";
import theme from "../config/color";
import { useHistory } from "react-router";
import ant from "../components/image/ant.png";
import LangContext from "../context/languageContext";
import Contact from "../components/Contact/Contact";
import style from "../components/homeComponent/styles";
import track from "../components/image/HomeIcons/Track.png";
import Trace from "../components/image/HomeIcons/Trace.png";
import Export from "../components/image/HomeIcons/EXPORT.png";
import ANALYZE from "../components/image/HomeIcons/ANALYZE.png";
import hero_banner from "../components/image/HomeIcons/hero_banner-2.svg";
import ourMission from "../components/image/HomeIcons/ourMission.svg";
import TraxImage from "../components/image/HomeIcons/traxLogoColorful.png";
import security_icon from "../components/image/HomeIcons/security_icon-1.png";
import { Flex, Text, Image, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import digitalise_icon from "../components/image/HomeIcons/digitalise_icon-1.png";
import qr_scanner_icon from "../components/image/HomeIcons/qr_scanner_icon.png";
import AUTHENTICATE from "../components/image/HomeIcons/AUTHENTICATE.png";
import data_analytic_icon from "../components/image/HomeIcons/data_analytic_icon.png";
import DATAANALYTICS from "../components/image/HomeIcons/DATA ANALYTICS.png";

import {
  DataCircle,
  renderText,
  MissionNVision,
  LearnMoreButton,
  TrackDetailComponent,
} from "./homeComponent/trackDetailComponent";

// import TraxImage from "../components/image/Trax-background-06.png";
// import { Flex, Text, Button, Center } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
const HomeScreenLearnMoreButton = () => {
  const { currentLangData } = React.useContext(LangContext);
  let history = useHistory();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [textState, setText] = useState("");

  return (
    <>
      <Flex
        style={{
          display: "flex",
          height: "100vh",
          padding: "10px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${hero_banner})`,
        }}
        background={"black"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        {/* learnMoreFlex */}

        {LearnMoreButton()}
      </Flex>


      <Flex {...style.secondFlex} >
        <Text
          marginTop={8}
          fontWeight={"bold"}
          fontSize={isMobile ? "large" : "xx-large"}
        >
          {currentLangData.app.proudPartners}
        </Text>
        <Flex {...style.redLineFirst}></Flex>
        <Text {...style.txtStrategicPartner}>
          {currentLangData.app.strategicPartnerTxt}
        </Text>
        <Flex {...style.mainFlexAntChain}>
          <Image {...style.imgTrax} src={TraxImage} />
          <Text {...style.txtAntchain}>{currentLangData.app.antchain}</Text>
        </Flex>

        <Text
          {...style.traceabilityDetails}
          fontSize={isMobile ? "x-large" : "xx-large"}
        >
          {currentLangData.app.traceabilityDetails}
        </Text>
        <Flex
          borderWidth={2}
          marginTop={2}
          width={20}
          borderColor={"red"}
        ></Flex>

        <Flex {...style.flexTraxTraceability} width={isMobile ? "100%" : "50%"}>
          <Text {...style.txtCenter}>
            {currentLangData.app.traxTraceability}
          </Text>
          <Text color={"transparent"}>-</Text>
          <Text {...style.txtCenter}>
            {currentLangData.app.traxTraceabilityDetails}
          </Text>
        </Flex>

        <Flex {...style.flexGridParent}>
          <SimpleGrid
            // columns={3}
            {...style.gridTrackDetails}
            columns={isMobile ? 1 : 3}
            marginLeft={isMobile ? 0 : 20}
            display={isMobile ? "flex" : null}
            flexDirection={isMobile ? "column" : "row"}
          >
            {TrackDetailComponent({
              src: track,
              title: "TRACK",
              details: "Efficiently Track Supply Chain Journey",
            })}

            {TrackDetailComponent({
              src: Trace,
              title: "TRACE",
              details: "Trace Each Step of The Product Journey",
            })}

            {TrackDetailComponent({
              src: ANALYZE,
              title: "ANALYZE",
              details: "Analyze & Optimize Supply Chains",
            })}

            {TrackDetailComponent({
              src: Export,
              title: "EXPORT",
              details: "Track Products Which Are Being Exported Out",
            })}

            {TrackDetailComponent({
              src: AUTHENTICATE,
              title: "AUTHENTICATE",
              details: "Allow Customers to Verify Products",
            })}

            {TrackDetailComponent({
              src: DATAANALYTICS,
              title: "DATA ANALYTICS",
              details: "Data Analytics for Optimizing Revenue",
            })}
          </SimpleGrid>
        </Flex>

        <Flex
          {...style.flexMissionVision}
          backgroundImage={ourMission}
          width={isMobile ? "100%" : "100%"}
          flexDirection={isMobile ? "column" : "row"}
        >
          {MissionNVision({
            title: "Our Mission",
            details:
              "Through TraX’s strategic partnership with AntChain, connecting products with users is done seamlessly and efficiently, leaving no room for discrepancies. Which allows for a transparent and immutable solution for all.",
          })}

          <Flex {...style.lineMissionVision} />

          {MissionNVision({
            title: "Our Vision",
            details:
              "  TraX envisions a world that is fundamentally built on traceability. Allowing people to trust companies and connect with them on a whole new level.",
          })}
        </Flex>

        <Text
          {...style.txtConnectYour}
          width={isMobile ? "80%" : "40%"}
          fontSize={isMobile ? "18px" : "28px"}
        >
          {currentLangData.app.connectYourSupplyChain}
        </Text>

        <Flex {...style.redLine}></Flex>

        <Flex {...style.bottomFlex} width={isMobile ? "100%" : "50%"}>
          <Text
            {...style.txtLetYou}
            // width={isMobile ? "80%" : "80%"}
          >
            {currentLangData.app.letYou}
          </Text>
        </Flex>

        {/*  Circle Component */}

        {DataCircle({
          textState: textState,
          onMouseEnter1: () =>
            setText(
              renderText({
                title: "Data Analytics",
                text: currentLangData.app.dataAnalyticsDetails,
              })
            ),
          onMouseLeave1: () => setText(""),
          onMouseEnter2: () =>
            setText(
              renderText({
                title: "Qr-code Scanning",
                text: currentLangData.app.qrcodeScanningDetails,
              })
            ),
          onMouseLeave2: () => setText(""),
          onMouseEnter3: () =>
            setText(
              renderText({
                title: "Digitalize Your Business Seamlessly",
                text: currentLangData.app.digitalizeDetails,
              })
            ),
          onMouseLeave3: () => setText(""),
          onMouseEnter4: () =>
            setText(
              renderText({
                title: "Authenticator Solutions",
                text: currentLangData.app.authenticationSolutionDetails,
              })
            ),
          onMouseLeave4: () => setText(""),

          image4: security_icon,
          image1: data_analytic_icon,
          image2: qr_scanner_icon,
          image3: digitalise_icon,
        })}


      </Flex>
      <Contact />
      <Footer />
    </>
  );
};

export default HomeScreenLearnMoreButton;
