import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <SimpleGrid
      spacing={2}
      minChildWidth="300px"
      bg="#161622"
      p="10px"
      py={"20px"}
      h={"100vh"}
    >
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
    </SimpleGrid>
  );
};

export default Loading;
