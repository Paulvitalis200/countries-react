import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import useCountries from "../hooks/useCountries";

const HomePage = () => {
  console.log("START");
  const { data } = useCountries();

  console.log(data);

  return (
    <>
      <Container maxW="100%" bg="#FAFAFA" height="100vh">
        <Container maxW="80%">
          <Flex>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search for a country..."
                maxW="30%"
                bg="white"
                boxShadow="md"
                fontSize={"14px"}
              />
            </InputGroup>
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="white"
                boxShadow="md"
                borderRadius="5px"
              >
                <Text fontWeight={400} fontSize={"14px"}>
                  Filter By Region
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Container>
        <Container maxW="80%">Country container</Container>
      </Container>
    </>
  );
};

export default HomePage;
