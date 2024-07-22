import { Skeleton, VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <VStack p={4} spacing={10} flex={1} bg="#161622">
      <Skeleton height="200px" />
      <Skeleton height="150px" />
      <Skeleton height="150px" />
    </VStack>
  );
};

export default Loading;
