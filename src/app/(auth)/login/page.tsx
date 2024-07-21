"use client";
import Button from "@/components/ui/Button";
import React from "react";

import { Box, Container } from "@chakra-ui/react";
import ProductImage from "@/components/ProductImage";
import Image from "next/image";
import ButtonComponent from "@/components/ui/Button/Button";
import { store } from "@/features/store";
import { redirect, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hook";

async function LoginPage() {
  const { session } = useAppSelector((state) => state.auth);
  const router = useRouter();

  if (session) {
    return router.push(`/?session=${session}`);
  }
  return (
    <Box
      bg={"#161622"}
      position={"relative"}
      w={"100vw"}
      h={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Image
        src="/pizzaman.png"
        style={{
          opacity: 0.2,
        }}
        alt=""
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
      />
      <Box
        position={"absolute"}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <ButtonComponent />
      </Box>
    </Box>
  );
}

export default LoginPage;
