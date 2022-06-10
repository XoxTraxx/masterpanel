import { Text, Flex, Image, Circle, Button } from "@chakra-ui/react";

export const TrackDetailComponent = ({ src, title, details }) => {
  return (
    <Flex
      fontSize={"sm"}
      width={"100%"}
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Image
        src={src}
        marginX="5"
        objectFit="fix"
        height={["20px", "50px"]}
        width={["20px", "50px"]}
      />
      <Text
        marginTop={2}
        marginBottom={2}
        color={"#B83024"}
        fontSize={"large"}
        fontWeight={"extrabold"}
      >
        {title}
      </Text>
      <Text marginX={2} width={"100%"}>
        {details}
      </Text>
    </Flex>
  );
};
