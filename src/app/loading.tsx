import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <SimpleGrid
      spacing={2}
      bg="#161622"
      p="10px"
      py={"20px"}
      flex={1}
      flexDirection={"row"}
    >
      <Skeleton height="200px" />
      <Skeleton height="150px" />
      <Skeleton height="150px" />
      <Skeleton height="100px" />
      <Skeleton height="100px" />
    </SimpleGrid>
  );
};

export default Loading;
