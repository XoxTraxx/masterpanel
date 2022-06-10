import React, { Component, createContext } from "react";
import {
  Flex,
  Text,
  Avatar,
  Center,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import LangContext from "../../context/languageContext";
import { useAuthState } from "../../context/authContext";
import { Link } from "react-router-dom";
import theme from "../../config/color";
import style from "./style";
const Profile = ({isShow,isMobile}) => {
  const { currentLangData } = React.useContext(LangContext);
  const { user } = useAuthState();
  return (
    <Flex {...style.mainContainer2}>
      <Center {...style.centerContainer}>
        <Avatar src={user?.image} {...style.pavartar} />
        <Text {...style.desText}>{currentLangData.app.subAdmin}</Text>
        <Text {...style.nameText}>{user?.name}</Text>
        <Text {...style.desLabel}>{user?.mangingRole}</Text>
        <Text {...style.clText}>{currentLangData.app.overSeaResturant}</Text>
        <SimpleGrid marginY={5} columns={3}>
          <Flex {...style.infoFlex}>
            <Text {...style.infoText}>{currentLangData.app.datedJoin}</Text>
            <Text {...style.detaillabel}>31/10/2021</Text>
          </Flex>
          <Flex {...style.infoFlex}>
            <Text {...style.infoText}>{currentLangData.app.deparment}</Text>
            <Text {...style.detaillabel}>{user?.department}</Text>
          </Flex>
          <Flex {...style.rightFlex}>
            <Text {...style.infoText}>{currentLangData.app.desigination}</Text>
            <Text {...style.detaillabel}>{user.companyPosition}</Text>
          </Flex>
        </SimpleGrid>
        <Link as={Link} to="/updateProfile">
          <Button onClick={ isShow} {...style.fullProfileButton}>
            <Text {...style.buttonText}>
              {currentLangData.app.viewFullProfile}
            </Text>
            <BiRightArrowAlt size={22} />
          </Button>
        </Link>
      </Center>
    </Flex>
  );
};
export default Profile;

