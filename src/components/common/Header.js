import React, { useState, useContext } from "react";
import {
  Box,
  Link,
  Text,
  Stack,
  Flex,
  Icon,
  Image,
  Input,
  Center,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
} from "@chakra-ui/react";
import style from "./style";
import x from "../image/x.png";
// import traxLogo from "../image/traxLogo.png";
import ant from "../image/ant.png";
import logo from "../image/logo.png";
import { MdMenu } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import LangContext from "../../context/languageContext";
import TraxLogo from "../traxLogo";

const Logo = ({ isShow, isMobile }) => {
  console.log("isMobile", isMobile);
  return (
    <Flex {...style.logoContainer}>
      {/* <Flex p="1" marginTop={-1} marginStart={10} flexDirection={"row"}>
          <Image
            src={traxLogo}
            marginBottom={[4, 2, 2]}
            height={["30px", "20px", "30px", "40px"]}
          />
        </Flex> */}
      <Box display={isMobile ? "none" : "block"}>
        <Center {...style.logoMidContainer}>
          <Text {...style.powerByLabel}>Powered by </Text>
          <Image {...style.antchainImage} src={ant} />
          <Text {...style.antChainContainer}>ANTCHAIN</Text>
        </Center>
      </Box>
    </Flex>
  );
};

const MenuToggle = ({ toggle, isOpen, isShow }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {/* {isOpen ? <Icon as={MdClose} /> : <Icon onClick={()=>isShow()}  as={MdMenu} />} */}
      <Icon {...style.hamBurgerMenu} onClick={() => isShow()} as={MdMenu} />
    </Box>
  );
};

const MenuData = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

// const RenderLangugageoption = (lang, switchLang) => {
//   const setIndex = () => {
//     i = 2;
//   };
//   return (
//     <Menu>
//       <MenuButton>
//         <Image
//           width={"60px"}
//           h={"30px"}
//           src={lang === "en-US" ? flag1 : flag2}
//         />
//       </MenuButton>
//       <MenuList>
//         <MenuItem onClick={() => switchLang("en-US")}>
//           <Image marginX={3} width={"50px"} h={"30px"} src={flag1} /> Engilsh
//         </MenuItem>
//         <MenuDivider />
//         <MenuItem onClick={() => switchLang("ml")}>
//           <Image marginX={3} width={"50px"} h={"30px"} src={flag2} />
//           Malay
//         </MenuItem>
//       </MenuList>
//     </Menu>
//   );
// };

const MenuLinks = ({ isOpen, lang, switchLang }) => {
  return (
    <Box
      display={{ base: isOpen ? "none" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        {...style.menuLinks}
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        <Input placeholder={"Search"} {...style.searchInput}></Input>
        <BsFillBellFill {...style.icon} />
        <AiFillSetting {...style.icon} />
        {/* <RenderLangugageoption lang={lang} switchLang={() => switchLang()} /> */}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return <Flex {...style.nav}>{children}</Flex>;
};

const Header = ({ isShow, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { switchLang, currentLangData, lang } = useContext(LangContext);

  return (
    <NavBarContainer>
      {/* <Logo isShow={isShow} isMobile={isMobile} /> */}
      <TraxLogo />
      <MenuToggle isShow={isShow} toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} lang={lang} switchLang={() => switchLang()} />
    </NavBarContainer>
  );
};

export default Header;
