import { Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Container
        paddingTop="20px"
        paddingBottom="20px"
        boxShadow="md"
        maxW="100%"
        paddingLeft="90px"
        paddingRight="90px"
      >
        <Flex justifyContent="space-between">
          <Text fontWeight="800">Where in the World?</Text>
          <HStack onClick={toggleColorMode} cursor={"pointer"}>
            <BsMoon />
            <Text>Dark Mode</Text>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
