import { Skeleton, VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <VStack p={4} spacing={10}>
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
    </VStack>
  );
};

export default Loading;
