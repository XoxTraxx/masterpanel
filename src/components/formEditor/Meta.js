import { Heading, Flex, Text, Input, Button, Textarea,HStack ,Select } from "@chakra-ui/react";
import React, { Component } from "react";
import { useState } from "react";
import styles from "./styles";

const Meta = () => {
  const [value, SetValue] = React.useState(`value`);
  const [attribute, Setattribute] = React.useState(`attribute`);
  const [result, SetResult] = React.useState();

  function getvalue(val) {
    console.log(val.target.value);
    SetValue(val.target.value);
  }
  function getatribute(val) {
    Setattribute(val.target.value);
  }
  function getoutput() {
    SetResult();
    console.log(SetResult,"result")
  };
  const field = [
    {
      title: "Value",
      input: <Input {...style.inputs} type="text" onChange={getvalue}></Input>,
    },
    {
      title: "Attribute",
      input: (
        <Input {...style.inputs} name="value2" onChange={getatribute}></Input>
      ),
    },
    {
      title: "Meta Tags",
      input: 
        <Text
          {...style.metatag}
          // onChange={getoutput}
        >{`<meta name=${value} content=${attribute}/>`}</Text>
      // <Textarea variant="filled" isReadOnly onChange={getoutput} type>{`<meta name="${value}" content=${attribute}/>`}</Textarea>,
      // <Input {...style.inputs} height="60px" type={"text"} value={"{`<meta name=${value} content=${attribute}/>`}"} isReadOnly></Input>
      
    },
  ];
  return (
    <Flex {...style.mainFlex}>
      <Flex {...style.metainput}>
        <Heading size="sm">Meta Tag</Heading>
      </Flex>
      <Flex flexDirection="column">
        <form>
          {field.map((item, index) => {
            return (
              <Flex {...style.align}>
                <Heading size="xs">{item.title}</Heading>
                <Flex {...style.inputs}>{item.input}</Flex>
              </Flex>
            );
          })}
          <Button {...style.button}>Add New Meta Tag</Button>
        </form>
      </Flex>
      <Flex {...style.align}>
        <Flex {...style.outputheading}>
          <Text>Meta Tags</Text>
          <Text>Actions</Text>
        </Flex>
        <Flex justifyContent={"space-between"} mt={"5"}>
          <Text>Meta name="aaa" content="first alphabet repeat 3 times"</Text>
          <Flex>
          <HStack>
            <Button variant={"link"}>Edit</Button>
            <Button variant={"link"}>Delete</Button>
          </HStack>
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"} mt={"5"}>
          <Text>Meta name="aaa" content="first alphabet repeat 3 times"</Text>
          <Flex>
          <HStack>
            <Button variant="link">Edit</Button>
            <Button variant="link">Delete</Button>
          </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
const style = {
  mainFlex: {
    flexDirection: "column",
  },
  metainput: {
    flexDirection: "column",
    width: "500px",
  },
  inputs: {
    variant: "filled",
    placeholder: "placeholder",
    maxW: "400px",
    outline: "none",
  },
  outputheading: {
    bgColor: "#edf2f7",
    justifyContent: "space-between",
    padding: "3px 20px 3px 20px",
  },
  metatag: {
    bgColor: "#edf2f7",
    height: "100px",
    width: "500px",
    borderRadius: "5px",
  },
  button: {
    margin: "10px 5px 30px 0px",
    width: "40%",
    bgColor: "#24b7b0",
  },
  align: {
    flexDirection: "column",
    mt: "5",
  },
};

export default Meta;
