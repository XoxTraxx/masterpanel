import React from "react";
import { useLocation } from "react-router-dom";
import aat from "../../src/components/image/aat.png";
import Taas from "../../src/components/image/Taas.png";
import registration from "../../src/components/image/registration.png";

import contact from "../../src/components/image/contact.png";
import foodsafety from "../../src/components/image/foodsafety.png";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Notification from "../../src/components/Notification/Notification";
const PageEditor = () => {
  const location = useLocation();
  console.log("location", location.state.displayName);
  const renderSource = (_path) => {
      console.log('paths haider', _path);
    return {
      Antchain:  aat,
      Contact: contact,
      Taas: Taas,
      'Food Safety' : foodsafety,
      Register: registration,
    }[_path]
     
  };
  return (
    <Flex w={"100%"}>
      <Flex
        style={{
          backgroundImage: `url(${renderSource(location?.state?.displayName.trim())})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        w={"100%"}
      >
        <Image
          objectFit={"cover"}
          mr={2}
          w={"100%"}
          src={renderSource(location?.state?.displayName.trim())}
        />
      </Flex>
    </Flex>
  );
};

export default PageEditor;
