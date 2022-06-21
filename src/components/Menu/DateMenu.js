import React from "react";
import style from "./style";
import theme from "../../config/color";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const DateMenu = ({
  onChange,
  selected,
  format,
  timeFormat,
  endDate,
  startDate,
  minDate,
  bg,
  showTimeSelect,
  showTimeSelectOnly,
  use12Hours,
  showTime,
  maxTime,
}) => {
  const CustomInput = ({
    onChange,
    placeholder,
    value,
    isSecure,
    id,
    onClick,
  }) => (
    <InputGroup onClick={onClick}>
      <Input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        // isSecure={isSecure}
        id={id}
        bg={bg ? bg : theme.customColors.gray[900]}
        {...style.dateCustomInput}
        onClick={onClick}
      />
      <InputRightElement>
        <IoMdArrowDropdown />
      </InputRightElement>
    </InputGroup>
  );
  return (
    <DatePicker
      customInput={<CustomInput />}
      selected={selected}
      minDate={minDate}
      dateFormat={showTimeSelect ? "HH:mm a " : "MM/dd/yyy" }
      showTimeSelect={showTimeSelect} 
      showTimeSelectOnly={showTimeSelectOnly}
      onChange={(date) => onChange(date)}
    />
  );
};

export default DateMenu;
