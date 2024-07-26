import { Box, Flex, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box flex={1}>
      <SimpleGrid
        spacing={2}
        minChildWidth="300px"
        bg="#161622"
        p="10px"
        py={"20px"}
        gap={4}
      >
        <Skeleton height="400px" />
        <Flex direction={"column"} p={2} gap={[2, 4]}>
          <Skeleton height="50px" />
          <Skeleton height="20px" w={"30vw"} />
          <Skeleton height="20px" w={"20vw"} />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Loading;