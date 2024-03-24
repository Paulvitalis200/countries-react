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
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useCountries from "../hooks/useCountries";
import useCountryQueryStore from "../stores/countrystore";
import SkeletonGrid from "../components/SkeletonGrid";
import CountryGrid from "../components/CountryGrid";
import { useRef, useState } from "react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const { data, isLoading } = useCountries();

  const { colorMode } = useColorMode();

  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const setRegion = useCountryQueryStore((s) => s.setRegion);
  const setCountry = useCountryQueryStore((s) => s.setCountry);

  const handleSetRegion = (region: string) => {
    if (region === "All") {
      setRegion("");
    } else {
      setRegion(region);
    }
  };

  const ref = useRef<HTMLInputElement>(null);
  const [country, setCountryState] = useState("");
  const handleSetCountry = (country: string) => {
    if (country == "") {
      setCountry("");
      setCountryState("");
    } else {
      setCountry(country);
      setCountryState(country);
    }
  };

  const handleSearchChange = (event: any) => {
    setCountryState(event.target.value);
  };

  return (
    <>
      <Container maxW="100%" padding="0">
        <NavBar />
        <Container
          maxW="90%"
          bg={colorMode === "light" ? "#FAFAFA" : "#2d3748"}
        >
          <Flex
            marginTop="20px"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <form
              style={{ width: "100%" }}
              onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) {
                  handleSetCountry(ref.current.value.trim());
                }
              }}
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search for a country..."
                  maxW={{ base: "100%", sm: "100%", md: "30%" }}
                  marginBottom={{ base: "20px", sm: "20px", md: "0" }}
                  boxShadow="md"
                  fontSize={"14px"}
                  ref={ref}
                  value={country}
                  onChange={() => handleSearchChange(event)}
                />
              </InputGroup>
            </form>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                boxShadow="md"
                borderRadius="4px"
                width="200px"
                bg={colorMode === "dark" ? "#2d3748" : "white"}
              >
                <Text fontWeight={400} fontSize={"14px"}>
                  Filter By Region
                </Text>
              </MenuButton>
              <MenuList>
                {regions.map((region) => (
                  <MenuItem
                    key={region}
                    onClick={() => handleSetRegion(region)}
                  >
                    {region}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Container>
        <Container maxW="90%">
          {isLoading && <SkeletonGrid />}
          {data && <CountryGrid countries={data} />}
          {!data && (
            <Flex flexDirection="column" alignItems="center">
              <Text textAlign={"center"}>
                No Country matching search parameter.
              </Text>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => handleSetCountry("")}
                marginTop="10px"
              >
                Back
              </Button>
            </Flex>
          )}
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
