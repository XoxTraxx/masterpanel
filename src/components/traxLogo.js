import React from "react";
import traxLogo from "../components/image/trax-logo.png";
import { Flex, Link, Text, Image } from "@chakra-ui/react";

const TraxLogo = () => {
  return (
    <Flex
      zIndex={10}
      paddingRight={5}
      marginTop={["0", "1", "2"]}
      marginLeft={[-10, -5, 0, 0]}
    >
      <Link to="/Home">
        <Flex p="1" marginTop={-1} marginStart={10} flexDirection={"row"}>
          <Image
            src={traxLogo}
            marginBottom={[4, 2, 2]}
            height={["30px", "20px", "30px", "40px"]}
          />
        </Flex>
      </Link>
    </Flex>
  );
};
export default TraxLogo;
