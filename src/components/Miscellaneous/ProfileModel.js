import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(user);
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}

      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="2rem"
            fontFamily="ubuntu"
            display="flex"
            justifyContent="center"
          >
            Hello Patient!!!
          </ModalHeader>
          <ModalCloseButton />

          {/* showing image */}
          <Image
            borderRadius="full"
            boxSize="150px"
            display="flex"
            alignItems="left"
            marginLeft="1rem"
            src={user.image}
            alt={user.name}
          />
          {/* showing name */}
          {/* <ModalBody
            display="flex"
            flexDir="column"
            marginLeft="0rem"
            justifyContent="space-between"
            fontSize="2rem"
          >
            Name: {user.name}
          </ModalBody> */}

          <Text
            fontSize={{ base: "2rem", md: "30px" }}
            fontFamily="ubuntu"
            marginLeft="1rem"
          >
            Name: {user.name}
          </Text>
          
          <Text
            fontSize={{ base: "2rem", md: "30px" }}
            fontFamily="ubuntu"
            marginLeft="1rem"
          >
            Email: {user.email}
          </Text>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModel;
