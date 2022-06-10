import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Center,
  ModalCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import theme from "../../config/color";

export const ReturnFocus = ({ isOpens, onCloses }) => {
  const finalRef = React.useRef();

  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpens} onClose={onCloses}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>titleOpen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>bodasdy</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloses}>
              Closeasdasd
            </Button>
            <Button variant="ghost">Secondaasdsadsary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
