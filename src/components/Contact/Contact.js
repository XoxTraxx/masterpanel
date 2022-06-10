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
  useMediaQuery,
} from "@chakra-ui/react";
import style from "./style";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import LangContext from "../../context/languageContext";
import { CurrencyCodes } from "validator/lib/isISO4217";

const Contact = () => {
  const { currentLangData } = React.useContext(LangContext);

  return (
    <Box {...style.mainContainer}>
      <Center>
        <Text {...style.getStartedText}>{currentLangData.app.getStarted}</Text>
      </Center>
      <Center>
        <Box {...style.divider}></Box>
      </Center>
      <Center>
        <Text {...style.moreInfoLabel}>{currentLangData.app.moreinfo}</Text>
      </Center>
      <Center>
        <Flex marginTop={5}>
          <Box {...style.wattsupButton} _hover={{ backgroundColor: "#25D366" }}>
            <Link href={'https://api.whatsapp.com/send/?phone=60103377990&text&app_absent=0'}>
            <Center>
              <IoLogoWhatsapp {...style.socialButton} />
              <Text {...style.wattsapLabel}>
                {currentLangData.app.wattsApp}
              </Text>
            </Center>
            </Link>
          </Box>
          <Box {...style.circle}>
            <Center {...style.circleInner}>Or</Center>
          </Box>
          <Box
            {...style.emailButton}
            _hover={{ backgroundColor: "rgb(106,118,205)" }}
          >
            <Link href="mailto:trax@xox.com.my?body=My custom mail body">
              <Flex>
                <HiOutlineMail {...style.socialButton} />
                <Text {...style.emailLabel}>{currentLangData.app.email}</Text>
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Contact;
