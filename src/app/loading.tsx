import { Center, CircularProgress, Spinner } from "@chakra-ui/react";
import { Container } from "postcss";

const Loading = () => {
  return (
    <Center flex={1} className="h-screen">
      <CircularProgress isIndeterminate color="#FF9C01" />
    </Center>
  );
};
export default Loading;
