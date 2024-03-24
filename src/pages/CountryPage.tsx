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
            width={{
              base: "25%",
              sm: "25%",
              md: "5%",
            }}
            alignItems="center"
            justifyContent={"space-between"}
            marginTop={{
              base: "40px",
              sm: "40px",
              md: "60px",
              lg: "100px",
            }}
            marginBottom={{
              base: "64px",
              sm: "64px",
              md: "80px",
              lg: "80px",
            }}
          >
            <ArrowBackIcon />
            <Text>Back</Text>
          </Flex>
        </Link>

        {data && (
          <Flex
            justifyContent="space-between"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Image
              src={data[0].flags.png}
              width="560px"
              height={{
                base: "auto",
                sm: "auto",
                md: "401px",
                lg: "401px",
              }}
              marginRight={{
                base: "0",
                sm: "0",
                md: "50px",
                lg: "80px",
              }}
              borderRadius="5px"
            />
            <Box width="80%">
              <VStack alignItems={"flex-start"}>
                <Heading
                  marginTop={{
                    base: "30px",
                    sm: "30px",
                    md: "0",
                    lg: "0",
                  }}
                >
                  {data[0].name.common}
                </Heading>
                <Box>
                  <Flex
                    flexDirection={{
                      base: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    }}
                  >
                    <VStack
                      marginRight="50px"
                      align="center"
                      alignItems={"flex-start"}
                    >
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
                    <VStack alignItems={"flex-start"}>
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
                <Flex
                  alignItems="flex-start"
                  marginTop="50px"
                  width={{
                    base: "100%",
                    sm: "100%",
                    md: "70%",
                  }}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                  }}
                >
                  <Text marginRight="10px" fontWeight={500}>
                    Border countries:{" "}
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
