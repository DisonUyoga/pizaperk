import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <SimpleGrid
      spacing={2}
      minChildWidth="250px"
      bg="#161622"
      p="10px"
      py={"20px"}
      flex={1}
    >
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
      <Skeleton height="200px" />
    </SimpleGrid>
  );
};

export default Loading;
