"use client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
interface ErrorProps {
  name: string | undefined;
  message: string | undefined;
}
const Error = ({ name, message }: ErrorProps) => {
  return (
    <Alert status="error" h={"100vh"}>
      <AlertIcon />
      <AlertTitle>Something went wrong!!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default Error;
