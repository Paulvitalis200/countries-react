import { Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Skeleton
      maxW="264px"
      width="264px"
      height="336px"
      marginBottom="20px"
      borderRadius="5px"
    />
  );
};

export default SkeletonCard;
