import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <>
      <Card
        height="336px"
        marginBottom="20px"
        borderRadius="5px"
        padding="20px"
      >
        <Skeleton height="136px" marginBottom="20px" borderRadius="5px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Card>
    </>
  );
};

export default SkeletonCard;
