import React from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Icon,
} from "@chakra-ui/react";
import style from "./style";
import { AiFillCaretDown } from "react-icons/ai";
import LangContext from "../../context/languageContext";

const YearMenu = ({ handleOnMenuClick, value }) => {
  const { currentLangData } = React.useContext(LangContext);
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => year - index);
  return (
    <Menu size={"sm"}>
      <MenuButton {...style.button} as={Button}>
        <Text {...style.yearLablel}>
          {value ? value : currentLangData.app.selectYear}
          <Icon {...style.menuIncon} as={AiFillCaretDown} />
        </Text>
      </MenuButton>
      <MenuList {...style.menuList}>
        {years.map((year, index) => {
          return (
            <MenuItem
              onClick={() => handleOnMenuClick(year)}
              key={`year${index}`}
              value={year}
            >
              <>{year} </>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default YearMenu;
