import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Icon,
  Image,
  Center,
  Spacer,
} from "@chakra-ui/react";
import "./navigationHeader.css";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import x from "../image/x.png";
import ant from "../image/ant.png";
import style from "./style";
import { navbarMenu } from "../../constants/data";
import TraxLink from "../traxLink";
import TraxLogo from "../traxLogo";
// const Logo = () => {
//   return (
//     <Flex {...style.logoContainer}>
//       <Image {...style.logoImage} src={logo} />
//     </Flex>
//   );
// };

const Logo = ({ isShow, isMobile }) => {
  // console.log("isMobile", isMobile);
  return (
    <Flex  {...style.logoContainer}marginLeft={5}>
      <Flex>
        <Text {...style.txtLogo}>TRA</Text>
        <Image {...style.logoImageInside} justifyContent={"center"}alignItems={"center"} src={x} />
      </Flex>
      <Box display={isMobile ? "none" : "block"}>

      </Box>
    </Flex>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <Icon color={"red"} height={"40px"} width={"30px"} as={MdClose} />
      ) : (
        <Icon color={"red"} height={"40px"} width={"30px"} as={MdMenu} />
      )}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "", onClick, ...rest }) => {
  return (
    <Box _selected={{ color: "red", borderBottomWidth: 1 }}>
      <Link onClick={onClick} as={Link} to={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </Box>
  );
};

const MenuLinks = ({ isOpen, selectedMenu, onSelect }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        {...style.menuLinks}
        justify={["center", "space-between", "flex-end"]}
        direction={["column", null, "row"]}
        paddingTop={[4, 4, 0]}
      >
        {navbarMenu.map((item, index) => {
          return (
            <MenuItem
              key={index}
              to={item.to}
              onClick={() => onSelect(item.to)}
            >
              <Text
                fontSize={"14px"}
                fontWeight={600}
                _hover={{ color: "red", borderBottomWidth: 2 }}
                style={
                  selectedMenu === item.to
                    ? { color: "red", borderBottomWidth: 2 }
                    : {}
                }
                color={"white"}
              >
                {item.tabeName}
              </Text>
            </MenuItem>
          );
        })}
        <Spacer />
        <TraxLink />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return <Flex {...style.navUnauthantication}>{children}</Flex>;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      {/* <Logo /> */}
      <TraxLogo/>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks
        isOpen={isOpen}
        selectedMenu={selectedMenu}
        onSelect={(value) => {
          setSelectedMenu(value);
        }}
      />
    </NavBarContainer>
  );
};

export default NavBar;
