import { Card, Image, Stack, Text } from "@chakra-ui/react";
import { CountryInterface } from "../entities/country";

interface CountryProps {
  country: CountryInterface;
}
const CountryCard = ({ country }: CountryProps) => {
  return (
    <Card
      maxW="264px"
      width="264px"
      height="336px"
      marginBottom="20px"
      borderRadius="5px"
      boxShadow="lg"
    >
      <Image
        src={country.flags.png}
        alt="Country"
        borderTopRadius="5px"
        height="180px"
      />
      <Text
        fontWeight={700}
        marginLeft="25px"
        marginBottom="16px"
        marginTop="24px"
        color="#555555"
        fontSize="18px"
      >
        {country.name.common}
      </Text>

      <Stack direction="row" align="center">
        <Text fontWeight={700} marginLeft="25px" color="#555555">
          Population:
        </Text>
        <Text fontWeight={400} color="#555555">
          {country.population}
        </Text>
      </Stack>
      <Stack direction="row" align="center">
        <Text fontWeight={700} marginLeft="25px" color="#555555">
          Region:
        </Text>
        <Text fontWeight={400} color="#555555">
          {country.region}
        </Text>
      </Stack>
      <Stack direction="row" align="center">
        <Text fontWeight={700} marginLeft="25px" color="#555555">
          Capital:
        </Text>
        <Text fontWeight={400} fontSize="13px" color="#555555">
          {country.capital}
        </Text>
      </Stack>
    </Card>
  );
};

export default CountryCard;
