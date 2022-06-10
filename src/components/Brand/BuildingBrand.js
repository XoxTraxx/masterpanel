import React from "react";
import style from "./style";
import LangContext from "../../context/languageContext";
import overseasesLogo from "../../components/image/overseasesLogo.png";
import phoneImages from "../../components/image/phoneImages.png.webp";
import multiImages from "../../components/image/multiImages.png.webp";
import { Box, Flex, Text, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const BuildingBrands = () => {
  const { currentLangData } = React.useContext(LangContext);
  return (
      <SimpleGrid {...style.grid}>
        <Flex {...style.rightDiv}>
          <Heading {...style.buildingBrandLabel}>
            {currentLangData.app.buildingBrands}
          </Heading>
          <Box {...style.divder}></Box>
          <Text {...style.productLabel}>
            <span style={style.spanLabel}>
              Product authenticity is crucial to protect customer’s rights and
              health
            </span>
            TraX’s unique product solution prevents fraud and parralel imports,
            allowing businesses to track real-time location on the supply chain
            and enables seamless communication between your customers.
          </Text>
        </Flex>
        <Flex {...style.rightTopDiv}>
          <Image src={multiImages} />
        </Flex>
        <Flex {...style.bottomDiv}>
          <Image src={phoneImages} />
        </Flex>
        <Flex {...style.rightBottomDiv}>
          <Heading {...style.caseStudyLabel}>
            CASE STUDY: TRACK &<br /> TRACE FROM PRODUCTION
            <br /> LINE TO CUSTOMERS
          </Heading>
          <Flex {...style.divderContainer}>
            <Box {...style.divder}></Box>
          </Flex>
          <Flex {...style.overSeaseLogoContainer}>
            <Image {...style.overseaseLogo} src={overseasesLogo} />
          </Flex>
          <Text {...style.overseaseLabel}>
            <span style={style.spanLabel}>
              Oversea’s mooncake, one of Malaysia’s largest mooncake
              manufacturer
            </span>
            produces near 1 million pieces of mooncake anually. Taken a step
            towards innovation while preserving the culture, Oversea’s aims not
            only to use traceability to expand in the digital market; but also
            to further explore on the potential of the technology.
          </Text>
        </Flex>
      </SimpleGrid>
  );
};

export default BuildingBrands;
