import { SimpleGrid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

const SkeletonGrid = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <SimpleGrid
        spacing="75px"
        maxW="100%"
        columns={{ base: 1, sm: 1, md: 3, lg: 4 }}
        paddingBottom={"20px"}
        paddingTop="50px"
      >
        {skeletons.map((skeleton) => (
          <SkeletonCard key={skeleton} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default SkeletonGrid;
