import React from "react";
import style from "./style";
import { CgFacebook } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";
import { menu, menu2 } from "../../constants/data";
import logo from "../../components/image/logo.png";
import AntChain from "../../components/image/ant.png";
import LangContext from "../../context/languageContext";
import { Flex, Text, SimpleGrid, Image, Link } from "@chakra-ui/react";

const Footer = () => {
  const { currentLangData } = React.useContext(LangContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: "100%",
      behavior: "smooth",
    });
  };

  const renderFirstGrid = () => {
    return (
      <>
        <Image {...style.logo} src={logo} />
        <Text {...style.traxAisaLabel}>{currentLangData.app.traxAsia}</Text>
        <Text {...style.addressLabel}>{currentLangData.app.address}</Text>
      </>
    );
  };

  const renderMenu = () => {
    return (
      <>
        {menu.map((item, index) => {
          return (
            <Text
              key={index}
              fontSize={14}
              {...style.menuLabel}
              _hover={style.thirdMenu}
              onClick={() => scrollToTop()}
              paddingTop={index === 0 ? 6 : 5}
            >
              {item.title}
            </Text>
          );
        })}
      </>
    );
  };

  const renderThirdContainer = () => {
    return (
      <>
        <Flex marginTop={4}>
          <Link href={"https://www.facebook.com/traxbyxox"}>
            <CgFacebook {...style.socialButton} />
          </Link>
          <Flex ml={3}>
            <Link href={"https://www.linkedin.com/company/trax-asia/"}>
              <RiLinkedinFill {...style.socialButton} />
            </Link>
          </Flex>
        </Flex>
        {menu2.map((item, index) => {
          return (
            <Text
              key={index}
              fontSize={14}
              _hover={style.thirdMenu}
              {...style.menuLabel}
              onClick={() => scrollToTop()}
              paddingTop={index === 0 ? 7 : 5}
            >
              {item}
            </Text>
          );
        })}
      </>
    );
  };

  const renderRightContainer = () => {
    return (
      <Flex {...style.firstConatainer}>
        <Text {...style.stragticPartnerLabel}>
          {currentLangData.app.stratgicPartnerOf}
        </Text>
        <Flex {...style.antChainContainer}>
          <Image src={AntChain} {...style.antChainImage} />
          <Text {...style.antChainLabe}>{currentLangData.app.AntChain}</Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <SimpleGrid {...style.mainContainer}>
      <Flex {...style.firstConatainer}>{renderFirstGrid()}</Flex>
      <Flex {...style.menuContainer}>{renderMenu()}</Flex>
      <Flex {...style.thirdContainer}> {renderThirdContainer()}</Flex>
      <Flex {...style.rightContainer}>{renderRightContainer()}</Flex>
    </SimpleGrid>
  );
};

export default Footer;
