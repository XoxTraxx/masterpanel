import React, { useContext } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import LangContext from "../context/languageContext";
import ant from "../components/image/ant.png";

const TraxLink = () => {
  const { currentLangData } = useContext(LangContext);

  return (
    <Flex
      display={"block"}
      paddingRight={1}
      marginLeft={"-5"}
      marginTop={[-1, 0]}
      marginRight={[5, 10]}
      flexDirection={"column"}
      // borderBottom={"1px solid #da1c18"}
      // height={{ sm: "200px", md: "300px", lg: "400px" }}
    >
      <Text
        fontWeight={600}
        marginY={0.5}
        marginStart={5}
        color="#da1c18"
        fontSize="10px"
      >
        {currentLangData.app.strategicPartner}
      </Text>
      <Flex>
        <Image
          height={["20px", "30px"]}
          marginX="5"
          objectFit="fix"
          // height="30px"
          src={ant}
        />
        <Text
          fontSize={{ sm: "10px", md: "14px", lg: "18px" }}
          fontWeight="bold"
          marginLeft={"-3"}
          color="white"
        >
          {currentLangData.app.antchain}
        </Text>
      </Flex>
    </Flex>
  );
};
export default TraxLink;
