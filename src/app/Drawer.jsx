import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";

function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box colorScheme='whiteAlpha'>
      <Button 
        display={{ base: "flex", lg: "none" }}
        mt={'30px'}
        fontSize={30} 
        bg={"transparent"}
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default BurgerMenu;
