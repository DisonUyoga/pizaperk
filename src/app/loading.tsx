import { Center, CircularProgress, Spinner } from "@chakra-ui/react";
import { Container } from "postcss";

const Loading = () => {
  return (
    <Center flex={1}>
      <CircularProgress isIndeterminate color="#FF9C01" />
    </Center>
  );
};
export default Loading;
