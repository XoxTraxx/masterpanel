import React from "react";
import {
  Flex,
  Text,
  SimpleGrid,
  Button,
  Center,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";
import style from "./style";
import LangContext from "../../context/languageContext";
import { coreAdvantages } from "../../constants/data";
const CoreAdvantages = () => {
  const { currentLangData } = React.useContext(LangContext);

  return (
    <Box {...style.mainContainer}>
      <Flex {...style.cDiv}>
        <Text {...style.coreAdvantageLabel}>
          {currentLangData.app.coreAdvantages}
        </Text>
      </Flex>
      <Flex {...style.detailMainCntainer}>
        <Center {...style.centerContainer}>
          {coreAdvantages.map((item, index) => {
            return (
              <Flex key={index} {...style.detailContainer}>
                <Image {...style.image} src={item.image} />
                <Text {...style.title}>{item.title}</Text>
                <Text {...style.desCription}>{item.des}</Text>
              </Flex>
            );
          })}
        </Center>
      </Flex>
      <Center>
      <Link href={"https://www.antchain.net"} isExternal>
        <Button {...style.learnMoreButton}>
          {currentLangData.app.learnMore}
        </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default CoreAdvantages;
