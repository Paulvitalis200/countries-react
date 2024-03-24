import { Link, useParams } from "react-router-dom";

import useCountry from "../hooks/useCountry";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";

const CountryPage = () => {
  const { name } = useParams();
  const { data, isLoading } = useCountry(name);

  return (
    <>
      <NavBar />
      <Container maxW="90%">
        <Link to="/">
          <Flex
            width="5%"
            alignItems="center"
            justifyContent={"space-between"}
            marginTop="100px"
            marginBottom="80px"
          >
            <ArrowBackIcon />
            <Text>Back</Text>
          </Flex>
        </Link>

        {data && (
          <Flex justifyContent="space-between">
            <Image
              src={data[0].flags.png}
              width="560px"
              height="401px"
              borderRadius="5px"
            />
            <Box width="80%">
              <VStack>
                <Heading>{data[0].name.common}</Heading>
                <Box>
                  <Flex>
                    <VStack marginRight="50px">
                      <HStack>
                        <Text textAlign="left" fontWeight="500">
                          Native Name:
                        </Text>
                        <Text>{data[0].name.common}</Text>
                      </HStack>
                      <HStack>
                        <Text textAlign="left" fontWeight="500">
                          Population:
                        </Text>
                        <Text>{data[0].population}</Text>
                      </HStack>
                      <HStack>
                        <Text fontWeight="500">Region:</Text>
                        <Text>{data[0].region}</Text>
                      </HStack>
                      <HStack>
                        <Text fontWeight="500">Sub Region:</Text>
                        <Text>{data[0].subregion}</Text>
                      </HStack>
                      <HStack>
                        <Text fontWeight="500">Capital:</Text>
                        <Text>{data[0].capital[0]}</Text>
                      </HStack>
                    </VStack>
                    <VStack>
                      <HStack>
                        <Text fontWeight="500">Top Level Domain:</Text>
                        <Text>{data[0].tld[0]}</Text>
                      </HStack>
                      <HStack>
                        <Text fontWeight="500">Currencies:</Text>
                        <Text>Euro</Text>
                      </HStack>
                      <HStack>
                        <Text fontWeight="500">Languages:</Text>
                        <Text>Euro</Text>
                      </HStack>
                    </VStack>
                  </Flex>
                </Box>
                <Flex alignItems="center" marginTop="50px" width="70%">
                  <Text marginRight="10px" fontWeight={500}>
                    Borders:{" "}
                  </Text>
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    {data[0].borders &&
                      data[0].borders.map((border: string) => {
                        return (
                          <Box
                            key={border}
                            boxShadow="md"
                            marginRight="20px"
                            paddingTop="5px"
                            paddingBottom="5px"
                            paddingLeft="20px"
                            paddingRight="20px"
                            borderRadius="5px"
                          >
                            {border}
                          </Box>
                        );
                      })}
                  </Flex>
                </Flex>
              </VStack>
            </Box>
          </Flex>
        )}

        {isLoading && (
          <Skeleton
            maxW="100%"
            width="100%"
            height="500px"
            borderRadius="5px"
          />
        )}
        {!data && !isLoading && (
          <Text textAlign="center">Sorry the country does not exist.</Text>
        )}
      </Container>
    </>
  );
};

export default CountryPage;
