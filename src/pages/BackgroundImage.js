import React, { Component } from "react";
import { Flex, Image } from "@chakra-ui/react";
import TraxImage from "../components/image/Trax-background-06.png";

export default class BackgroundImage extends Component {
  render() {
    return (
      <Flex flex={1}>
        <Image src={TraxImage} />
      </Flex>
    );
  }
}
