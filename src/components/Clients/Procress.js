import React from "react";
import style from "./style";
import QrCode from "qrcode.react";
import { useSelector, useDispatch } from "react-redux";
import LangContext from "../../context/languageContext";
import EmptyItem from "../../components/image/nodata.jpg";
import { productData, PhaseData, phaseDataColors } from "../../constants/data";
import {
  Flex,
  Text,
  SimpleGrid,
  Button,
  Center,
  Image,
  Box,
} from "@chakra-ui/react";
const Procress = () => {
  const { currentLangData } = React.useContext(LangContext);
  const state = useSelector((state) => state);
  console.log("state is", state);
  return (
    <Flex {...style.mainFlex}>
      <Flex {...style.productDetailContainer}>
        {state.productReducer?.products.length > 0 ? (
          <>
            <Flex {...style.multiFlex}>
              <Text {...style.productDetailLabe}>
                {currentLangData.app.productDetail}
              </Text>
              <Text ml={5}>{currentLangData.app.qrCode}</Text>
              <Text mr={2}> {currentLangData.app.qty}</Text>
            </Flex>
            <Flex {...style.productContainer}>
              {state.productReducer?.products.map((item, index) => {
                return (
                  <Flex {...style.productDetailInnerContainer} key={index}>
                    {/* <Text {...style.prodcutName}>{item.name}</Text> */}
                    <Box w={"200px"}>
                      <Text {...style.prodcutName}>{item.name}</Text>
                    </Box>
                    <Box alignItems={"center"} h={"30px"} with={"100px"}>
                      <QrCode value={"112233"} style={style.qrCode} />
                    </Box>
                    <Text ml={2} w={"30px"}>
                      {item.productQuantity}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
            <Center {...style.midContainer}>
              {currentLangData.app.seeAll}
            </Center>
          </>
        ) : (
          <Center>
            <Image w={'300px'} src={EmptyItem}></Image>
          </Center>
        )}
      </Flex>
      <SimpleGrid {...style.bottomGrid}>
        <Flex {...style.industryDetailContainer}>
          <Flex {...style.multiFlex}>
            <Text {...style.title}>{currentLangData.app.industryDetail}</Text>
          </Flex>
          <Flex {...style.itopFlex}>
            <Text>{currentLangData.app.industry}</Text>
            <Text>
              {state.client?.client?.industry
                ? state.client?.client?.industry
                : null}
            </Text>
          </Flex>
          <Text {...style.factoryLabel}>{currentLangData.app.factory}</Text>
          {state.manufacturedIn.manufactureIn
            ? state.manufacturedIn?.manufactureIn?.map((item, index) => {
                const { manufacturedIn } = item;
                return (
                  <Flex key={index} {...style.industryFlex}>
                    {manufacturedIn}
                  </Flex>
                );
              })
            : null}
          <Text {...style.desLabel}>
            {currentLangData.app.distribution} !
            {currentLangData.app.distination}
          </Text>
          {state.packedIn.packedIn
            ? state?.packedIn.packedIn.map((item, index) => {
                return (
                  <Flex key={index} {...style.industryFlex}>
                    {item.packedIn}
                  </Flex>
                );
              })
            : null}

          <Flex {...style.multiFlex}>
            <Text {...style.hilalStatus}>{currentLangData.app.halal}</Text>
            <Text {...style.hilalStatus}>{currentLangData.app.yes}</Text>
          </Flex>
        </Flex>
        <Flex {...style.phaseDetailContainer}>
          <Flex {...style.multiFlex}>
            <Text {...style.title}>{currentLangData.app.phaseDetails}</Text>
            <Text {...style.phaseLabel}>
              {state.phase?.phase?.length} {currentLangData.app.phases}
            </Text>
          </Flex>
          {state.phase?.phase?.map((item, index) => {
            const { phase, color, department } = item;
            return (
              <Flex
                {...style.phaseFlex}
                key={index}
                backgroundColor={phaseDataColors[index]}
              >
                {department}
              </Flex>
            );
          })}
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Procress;
