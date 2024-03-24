import { SimpleGrid } from "@chakra-ui/react";
import { CountryInterface } from "../entities/country";
import CountryCard from "./CountryCard";

interface CountriesProps {
  countries: CountryInterface[];
}
const CountryGrid = ({ countries }: CountriesProps) => {
  return (
    <SimpleGrid
      spacing="75px"
      maxW="100%"
      columns={{ base: 1, sm: 1, md: 3, lg: 4 }}
      paddingBottom={"20px"}
      paddingTop="50px"
    >
      {countries.map((country: CountryInterface) => {
        return <CountryCard country={country} key={country.name.common} />;
      })}
    </SimpleGrid>
  );
};

export default CountryGrid;
