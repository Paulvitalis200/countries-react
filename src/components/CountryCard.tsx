import { Card, Image, Stack, Text } from "@chakra-ui/react";
import { CountryInterface } from "../entities/country";
import { Link } from "react-router-dom";

interface CountryProps {
  country: CountryInterface;
}
const CountryCard = ({ country }: CountryProps) => {
  return (
    <Card
      height="336px"
      marginBottom="20px"
      borderRadius="5px"
      boxShadow="lg"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Link to={`/country/${country.name.common}`}>
        <Image
          src={country.flags.png}
          alt="Country"
          borderTopRadius="5px"
          height="180px"
          width="100%"
        />
        <Text
          fontWeight={700}
          marginLeft="25px"
          marginBottom="16px"
          marginTop="24px"
          fontSize="18px"
        >
          {country.name.common}
        </Text>

        <Stack direction="row" align="center">
          <Text fontWeight={600} marginLeft="25px">
            Population:
          </Text>
          <Text fontWeight={400}>{country.population}</Text>
        </Stack>
        <Stack direction="row" align="center">
          <Text fontWeight={600} marginLeft="25px">
            Region:
          </Text>
          <Text fontWeight={400}>{country.region}</Text>
        </Stack>
        <Stack direction="row" align="center">
          <Text fontWeight={600} marginLeft="25px">
            Capital:
          </Text>
          <Text fontWeight={400}>{country.capital}</Text>
        </Stack>
      </Link>
    </Card>
  );
};

export default CountryCard;
