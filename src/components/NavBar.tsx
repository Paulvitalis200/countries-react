import { Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Container
        paddingTop="20px"
        paddingBottom="20px"
        boxShadow="md"
        maxW="100%"
        fontSize={{ base: "15px", sm: "15px", md: "16px", lg: "16px" }}
        paddingRight={{ base: "10px", sm: "10px", md: "90px", lg: "90px" }}
        paddingLeft={{ base: "10px", sm: "10px", md: "90px", lg: "90px" }}
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
