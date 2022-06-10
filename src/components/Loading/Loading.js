import React from "react";
import theme from "../../config/color";
import { Center, Container, CircularProgress } from "@chakra-ui/react";

const Loading = ({ size }) => {
  return (
    <Center>
      <Container>
        <CircularProgress
          size={size}
          isIndeterminate
          color={theme.customColors.bgColors[300]}
        />
      </Container>
    </Center>
  );
};
export default Loading;
