import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import theme from "../../config/color";

const CustomModal = ({ isOpen, onClose, onOpen, titleOpen, cancel }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [visible, setVisible] = React.useState(false);
  const [body, setBody] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const bridge = ({ visible, body, title }) => {
    console.log("haider", visible);
    if (typeof visible === "boolean") {
      setVisible(visible);
      setBody(body);
      setTitle(title);
    }
  };

  React.useEffect(() => {
    if (props.bridge) props.bridge.current = bridge;
  }, []);

  return (
    <Flex>
      {/* <Button
          color={theme.customColors.common[100]}
          backgroundColor={theme.customColors.bgColors[300]}
          onClick={() => onOpen}
        >
          {titleOpen}
        </Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            borderBottomColor={theme.customColors.bgColors[300]}
            borderBottomWidth={0.5}
          >
            {title}
          </ModalHeader>
          <ModalBody padding={5}>
            <Center>{body}</Center>
          </ModalBody>
          <ModalFooter
            borderTopWidth={0.5}
            borderTopColor={theme.customColors.bgColors[300]}
          >
            <Button
              color={theme.customColors.common[100]}
              backgroundColor={theme.customColors.masterpanelColors[100]}
              onClick={() => {
                onClose;
              }}
            >
              {cancel}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default CustomModal;
